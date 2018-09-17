import { LOAD_DATA, LOAD_MORE_DATA } from '../constants';

let initialState = {
    data: [],
    splicedDataArray: null
}

export default (state = initialState, action) => {

    let updated = Object.assign({}, state);
    let copyArray;
    let splicedArray;
    let copyData;
    switch(action.type) {

        case LOAD_DATA:
            //Make a copy of incoming data 
            copyData = Object.assign({}, action.data);
            // extract the array from CopyData ALL 500 comments 
            copyArray = copyData.data;
            //Take the first 15 comments
            splicedArray = copyArray.splice(0, 15);
            //push it in the empty array exist inside the state
            splicedArray.forEach( (item) => {
                updated.data.push(item);
            });
            //take rest of the spliced records and set to updated.splicedDataArray
            updated.splicedDataArray = copyData.data;
           
            return updated; 
        case LOAD_MORE_DATA:
            
            let newData = updated.splicedDataArray.splice(0, 15);

            updated.data = [...state.data, ...newData];

            return updated;
        default: 
            return updated;
    }

}