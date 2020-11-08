import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList169482Navigator from '../features/NotificationList169482/navigator';
import Settings169481Navigator from '../features/Settings169481/navigator';
import Settings169473Navigator from '../features/Settings169473/navigator';
import UserProfile169471Navigator from '../features/UserProfile169471/navigator';
import BlankScreen1169449Navigator from '../features/BlankScreen1169449/navigator';
import BlankScreen0169448Navigator from '../features/BlankScreen0169448/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList169482: { screen: NotificationList169482Navigator },
Settings169481: { screen: Settings169481Navigator },
Settings169473: { screen: Settings169473Navigator },
UserProfile169471: { screen: UserProfile169471Navigator },
BlankScreen1169449: { screen: BlankScreen1169449Navigator },
BlankScreen0169448: { screen: BlankScreen0169448Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
