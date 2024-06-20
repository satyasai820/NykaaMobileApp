import { StatusBar } from 'expo-status-bar';
import BottomNavigationTabs from './Navigation/BottomNavigationTabs';
import "expo-dev-client";
import StackNavigation from './Navigation/StackNavigation';
import { Provider } from 'react-redux';
import store from './redux/Store';
import { Platform } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar backgroundColor='white' style={Platform.OS === "ios" ? "light" : "dark"} />
    <Provider store={store}>
    <StackNavigation />
    {/* <BottomNavigationTabs/> */}
    </Provider>
    
    </>

  );
}

