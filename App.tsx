/* eslint-disable react-native/no-inline-styles */
import {Pressable, Text, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  ModalOne: undefined;
  ModalTwo: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable onPress={() => navigation.push('ModalOne')}>
        <Text style={{color: 'purple'}}>Open first modal</Text>
      </Pressable>
    </View>
  );
}

function ModalOne() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable onPress={() => navigation.replace('ModalTwo')}>
        <Text style={{color: 'purple'}}>Goto second modal</Text>
      </Pressable>
    </View>
  );
}

function ModalTwo() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  console.info('Rendering ModalTwo');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable onPress={() => navigation.pop()}>
        <Text style={{color: 'purple'}}>Close</Text>
      </Pressable>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen
          options={{presentation: 'modal'}}
          name="ModalOne"
          component={ModalOne}
        />
        <RootStack.Screen
          options={{presentation: 'modal'}}
          name="ModalTwo"
          component={ModalTwo}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
