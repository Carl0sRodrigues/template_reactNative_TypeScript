import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ActivityIcon from '../../components/icons/ActivityIcon';
import HomeIcon from '../../components/icons/HomeIcon';
import { ConteinerTop, Conteiner, Title, ConteinerButtom, Btn, TextButtom } from './styles';
// import { RootStackParamList } from '../../Routes/types';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// type HomeScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'Home'
// >;

export default function Tab() {

  // const navigation = useNavigation<HomeScreenNavigationProp>();
  const navigation = useNavigation();


  function Start() {
    navigation.navigate('Home')
  }

  return(
    <ConteinerTop>
      <Conteiner>
        <Title> Dando vida ao seu sonho! </Title>
        <ActivityIcon />
      </Conteiner>
      <ConteinerButtom>
        <Btn onPress={()=> Start() }>
          <HomeIcon />
          <TextButtom> Home </TextButtom>
        </Btn>
      </ConteinerButtom>
    </ConteinerTop>
  );
}