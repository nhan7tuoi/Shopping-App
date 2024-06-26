import {View, Text, Pressable, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {categoryRef} from '../../../firebase/firebaseConfig';
import {TextComponent} from '../../../components';
import {fontFamilies} from '../../../constants/fontFamilies';
import {colors} from '../../../constants/colors';
import {CategoryModel} from '../../../models/categoryModel';
import {Button} from '@bsdaoquang/rncomponent';

const CategoriesList = () => {
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  useEffect(() => {
    categoryRef.onSnapshot(snap => {
      if (snap.empty) {
        console.log('No categories available');
      } else {
        const items: CategoryModel[] = [];

        snap.forEach((item: any) => {
          items.push({
            id: item.id,
            ...item.data(),
          });
        });
        setCategories(items);
      }
    });
  }, []);


  return (
    <View style={{marginTop: 16}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
          paddingHorizontal: 16,
        }}>
        <TextComponent
          text="Categories"
          size={24}
          font={fontFamilies.poppinsBold}
        />
        <Pressable onPress={() => {}}>
          <TextComponent
            text="View All"
            type="text"
            color={colors.desciption}
            font={fontFamilies.poppinsSemiBold}
          />
        </Pressable>
      </View>

      {categories.length > 0 && (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={categories}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <View
              key={item.id}
              style={{
                marginLeft: 16,
                marginRight: index === categories.length - 1 ? 16 : 0,
              }}>
              <Button
                title={item.title}
                onPress={() => {}}
                color={colors.dark}
                styles={{
                  paddingHorizontal: 16,
                  paddingVertical: 6,
                }}
                inline
              />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default CategoriesList;
