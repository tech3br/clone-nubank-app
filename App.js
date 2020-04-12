import React from 'react';
import {StatusBar} from 'react-native';
import Header from './src/components/Header';
import Tabs from './src/components/Tabs';
import Menu from './src/components/Menu';

import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Title,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Description,
  Annotation,
} from './styles';

const date = Date();

const App = () => {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = new Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );
  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
      <Container>
        <Header />

        <Content>
          <Menu translateY={translateY} />

          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChanged}>
            <Card
              style={{
                transform: [
                  {
                    translateY: translateY.interpolate({
                      inputRange: [-350, 0, 380],
                      outputRange: [-50, 0, 380],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              }}>
              <CardHeader>
                <Icon name="attach-money" size={20} color="#333" />
                <Icon name="visibility" size={20} color="#333" />
              </CardHeader>

              <CardContent>
                <Title>Saldo Disponível</Title>
                <Description>R$ 200.000,00</Description>
              </CardContent>
              <CardFooter>
                <Annotation>
                  Transferência recebida {date} de João Guilherme no valor de R$
                  20,00 às 15:00hs
                </Annotation>
              </CardFooter>
            </Card>
          </PanGestureHandler>
        </Content>

        <Tabs translateY={translateY} />
      </Container>
    </>
  );
};

export default App;
