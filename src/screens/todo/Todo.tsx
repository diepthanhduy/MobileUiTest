import { FlatList, Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import Item from '../../components/todo/item'
import { scaleHeight, scaleWidth } from '../../styles/scalling'

const Todo = () => {

    const renderItem = useCallback(({ item, index }: { item: any, index: number }) => {
        return (
            <Item />
        )
    }, [])

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>To-do list</Text>
            </View>

            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainerStyle}
            />

            <View style={styles.viewButton}>
                <Pressable style={styles.button}>
                    <Text style={styles.textButton}>Tạo task mới</Text>
                    <Image resizeMode='contain' source={require('../../assets/add-outline.png')} style={styles.addIcon} />
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Todo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7CC15',
        paddingHorizontal: scaleWidth(24)
    },
    viewHeader: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: scaleHeight(12),
    },
    textHeader: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'semibold'
    },
    contentContainerStyle: {
        gap: scaleWidth(24)
    },
    viewButton: {
        width: '100%',
        marginBottom: scaleHeight(12)
    },
    button: {
        backgroundColor: '#F65D79',
        width: '100%',
        paddingVertical: scaleHeight(14),
        borderRadius: scaleHeight(22),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'

    },
    addIcon: {
        width: scaleWidth(12),
        height: scaleWidth(12),
        marginLeft: scaleWidth(10)
    },
    textButton: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'medium'
    }
})