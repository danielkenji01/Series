// import seriesMock from '../../series.json';
import { SET_SERIES } from '../actions';

//const INITIAL_STATE = seriesMock;

export default function(state = null, action) {
    switch (action.type) {
        case SET_SERIES:
            return action.series;
        default:
            return state;
    }
}