import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
    const [ forecastInfo, setForecastInfo ] = useState({
        name: 'name',
        main: 'main',
        description: 'description',
        humidity: 0,
        temp: 0
    })

    useEffect(() => {         
        console.log(`fetching data with zipCode = ${props.zipCode}`)         
        if (props.zipCode) {             
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=f8a1a1cea99f01b19b0ceea91204f5ce`)                 
                .then((response) => response.json())                 
                .then((json) => {                     
                    setForecastInfo({       
                        name: json.name,                   
                        main: json.weather[0].main,                         
                        description: json.weather[0].description,                         
                        temp: json.main.temp,  
                        humidity: json.main.humidity
                    });                 
                })                 
                .catch((error) => {                     
                    console.warn(error);                 
                });         
        }     
    }, [props.zipCode])

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.background}>
                <Forecast {...forecastInfo} />
                <Text style={styles.zipCodeText}>Zip Code is {props.zipCode}</Text>
            </View>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    zipCodeText:{
        paddingTop: 15,
        color:'white',
        fontSize: 15,
        textAlign: 'center'
    },
    background:{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
})