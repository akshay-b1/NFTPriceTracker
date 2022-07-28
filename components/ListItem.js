import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


const ListItem = ({name, symbol, image, type}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemWrapper}>

       {/* LEFT SIDE */}
        <View style={styles.leftWrapper}>
            <Image source={{uri: image}} style={styles.image}/>
            <View style = {styles.titlesWrapper}>
                <Text style={styles.Title}> {name} </Text>
                <Text style={styles.symbol}>{symbol.toUpperCase()}</Text> 
            </View> 
        </View>

        {/* RIGHT SIDE */}
      <View style={styles.rightWrapper}></View>
            <Text style={styles.Title}>${type}</Text> 
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    leftWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        height: 48,
        width: 48,
    },
    titlesWrapper: {
        marginLeft: 8,
    },
    Title: {
        fontSize: 16.5,
    },
    rightWrapper: {
        alignItems: 'flex-end',
    },
    symbol: {
        marginTop: 4,
        fontSize: 14,
        color: "#A9ABB1"
    }
});

export default ListItem
