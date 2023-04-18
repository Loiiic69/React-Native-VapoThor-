import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity,Dimensions, TouchableHighlight,  } from "react-native";
import RememberMeCheckbox from "./checkbox";
import DatePicker from 'react-native-date-picker'




export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("")
    const [name, setName] = useState("")
    const [datenaissance, setDatenaissance] = useState("")


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
                <Text style={{ fontWeight: '200', fontSize: '50', marginBottom: '10%' }}>
                    Inscription
                </Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Nom"
                    placeholderTextColor="#003f5c"
                    onChangeText={(name) => setName(name)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Prénom"
                    placeholderTextColor="#003f5c"
                    onChangeText={(firstname) => setFirstname(firstname)}
                />
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
                    placeholder="Date de naissance"
                    placeholderTextColor="#003f5c"
                    onChangeText={(datennaissance) => setDatenaissance(datenaissance)}
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
            </TouchableOpacity>
            <RememberMeCheckbox /> 
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Inscription</Text>
            </TouchableOpacity>
            <View>
            <Text style={styles.inscription}>Tu nous a déjà rejoins ?<TouchableOpacity><Text style={styles.question}> Clique ici</Text></TouchableOpacity></Text>
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
        marginLeft: -100,
    },
    question: {
        height: 15,
        color: 'red',
        top:-14,
        position: 'absolute',


      },
}
);