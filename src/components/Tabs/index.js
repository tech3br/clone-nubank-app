import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {Container, TabsContainer, TabItem, TabText} from './styles';

export default function Tabs({translateY}) {
  return (
    <Container
      style={{
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [0, 30],
            extrapolate: 'clamp',
          })
        }],        
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.1],
          extrapolate: 'clamp',
        }),
      }}>
      <TabsContainer>
        <TabItem>
          <Icon name="user-friends" size={24} color="#fff" />
          <TabText>Indicar Amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="mobile-alt" size={24} color="#fff" />
          <TabText>Recarga de Celular</TabText>
        </TabItem>
        <TabItem>
          <Icon name="hand-holding-usd" size={24} color="#fff" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="money-bill-wave" size={24} color="#fff" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="comments-dollar" size={24} color="#fff" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="comments-dollar" size={24} color="#fff" />
          <TabText>Me Ajuda</TabText>
        </TabItem>
        <TabItem>
          <Icon name="barcode" size={24} color="#fff" />
          <TabText>Pagar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#fff" />
          <TabText>Bloquear Cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
