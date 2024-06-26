import firestore from '@react-native-firebase/firestore';

const productRef = firestore().collection('products');
const categoryRef = firestore().collection('categories');

export {
    productRef,
    categoryRef
}