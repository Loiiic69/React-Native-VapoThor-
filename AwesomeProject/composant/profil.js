import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, setEmail, setPassword } from 'react-native'
import React, { useState } from "react";
import { Linking } from 'react-native';



export default function Profil({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
            <View style={styles.body}>
                <Text style={{ fontWeight: '200', fontSize: '25', marginBottom: 5, marginTop: 30, left: 110 }}>
                    Utilisateur User
                </Text>
                <Text style={{ fontWeight: '200', fontSize: '15', marginBottom: -20, marginTop: 30, left: 20 }}>
                    Changer votre mot de passe :
                </Text>
                <View style={styles.bodyContent}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Ancien mot de passe"
                            placeholderTextColor="#003f5c"
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Nouveau mot de passe"
                            placeholderTextColor="#003f5c"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                </View>
                <Text style={{ fontWeight: '200', fontSize: '15', marginBottom: -20, marginTop: 90, left: 20 }}>
                    Changer d'email :
                </Text>
                <View style={styles.bodyContent}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Ancien email"
                            placeholderTextColor="#003f5c"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Nouveau email"
                            placeholderTextColor="#003f5c"
                            secureTextEntry={true}
                            onChangeText={(email) => setEmail(email)}
                        />
                        <View style={styles.confirmBtn}>
                            <Button
                                title="Dit à tes potes que tu fumes plus !"
                                onPress={() => {
                                    const email = '';
                                    const subject = 'J\'arrete de fumer les freres force a vous';
                                    const body = 'J\'arrete de fumer les freres force a vous, j\'suis pas un putain de drogué';

                                    Linking.openURL(`mailto:${email}?subject=${subject}&body=${body}`);
                                }}
                            />
                        </View>
                    </View>
                </View>

            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#2EFEF7',
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: 'white',
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130,
    },
    name: {
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: '#696969',
        fontWeight: '600',
    },
    info: {
        fontSize: 16,
        color: '#00BFFF',
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        color: '#696969',
        marginTop: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: '#00BFFF',
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,

    },
    inputView: {
        backgroundColor: "#D8D8D8",
        borderRadius: 30,
        width: 350,
        height: 45,
        marginBottom: 5,
        alignItems: "left",
        borderWidth: 2,
        borderColor: "#58FAF4"
    },
    confirmBtn: {
        width: 300,
        borderRadius: 50,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#0404B4",
        color: "#FFFFFF",
        marginLeft: 20,
    },

})