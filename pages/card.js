import React from 'react'
import { View, StyleSheet } from 'react-native'
import FlipCard from 'react-native-flip-card'
import ReactCardFlip from 'react-card-flip'
import { Text, ImageBackground } from 'react-native'



export default function Card({data}) {
    const image = require('../image/happy.jpg')
    const imageNew = require('../image/hurray.jpg')
    return (

        <FlipCard
            friction={6}
            perspective={1000}
            flipHorizontal={true}
            flipVertical={false}
            flip={false}
            clickable={true}
            onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}>

            <ImageBackground source={image} resizeMode="cover" style={styles.front }>
                {/* <Text>The Face </Text> */}
            </ImageBackground>

            <ImageBackground source={imageNew} resizeMode="cover" style={styles.back}>
                <Text  style={{textAlign: 'center', color:'white'}} >To : {data.reciever} </Text>
                <br/>
                <Text style={{textAlign: 'center', color:'white'}}> Cheers to you for another trip around the sun. Happy birthday!</Text>
                <br/>
                <Text  style={{textAlign: 'center', color:'white'}}>From : {data.name} </Text>
            </ImageBackground >
        </FlipCard>

        


    )
}




const styles = StyleSheet.create({
 
    front: {
        height: 400,
        width: 300,
        backgroundColor: "#D8D9CF",
        borderRadius: 16,
        position: "",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    back: {
        height: 400,
        width: 300,
        backgroundColor: "#fff",
        borderRadius: 16,
        backfaceVisibility: "hidden",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },

})
