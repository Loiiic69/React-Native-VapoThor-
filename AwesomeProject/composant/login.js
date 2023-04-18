import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity,Dimensions, TouchableHighlight,  } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import RememberMeCheckbox from "./checkbox";



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <TouchableHighlight style={{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: Dimensions.get('window').width * 1.5,
                height: Dimensions.get('window').width * 1.5,
                backgroundColor: '#2EFEF7',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: -450


            }}
                underlayColor='#ccc'
            >
                <Text

                ></Text>
            </TouchableHighlight>
            <StatusBar style="auto" />
            <View>
                <Text style={{ fontWeight: '200', fontSize: '50', marginBottom: '25%' }}>
                    Connexion
                </Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Mot de passe"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />

            </View>
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Mot de passe oublié ?</Text>
            </TouchableOpacity>
            <RememberMeCheckbox /> 
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>CONNEXION</Text>
            </TouchableOpacity>
            <View>
            <Text style={styles.inscription}>Tu n'as pas encore de compte ?<TouchableOpacity><Text style={styles.question}> Clique ici</Text></TouchableOpacity></Text>
            </View>
        </View>
        
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 40,
    },
    inputView: {
        backgroundColor: "#D8D8D8",
        borderRadius: 30,
        width: 350,
        height: 45,
        marginBottom: 20,
        alignItems: "left",
        borderWidth: 2,
        borderColor: "#58FAF4"
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,

    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
        position: 'absolute',
        left: 40,
    },
    color: "#BDBDBD",
    loginBtn: {
        width: 300,
        borderRadius: 50,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#0404B4",
    },
    loginText: {
        color: "#FFFFFF",
        fontSize: "25px"
    },
    checkBox: {
        height: 15,
        marginBottom: 0,
        position: 'absolute',
        left: -200,
        color: "#BDBDBD",
        marginLeft: 20,
    },
    inscription: {
        height: 15,
        position: 'absolute',
        top: 10,
        color: "#BDBDBD",
        marginLeft: -130,
    },
    question: {
        height: 15,
        color: 'red',
        top: 5,
        position: 'absolute',


      },
}
);