import firestore from '@react-native-firebase/firestore';

const userRef = firestore().collection('users');
const productRef = firestore().collection('products');
const categoryRef = firestore().collection('categories');

export {
    userRef,
    productRef,
    categoryRef
}