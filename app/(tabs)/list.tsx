import { StyleSheet, Text, View } from 'react-native';

export default function List() {
  return (
     <View>
        <Text style={styles.title}>list page</Text>
     </View>
  );
}

const styles = StyleSheet.create({
  title: {
   fontSize: 30
  },
});