import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Container, Img, Dreaw } from './styles';

export default function Home() {
  
  const navigation = useNavigation();

  function Next() {
    navigation.navigate('Tab')
  }

  return(
    <Container>
      <TouchableOpacity onPress={ ()=> Next() }>
        <Img
          source={require('../../assets/inovacao.png')}
        />
        <Dreaw> Idéias e Inovações! </Dreaw>
      </TouchableOpacity>
    </Container>
  );
}