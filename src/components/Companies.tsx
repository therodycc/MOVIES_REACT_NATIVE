import React from 'react';
import { FlatList, View } from 'react-native';
import { ProductionCompany } from '../interfaces/movies.interface';
import { CompanyCard } from './CompanyCard';

interface Props {
  companies: ProductionCompany[];
}

export const Companies = ({companies}: Props) => {
  return (
    <View>
      <FlatList
        data={companies}
        renderItem={({item}) => <CompanyCard company={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
        contentContainerStyle={{
          alignItems: 'center',
          width: '100%',
          marginVertical: 30,
        }}
      />
    </View>
  );
};
