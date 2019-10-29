import MainScreen from './pages/main';
import ProfileScreen from './pages/profile';
import {StyleSheet} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';


// Criar a navegação
const MainNavigator = createBottomTabNavigator({
    MainScreen:{
        screen: MainScreen,
    },
    ProfileScreen: {
        screen: ProfileScreen,
    },

},
{
    tabBarOptions:{
        activeColor: "black",
        labelStyle:{

            textAlign: "center",
        },
    style:{
        backgroundColor: "#ffcc99",
        color: "black"
    },
    }
}
);

// Container


// style


export default createAppContainer(MainNavigator)