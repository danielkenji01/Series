import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginPage from './pages/LoginPage';
import SeriesPage from './pages/SeriesPage';
import SerieDetailPage from './pages/SerieDetailPage';
import SerieFormPage from './pages/SerieFormPage';

const AppNavigator = createStackNavigator({
  'Main': {
    screen: SeriesPage
  },
  'Login': {
    screen: LoginPage,
    navigationOptions: {
      title: 'Bem vindo!'
    }
  },
  'SerieDetail': {
    screen: SerieDetailPage,
    navigationOptions: ({ navigation }) => {
      const { serie } = navigation.state.params;

      return { 
        title: serie.title
      }
    }
  },
  'SerieForm': {
    screen: SerieFormPage,
    navigationOptions: {
      title: 'Nova série'
    }
  },
}, {
  defaultNavigationOptions: {
    title: 'Séries!',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5'
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;