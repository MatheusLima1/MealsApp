import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

function Subtitle({subtitle}){
  return (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
  )
}

export default Subtitle


const styles = StyleSheet.create({
    subtitle: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        margin: 4,
        textAlign: "center",
      },
      subtitleContainer: {
        padding: 6,
        borderBottomColor: "white",
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical: 4
      },
})