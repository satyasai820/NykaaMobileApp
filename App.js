import { StatusBar } from 'expo-status-bar';
import BottomNavigationTabs from './Navigation/BottomNavigationTabs';
import "expo-dev-client";
import StackNavigation from './Navigation/StackNavigation';
import { Provider } from 'react-redux';
import store from './redux/Store';

export default function App() {
  return (
    <>
    <Provider store={store}>
    <StackNavigation />
    {/* <BottomNavigationTabs/> */}
    </Provider>
    
    </>

  );
}

