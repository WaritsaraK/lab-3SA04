import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from "react-native";

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const DateTime = ({current, lat, lon, timezone}) => {
        const [date, setDate] = useState('')
        const [time, setTime] = useState('')

        useEffect (() => {
            setInterval(() => {
                const time = new Date();
                const month = time.getMonth();
                const date = time.getDate();
                const day = time.getDay();
                const hour = time.getHours();
                const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
                const minutes = time.getMinutes();
                const ampm = hour >=12 ? 'pm' : 'am'
            
                setTime((hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes) +ampm) 
            
                setDate(days[day] + ', ' + date+ ' ' + months[month]) 
            
            }, 1000);
        }, [])

        return (
            <View style={styles.container}>
                <Text style={styles.heading}>{time}</Text>
                <Text style={styles.subheading}>{date}</Text>
            </View>
            
        )
    }
    const styles = StyleSheet.create({
        container: {
            flexDirection:"colmn",
            alignItems: 'flex-end',
            padding: 10,
        },
        heading: {
            fontSize: 25,
            color:'white',
            fontWeight: '100'
        },
        subheading: {
            fontSize: 15,
            color: '#eee',
            fontWeight: '300'
        }
    })
    export default DateTime