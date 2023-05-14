import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Line = () => {
  return (
    <View style={styles.lineStyle} />
  )
}

export default Line

const styles = StyleSheet.create({
    lineStyle : {
        borderWidth: 1,
        borderColor:'black',
        margin:10,
    }
})