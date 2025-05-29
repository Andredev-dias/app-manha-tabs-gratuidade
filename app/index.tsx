import { Link, router } from "expo-router";
import { useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [key, setKey] = useState(false)
    const [error, setError] = useState(false)


    const login = () => {
        if(!email || !password){
            setError(true)
        }else{
            router.push('/(tabs)')
        }
    }

    return (
        <SafeAreaView style={styles.wrapLogin}>
             <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
            <Image style={styles.logo} source={require('@/assets/images/logoLogin.png')} />
            <Text style={styles.title}>LOGIN</Text>

            <View style={styles.wrapInput}>
                   <View style={{ flexDirection: 'row' }}>
                                        <Image style={styles.icon} source={require('@/assets/images/email.png')} />
                <Text style={styles.label}>E-mail</Text>
                                        </View>
                <TextInput style={error ? styles.inputError : styles.input} onChangeText={setEmail} value={email} placeholder="Digite seu e-mail" keyboardType="email-address" />
            </View>

            <View style={styles.wrapInput}>
            <View style={{ flexDirection: 'row' }}>
            <Image style={styles.icon} source={require('@/assets/images/key2.png')} />
                <Text style={styles.label}>Senha</Text>
                </View>
                <View style={styles.wrapEye}>
                    <TextInput style={error ? styles.inputError : styles.input} onChangeText={setPassword} value={password} placeholder="Digite sua senha" keyboardType="default" secureTextEntry={key ? true : false} />
                    {key && <TouchableOpacity style={styles.eye} onPress={() => setKey(false)}><Image style={styles.iconEye} source={require('@/assets/images/eyeRisk.png')} /></TouchableOpacity>}
                    {!key && <TouchableOpacity style={styles.eye} onPress={() => setKey(true)}><Image style={styles.iconEye} source={require('@/assets/images/eyeOOO.png')} /></TouchableOpacity>}
                </View>
            </View>

            <View style={styles.wrapBottom}>
                <TouchableOpacity style={styles.btn} onPress={login}>
                    <Text style={styles.btnText}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.wrapBottom}>
                <Link style={styles.btnUserNew} href={"/register"}>
                    Cadastrar novo usuário
                </Link>
            </View>
            {error && <Text style={styles.errorText}>Preencha todos os campos (Email e Senha)</Text>}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapLogin: {
        backgroundColor: '#c37704',
        flex: 1
    },
    scrollContainer:{
        paddingBottom: 50
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 999,
        alignSelf: 'center',
        marginTop: 50,
    },
    title: {
        fontSize: 50,
        textAlign: 'center',
        marginTop: 50,
        color: '#ffffff',
        fontWeight: 900,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    iconEye: {
        width: 15,
        height: 15
    },
    wrapInput: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 10,
        display: 'flex',
        gap: 5
    },
    label: {
        color: '#ffffff',
        fontSize: 20,
        paddingLeft: 5,
        fontWeight: 700,
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        fontSize: 18,
        fontWeight: 500,
        borderWidth: 2,
        borderColor: "#ffffff",
        borderRadius: 999,
        position: 'relative',
        width: '100%'
    },
    inputError:{
        paddingVertical: 15,
        paddingHorizontal: 25,
        fontSize: 18,
        fontWeight: 500,
        borderWidth: 2,
        borderColor: "#b70909",
        borderRadius: 999,
        position: 'relative',
        width: '100%'
    },
    errorText:{
        alignSelf: 'center',
        color: "#6a0f0f",
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: "#b70909",
        marginTop: 30,
        width: '90%',
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        textAlign: 'center'
    },
    wrapEye: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    eye: {
        position: 'absolute',
        right: 20,
    },
    wrapBottom: {
        width: '100%',
        marginTop: 30,
    },
    btn: {
        backgroundColor: '#090909',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 999,
        width: '80%',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    btnText: {
        color: '#ffffff',
        textAlign: 'center',
        textShadowColor: '#ffffff',
        textShadowOffset: { width: 2, height: 1 },
        textShadowRadius: 10,
        fontSize: 22
    },
    btnUserNew: {
        color: '#6b3602',
        fontSize: 18,
        fontWeight: 500,
        textAlign: 'center',
        marginTop: -5
    },
    icon: {
        width: 15,
        height: 15,
        marginLeft: 20,
        marginTop: 8
    }
});