import { FunctionComponent, useState } from "react";
import { FlatList, Pressable, StyleSheet, TouchableHighlight, View } from "react-native";
import ListItem from "../components/List/ListItem";
import ListItemDeleteAction from "../components/List/ListItemdeleteAction";
import colors from "../config/colors";

interface Message {
    id: number;
    title: string;
    description: string;
    image: any;
}

const initialMessages: Array<Message> = [
    {
        id: 1,
        title: 'T1whjfebcjhwabcjahs cfjkharwnfljrhwnfrkejqwnfkrejwnckajwnckjwancekjnckejrnckerjcnrkwjnckrjwcnrkjwcnekrjnc'
            + 'wlejfncdekjwnfdjkwanfkjwqenfjekwnfjenfeqwnfleqwkfmnewlkfmdlwkfmlwekmwlekmdlkmfwelkmfwqlkfmlwmfwlmf' +
            'ekfmrlejsngjrtngtjrngrjgntrlgmtlkmgletmgelmgltgmtlgmlmlengrngtljrmglkemeltkgmetlkmgtlkegmtelkmglktemg',
        description: 'T1whjfebcjhwabcjahscfjk harwnflj r hwr nfrk ejqwnfkrejwnckajwnck jwancekjnckejrnckerjcnrkwjnckrjwcnrkjwcnekrjnc'
            + 'wlejfncdekjwnfdjkwanfkjwqenfjekwnfjenfeqwnfleqwkfmnewlkfmdlwkfmlwekmwlekmdlkmfwelkmfwqlkfmlwmfwlmf' +
            'ekfmrlejsngjrtngtjrngrjgntrlgmtlkmgletmgelmgltgmtlgmlmlengrngtljrmglkemeltkgmetlkmgtlkegmtelkmglktemg',
        image: require('../assets/RM_logo.png')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/RMHomeSC.jpg')
    },
]

const MessagesScreen = () => {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)
    const handleDelete = (message: Message): void => { setMessages(messages.filter(m => m.id !== message.id)) }


    return (
        <FlatList
            style={styles.list}
            data={messages}
            keyExtractor={m => m.id.toString()}
            renderItem={({ item }) =>
                <ListItem
                    onPress={() => { console.log(item.id) }}
                    style={styles.item}
                    title={item.title}
                    info={item.description}
                    image={item.image}
                    renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                />}
            refreshing={refreshing}
            onRefresh={
                () => {
                    // setRefreshing(true)
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/RM_logo.png')
                        },
                    ])
                }
            }
        />
    );
}

const styles = StyleSheet.create({
    list: {
        paddingTop: 10, backgroundColor: colors.lightGrey,
    }, item: {
        padding: 5
    }
});

export default MessagesScreen;