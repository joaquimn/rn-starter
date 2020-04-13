//React components
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

//exercises 
import ExerciseOneScreen from './src/screens/Exercises/ExerciseOneScreen';
import ExerciseTwo from './src/screens/Exercises/ExerciseTwo';
import ExerciseThree from './src/screens/Exercises/ExerciseThree';
import ExerciseFour from './src/screens/Exercises/ExerciseFour';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    ImageScreen: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    TextScreen: TextScreen,
    BoxScreen: BoxScreen,
    ExerciseOne: ExerciseOneScreen,
    ExerciseTwo: ExerciseTwo,
    ExerciseThree: ExerciseThree,
    ExerciseFour: ExerciseFour
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
    title: "App"
    }
  }
);

export default createAppContainer(navigator);
