import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import messaging from '@react-native-firebase/messaging'
import React, { useEffect } from "react";


export function Notification() {
    const requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission()
        const enabled = 
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL

        if(enabled){
            console.log("Authorization status: ", authStatus)
        }
    }

    useEffect(() => {
        if(requestUserPermission()) {
            messaging()
                .getToken()
                .then((token) => {
                    console.log(token)
                })
        } else {
            console.log("Permission not granted", authStatus)
        }

        messaging()
            .getInitialNotification()
            .then(async (remoteMessage) => {
                if (remoteMessage) {
                    console.log(
                        "Notification caused app to open from quit state:",
                        remoteMessage.notification
                    )
                }
            })

            messaging().onNotificationOpenedApp((remoteMessage) => {
                console.log(
                    "Notification caused app to open from background state:",
                    remoteMessage.notification
                )
            })

            messaging().setBackgroundMessageHandler(async (remoteMessage) => {
                console.log("Message handled in the background!", remoteMessage)
            })

            const unsubscribe = messaging().onMessage(async (remoteMessage) => {
                Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage.notification.body))
            })

            return unsubscribe
    }, [])

    return 
}

