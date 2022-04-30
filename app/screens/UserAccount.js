import React from "react";
import { ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Header from "../components/Header";

export default function UserAccount({ navigation }) {
    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <Header navigation={navigation} />
            <Card style={{ backgroundColor: '#eee' }}>
                <Card.Title
                    title="Crie sua conta de Cliente"
                    titleStyle={{
                        fontSize: 14
                    }}
                />
            </Card>
        </ScrollView>
    )
}