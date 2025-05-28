import { Link, router } from "expo-router";
import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [key, setKey] = useState(false)

    const login = () => {
        router.push('/(tabs)')
    }

    return (
        <SafeAreaView style={styles.wrapLogin}>
            <Image style={styles.logo} source={require('@/assets/images/logoLogin.png')} />
            <Text style={styles.title}>LOGIN</Text>

            <View>
                <Text>E-mail</Text>
                <TextInput onChangeText={setEmail} value={email} placeholder="Digite seu e-mail" keyboardType="email-address" />
            </View>

            <View>
                <Text>Senha</Text>
                <View>
                    <TextInput onChangeText={setPassword} value={password} placeholder="Digite sua senha" keyboardType="default" secureTextEntry={key ? true : false} />
                    {key && <TouchableOpacity onPress={() => setKey(false)}><Image style={styles.iconEye} source={require('@/assets/images/hide.png')} /></TouchableOpacity>}
                    {!key && <TouchableOpacity onPress={() => setKey(true)}><Image style={styles.iconEye} source={require('@/assets/images/show.png')} /></TouchableOpacity>}
                </View>
            </View>

            <View>
                <TouchableOpacity onPress={login}>
                    <Text>ENTRAR</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Link href={"/register"}>
                    Cadastrar novo usuário
                </Link>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30
    },
    iconEye: {
        width: 25,
        height: 25
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 999,
        alignSelf: 'center',
        marginTop: 50
    },
    wrapLogin: {
       backgroundColor: '#c37704',
       flex: 1
    }
});