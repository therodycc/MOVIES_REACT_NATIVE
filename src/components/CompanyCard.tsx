import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { ProductionCompany } from '../interfaces/movies.interface';

interface Props {
  company: ProductionCompany;
}

export const CompanyCard = ({company}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${company.logo_path}`;
  return <Image source={{uri}} style={styles.image} resizeMode="cover" />;
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 10,
    objectFit: 'contain',
    borderWidth: 2,
    borderColor: 'red',
    padding: 10,
    backgroundColor:"white"
  },
});
