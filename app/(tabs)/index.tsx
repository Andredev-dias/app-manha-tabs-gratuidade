import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
     <View>
        <Text style={styles.title}>index page</Text>
     </View>
  );
}

const styles = StyleSheet.create({
  title: {
   fontSize: 30
  },
});
