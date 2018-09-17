import { LOAD_DATA, LOAD_MORE_DATA } from '../constants';

let initialState = {
    data: [],
    splicedDataArray: null
}

export default (state = initialState, action) => {

    let updated = Object.assign({}, state);

    switch(action.type) {

        case LOAD_DATA:
            
            let copyData = Object.assign({}, action.data);

            let copyArray = copyData.data;

            console.log(copyArray)

            return updated; 

        default: 
            return updated;
    }

}