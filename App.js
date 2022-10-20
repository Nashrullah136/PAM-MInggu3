import { ScheduleScreen } from './screen/ScheduleScreen';
import { NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screen/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: '', headerStyle: { backgroundColor: '#84cc16' }, headerShadowVisible: false }} />
            <Stack.Screen name="Schedule" component={ScheduleScreen} options={
              { title: 'Hiling.id', 
              headerStyle: { backgroundColor: '#84cc16' }, 
              headerShadowVisible: false,
              headerTitleStyle: {
                color: 'white',
                fontWeight: 'bold',
                fontSize: 30,
              },
              headerTitleAlign: 'center' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </NativeBaseProvider>
  );
}
