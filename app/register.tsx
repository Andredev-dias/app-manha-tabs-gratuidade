import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function Register(){
    return(
        <SafeAreaView>
            <Text style={styles.title}>REGISTRO DE USUARIO</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
     fontSize: 30
    },
  });