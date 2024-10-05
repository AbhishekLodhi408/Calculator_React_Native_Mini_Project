import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalcButtonIcons from './components/CalcButtonIcons';
import CalcButton from './components/CalcButton';


export default function App() {
  return (
    <View style={styles.rootContainer}>
      <View></View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
