import { StyleSheet,View, Text, Pressable } from 'react-native'
import React, { useEffect} from 'react'
import { icons } from '../assets/icons'
import Animated,{ interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const TabBarButton = (props) => {

    const { isFocused, label, routeName, color } = props;

    const scale = useSharedValue(0);

    useEffect(() => {
        scale.value = withSpring(
            typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused, {duration: 350}
        );
    }, [scale, isFocused]);

    const animatedIconStyle = useAnimatedStyle(() => {

        const scaleValue = interpolate(
            scale.value,
            [0, 1],
            [0.8, 1.2]
        );

        return {
            transform : [{scale : scaleValue}]
        }
    })

    const animatedTextStyle = useAnimatedStyle(() => {

        const opacity = interpolate(
            scale.value,
            [0, 1],
            [1, 0]
        );

        return {
            opacity
        }
    })

  return (
    <Pressable {...props} style={styles.container} >
        <Animated.View style ={[animatedIconStyle]}>
            { 
                icons[routeName]({
                    color
                }) 
            }
        </Animated.View>
        <Animated.Text style = {[{color, fontSize: 11},animatedTextStyle]} >
            {label}
        </Animated.Text>
        {/* <Text style = {{color, fontSize: 11}}>
            {label}
        </Text> */}
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        gap : 4
    },
    tabBar: {
    positionn : 'absolute', 
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#d5e4f5',
    marginHorizontal: 10,    
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    },
    tabbarItem: {
    flexDirection: 'column', // Stack icon and text vertically
    alignItems: 'center',    // Center items horizontally
    justifyContent: 'center', // Center items vertically (optional)
    padding: 8,       
    },
})

export default TabBarButton