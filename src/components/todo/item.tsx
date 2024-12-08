import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { scaleHeight, scaleWidth } from '../../styles/scalling'

const Item = () => {
    return (
        <View style={styles.container}>
            <Text>Item</Text>
        </View>
    )
}

export default memo(Item)

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: scaleWidth(24),
        paddingVertical: scaleHeight(32),
        backgroundColor: '#FFFFFF',
        borderRadius: scaleWidth(15)
    }
})