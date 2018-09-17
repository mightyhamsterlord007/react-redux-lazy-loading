import axios from 'axios';

import { LOAD_DATA, LOAD_MORE_DATA } from '../constants';

export const getData = () => dispatch => {
    axios
        .get(`https://jsonplaceholder.typicode.com/comments`)
        .then( res => {
            dispatch({
                type: LOAD_DATA,
                data: res
            });
        })
        .catch(err => {
            console.log(err);
        });
}

export const loadMoreData = () => dispatch => {
    dispatch({
        type: LOAD_MORE_DATA
    });
}

