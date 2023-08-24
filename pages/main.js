import React, { useEffect, useState } from 'react'
import { Text } from 'react-native';
import { View, TextInput, Button, TouchableOpacity } from 'react-native'

import Card from './card';


export default function Main() {

    const [name, setName] = useState();
    const [reciever, setReciever] = useState();
    const [message, setMassage] = useState([
        'Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday!',
        'May the joy that you have spread in the past come back to you on this day. Wishing you a very happy birthday!',
        'You’re older today than yesterday but younger than tomorrow, happy birthday!',
        'Sending you smiles for every moment of your special day…Have a wonderful time and a very happy birthday!',
        'It’s a smile from me… To wish you a day that brings the same kind of happiness and joy that you bring to me. Happy birthday!',
        'Hope your birthday is just like you…totally freaking awesome.',
        'It’s your special day — get out there and celebrate!',
        'Have the best birthday ever!',
        'Best wishes on your birthday – may you have many, many more.',
        'Cheers to you for another trip around the sun']);
    const [data, setData] = useState()

    //function for message

    const addMessage = (title) => {
        setMassage((birthdayMessage) => {
            return [...message, title.trim()]
        })

    }

    const addState = () => {
        setData({ name, reciever, message })
        console.log('testiiiiiiing');
    }

    useEffect(() => {
        console.log(name);

    }, [name])

    useEffect(() => {
        console.log(reciever);

    }, [reciever])

    useEffect(() => {

        console.log(message);

    }, [message])


    return (
        <View>
            <Text style={{ color: 'gray', fontSize: 30, fontFamily: '' }} > Birthday Card Generator {"\n"}</Text>
          

            <TextInput
                style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 5, width: 340, height: 40 }}
                onChangeText={(value) => setName(value)}
                placeholder=' From: '  /><Text>{"\n"}</Text>
                
            

            <TextInput
                style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 5, width: 340, height: 40 }}
                placeholder=' To: '
                onChangeText={(value) => setReciever(value)} /> 
            


            {/* <TextInput
                style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 5 , width:300, height:40 }}
                onBlur={(e) => addMessage(e.target.value)} />
                <br></br> */}



            {/* <Button
                    style={{ color: 'gray', backgroundColor: 'gray', borderRadius: 5, width: 300, height: 40 }}
                    title='Generate Card' /> */}

            <TouchableOpacity onPress={addState}>
            <Text>{"\n"}</Text>
                <Text style={{ color: 'white', backgroundColor: 'gray', borderRadius: 5, width: 340, height: 50, 
                textAlign: 'center', fontSize:20, justifyContent:'center', alignItems: 'center', marginTop:5}}> 
                Generate Card
                </Text>
            </TouchableOpacity>

            <Text>{"\n"}</Text>
               

            
            {data && <Card data={data} />}


        </View>

    )
}
