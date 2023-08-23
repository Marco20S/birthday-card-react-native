import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './pages/card';
import Main from './pages/main';

export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
     
      
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2ebf0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
