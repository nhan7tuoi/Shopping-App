const serviceaccount = require('../../service-account.json');
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import {userRef} from '../firebase/firebaseConfig';
import {arrayUnion} from '@react-native-firebase/firestore';
const user = auth().currentUser;

export class HandleNotifycation {
  static getAccessToken = async () => {
    try {
      const response = await fetch(
        'https://server-generated-token.onrender.com/getAccessToken',
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: serviceaccount.client_email,
            key: serviceaccount.private_key,
          }),
        },
      );
      const rs = await response.json();
      return rs.data;
    } catch (error) {
      console.log(error);
    }
  };

  static checkNotifycation = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      this.getFCMToken();
    } else {
      console.log('Error: ', authStatus);
    }
  };

  static getFCMToken = async () => {
    const fcmToken = await AsyncStorage.getItem('fcmToken');
    if (fcmToken) {
      this.updateFcmTokenToDB(fcmToken);
    } else {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log('Your Firebase Token is:', fcmToken);
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  };

  static updateFcmTokenToDB = async (token: string) => {
    if (user) {
      const snap: any = await userRef.doc(user.uid).get();
      if (snap.exists) {
        const tokens = snap.data().tokens ? snap.data().tokens : [];

        if (!tokens.includes(token)) {
          tokens.push(token);
          await userRef.doc(user.uid).update({tokens: arrayUnion(token)});
        }
      }
    }
  };

  static pushNotifycation = async (
    uid: string,
    notificationData: {
      title: string;
      body: string;
      data: any;
    },
  ) => {
    try {
      const snap = await userRef.doc(uid).get();

      if (snap.exists) {
        const data: any = snap.data();
        if (data.tokens && data.tokens.length > 0) {
          data.tokens.forEach(async (token: string) => {
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            myHeaders.append('Authorization', `Bearer ${await this.getAccessToken()}`);

            const raw = JSON.stringify({
              message: {
                token: token,
                notification: {
                  title: notificationData.title,
                  body: notificationData.body,
                },
                data: {
                  id: notificationData.data.id,
                },
              },
            });
            const requestOptions: any = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow',
            };

            const res =  await fetch(
              `https://fcm.googleapis.com/v1/projects/shopping-app-2002/messages:send`,
              requestOptions,
            );
            const result = await res.json();
            console.log(result);
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}
