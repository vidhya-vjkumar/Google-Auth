import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { signIn } from "./SignIn";


GoogleSignin.configure({
  webClientId: '939007946672-pll5tmk3pun9qcogcm2lk0j8ci7fnarf.apps.googleusercontent.com',
  scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
  offlineAccess: true,
  forceCodeForRefreshToken: true,
  
});


const LoginWithGoogle = () => {

    return (
        <View style={styles.container}>
          
          <GoogleSigninButton
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
          />
          <StatusBar style="auto" />
        </View>
    )

}

export default LoginWithGoogle

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",

    },
    
})

