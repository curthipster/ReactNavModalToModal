/* eslint-disable react-native/no-inline-styles */
import {Pressable, Text, View} from 'react-native';
import {
  NavigationContainer,
  NavigatorScreenParams,
  useNavigation,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

type TabNavigatorParamList = {
  Home: undefined;
  AnotherTab: undefined;
};

type RootStackParamList = {
  TabNavigator: NavigatorScreenParams<TabNavigatorParamList>;
  ModalOne: undefined;
  ModalTwo: undefined;
};

const Tab = createBottomTabNavigator();
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

function AnotherTabScreen() {
  return <View />;
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AnotherTab" component={AnotherTabScreen} />
    </Tab.Navigator>
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
        <RootStack.Screen name="TabNavigator" component={TabNavigator} />
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
