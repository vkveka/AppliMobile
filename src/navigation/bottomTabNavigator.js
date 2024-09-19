import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Text } from 'react-native';
import { faHome, faStar } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Home from '../../App';

const element = <FontAwesomeIcon icon={faCoffee} />

const Tab = createBottomTabNavigator();

const LoggedUserTabs = ({ route }) => {
    return (
        <Tab.Navigator
            screenOptions={() => ({
                tabBarStyle: {
                    paddingVertical: 5,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    backgroundColor: '#1C6E8C',
                    position: 'absolute',
                    height: 100
                }
            })}
        >
            <Tab.Screen
                name="Accueil"
                component={Home}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? '#94D1BE' : 'white', fontSize: 18, marginBottom: 10, fontFamily: 'Cooper' }}>Accueil</Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <FontAwesomeIcon icon={faCoffee} size={40} style={{ color: focused ? '#94D1BE' : 'white' }} />
                    ),
                }}
            />

            {/* <Tab.Screen
                name="Favoris"
                component={Home}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? '#94D1BE' : 'white', fontSize: 18, marginBottom: 10, fontFamily: 'Cooper' }}>Favoris</Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <FontAwesomeIcon icon={faStar} size={40} style={{ color: focused ? '#94D1BE' : 'white' }} />
                    ),
                }}
            /> */}
        </Tab.Navigator>
    );
};

export { LoggedUserTabs };