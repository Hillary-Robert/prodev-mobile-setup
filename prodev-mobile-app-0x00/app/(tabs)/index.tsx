import { Text, View, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First App Created</Text>

      <Text>My name is Hillary</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background, 
  },
  text: {
    fontSize: 24,
    color: Colors.light.primary, 
  },
});
