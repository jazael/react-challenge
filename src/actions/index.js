
import axios from 'axios';
import { FETCH_SURVEYS } from './types';

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean');
    dispatch({ type: FETCH_SURVEYS, payload: res.data.results });
}; 