import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ExerciseOneScreen from './src/screens/Exercises/ExerciseOneScreen';
import ExerciseTwo from './src/screens/Exercises/ExerciseTwo';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
 
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    ExerciseOne: ExerciseOneScreen,
    List: ListScreen,
    ExerciseTwo: ExerciseTwo,
    ImageScreen: ImageScreen
  },
  {
      initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
