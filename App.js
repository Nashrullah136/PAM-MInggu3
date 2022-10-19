import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { ScheduleScreen } from './screen/ScheduleScreen';
import { NativeBaseProvider, Center } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screen/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  var data = [{
    bandara_keberangkatan: "CGK",
    bandara_tujuan: "PLM",
    maskapai: "Tiger Water",
    tanggal: "2023-12-10 12:30 WIB",
  },
  {
    bandara_keberangkatan: "CGK",
    bandara_tujuan: "PLM",
    maskapai: "Tiger Water",
    tanggal: "2023-12-10 12:30 WIB",
  },
  {
    bandara_keberangkatan: "CGK",
    bandara_tujuan: "PLM",
    maskapai: "Tiger Water",
    tanggal: "2023-12-10 12:30 WIB",
  },
  {
    bandara_keberangkatan: "CGK",
    bandara_tujuan: "PLM",
    maskapai: "Tiger Water",
    tanggal: "2023-12-10 12:30 WIB",
  },
  {
    bandara_keberangkatan: "CGK",
    bandara_tujuan: "PLM",
    maskapai: "Tiger Water",
    tanggal: "2023-12-10 12:30 WIB",
  },
  {
    bandara_keberangkatan: "CGK",
    bandara_tujuan: "PLM",
    maskapai: "Tiger Water",
    tanggal: "2023-12-10 12:30 WIB",
  },
  {
    bandara_keberangkatan: "CGK",
    bandara_tujuan: "PLM",
    maskapai: "Tiger Water",
    tanggal: "2023-12-10 12:30 WIB",
  },
  {
    bandara_keberangkatan: "CGK",
    bandara_tujuan: "PLM",
    maskapai: "Tiger Water",
    tanggal: "2023-12-10 12:30 WIB",
  }, {
    bandara_keberangkatan: "CGK",
    bandara_tujuan: "PLM",
    maskapai: "Tiger Water",
    tanggal: "2023-12-10 12:30 WIB",
  },
  {
    bandara_keberangkatan: "CGK",
    bandara_tujuan: "PLM",
    maskapai: "Tiger Water",
    tanggal: "2023-12-10 12:30 WIB",
  },];

  return (
    <NativeBaseProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Schedule" component={ScheduleScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
