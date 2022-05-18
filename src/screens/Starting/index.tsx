import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ActivityIcon from '../../components/icons/ActivityIcon';
import HomeIcon from '../../components/icons/HomeIcon';
import { ContainerTop, Container, Title, ContainerButtom, Btn, TextButtom } from './styles';
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
    <ContainerTop>
      <Container>
        <Title> Dando vida ao seu sonho! </Title>
        <ActivityIcon />
      </Container>
      <ContainerButtom>
        <Btn onPress={()=> Start() }>
          <HomeIcon />
          <TextButtom> Home </TextButtom>
        </Btn>
      </ContainerButtom>
    </ContainerTop>
  );
}