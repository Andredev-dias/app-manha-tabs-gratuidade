import { router } from "expo-router";
import { useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [key, setKey] = useState(false)
    const [keyconfirm, setKeyconfirm] = useState(false)
    const [error, setError] = useState(false)


    const register = () => {
        if (!email || !password || !name || !confirmPassword) {
            setError(true)
        } else {
            router.push('/')
        }
    }

    return (
        <SafeAreaView style={styles.wrapLogin}>
            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                <Image style={styles.logo} source={require('@/assets/images/logoRegister.png')} />
                <Text style={styles.title}>RESGISTRAR NOVO USUÁRIO</Text>

                <View style={styles.wrapInput}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput style={error ? styles.inputError : styles.input} onChangeText={setName} value={name} placeholder="Digite seu nome" keyboardType="default" />
                </View>

                <View style={styles.wrapInput}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput style={error ? styles.inputError : styles.input} onChangeText={setEmail} value={email} placeholder="Digite seu e-mail" keyboardType="email-address" />
                </View>

                <View style={styles.wrapInput}>
                    <Text style={styles.label}>Senha</Text>
                    <View style={styles.wrapEye}>
                        <TextInput style={error ? styles.inputError : styles.input} onChangeText={setConfirmPassword} value={confirmPassword} placeholder="Confirme sua senha" keyboardType="default" secureTextEntry={key ? true : false} />
                        {key && <TouchableOpacity style={styles.eye} onPress={() => setKey(false)}><Image style={styles.iconEye} source={require('@/assets/images/hide.png')} /></TouchableOpacity>}
                        {!key && <TouchableOpacity style={styles.eye} onPress={() => setKey(true)}><Image style={styles.iconEye} source={require('@/assets/images/show.png')} /></TouchableOpacity>}
                    </View>
                </View>

                <View style={styles.wrapInput}>
                    <Text style={styles.label}>Senha</Text>
                    <View style={styles.wrapEye}>
                        <TextInput style={error ? styles.inputError : styles.input} onChangeText={setPassword} value={password} placeholder="Digite sua senha" keyboardType="default" secureTextEntry={keyconfirm ? true : false} />
                        {keyconfirm && <TouchableOpacity style={styles.eye} onPress={() => setKeyconfirm(false)}><Image style={styles.iconEye} source={require('@/assets/images/hide.png')} /></TouchableOpacity>}
                        {!keyconfirm && <TouchableOpacity style={styles.eye} onPress={() => setKeyconfirm(true)}><Image style={styles.iconEye} source={require('@/assets/images/show.png')} /></TouchableOpacity>}
                    </View>
                </View>

                <View style={styles.wrapBottom}>
                    <TouchableOpacity style={styles.btn} onPress={register}>
                        <Text style={styles.btnText}>CRIAR USUÁRIO</Text>
                    </TouchableOpacity>
                </View>
                {error && <Text style={styles.errorText}>Preencha todos os campos (Nome, Email, Senha e Confirmar senha)</Text>}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapLogin: {
        backgroundColor: '#090546',
        flex: 1
    },
    scrollContainer: {
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
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        marginTop: 50,
        color: '#ffffff',
        fontWeight: 900,
        textShadowColor: '#c37704',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    iconEye: {
        width: 25,
        height: 25
    },
    wrapInput: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 10,
        display: 'flex',
        gap: 5
    },
    label: {
        color: "#ffffff",
        fontSize: 20,
        paddingLeft: 25,
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
        width: '100%',
        color: '#e98d04',
    },
    inputError: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        fontSize: 18,
        fontWeight: 500,
        borderWidth: 2,
        borderColor: "#b70909",
        borderRadius: 999,
        position: 'relative',
        width: '100%',
        color: '#e98d04',
    },
    errorText: {
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
        backgroundColor: '#e98d04',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 999,
        width: '80%',
        alignSelf: 'center',
        shadowColor:  '#e98d04',
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
        textShadowColor:'#4b0606',
        textShadowOffset: { width: 2, height: 1 },
        textShadowRadius: 10,
        fontSize: 22
    },
    btnUserNew: {
        color: '#6b3602',
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'center',
        marginTop: -20
    }
});