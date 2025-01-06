import { AntDesign, Feather } from '@expo/vector-icons';

export const icons = {
    index: (props)=> <AntDesign name="home" size={22}  {...props} />,
    create: (props)=> <AntDesign name="plus" size={22}  {...props} />,
    profile: (props)=> <AntDesign name="user" size={22}  {...props} />,
    explore: (props)=> <Feather name="compass" size={22}  {...props} />,
};