import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore, {Filter} from '@react-native-firebase/firestore';
import {OfferModel} from '../../../models/offerModel';
import {OfferItem} from '../../../components';

type Props = {};

const OffersList = (props: Props) => {
  const [offers, setOffers] = useState<OfferModel[]>([]);
  const time = new Date().getTime();

  useEffect(() => {
    firestore()
      .collection('offers')
      .where('startDate', '<=', time)
      .onSnapshot(snapshot => {
        if (snapshot.empty) {
          console.log('No offers available');
        } else {
          const items: OfferModel[] = [];
          snapshot.forEach((doc: any) => {
            items.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          setOffers(items);
        }
      });
  }, []);

  return (
    <>
      <FlatList
      style={{
        paddingVertical: 16,
      }}
        horizontal
        data={offers}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => <OfferItem key={item.id} item={item} />}
      />
    </>
  );
};

export default OffersList;
