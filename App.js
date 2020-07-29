// Desabilitar TODOS os warnings
// console.disableYellowBox = true;

import { YellowBox } from 'react-native';
import SeriesApp from './src/SeriesApp';

YellowBox.ignoreWarnings(['Setting a timer for a long period of time']);

export default SeriesApp;