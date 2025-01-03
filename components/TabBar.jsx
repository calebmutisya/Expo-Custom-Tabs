import { StyleSheet,View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, Feather } from '@expo/vector-icons';

const TabBar = ({ state, descriptors, navigation }) => {

    const icons = {
      index: (props)=> <AntDesign name="home" size={22} color={greyColor} {...props} />,
      create: (props)=> <AntDesign name="plus" size={22} color={greyColor} {...props} />,
      profile: (props)=> <AntDesign name="user" size={22} color={greyColor} {...props} />,
      explore: (props)=> <Feather name="compass" size={22} color={greyColor} {...props} />,
    };

    const primaryColor = '#0891b2';
    const greyColor = '#737373';
    

  return (
    <View style={styles.tabBar  }>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if(['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={ styles.tabbarItem }    
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {
                icons[route.name]({
                color: isFocused ? primaryColor : greyColor,
                style: { marginBottom: 5 },
            })}
            <Text style={{ color: isFocused ? primaryColor : greyColor, fontSize: 12 }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
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

export default TabBar