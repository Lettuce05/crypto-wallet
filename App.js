import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: colors.dark.primary.main_white}}>I finally got this to work!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.primary.dark_bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
