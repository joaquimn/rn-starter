import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';

//exercises 
import ExerciseOneScreen from './src/screens/Exercises/ExerciseOneScreen';
import ExerciseTwo from './src/screens/Exercises/ExerciseTwo';
import ExerciseThree from './src/screens/Exercises/ExerciseThree';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    ImageScreen: ImageScreen,
    ExerciseOne: ExerciseOneScreen,
    ExerciseTwo: ExerciseTwo,
    ExerciseThree: ExerciseThree
  },
  {
      initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
