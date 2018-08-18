
import { TOGGLE_VISIBILITY, UPDATE_GRID_DATA } from '../../constants';

// Default State for reducer

const defaultState = {
    AppVisibility: true,
    GridData: []
};


//Login reducer
const AppReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_VISIBILITY:
            return Object.assign({}, state, {
                AppVisibility: !state.AppVisibility
            });
        case UPDATE_GRID_DATA:
            return Object.assign({}, state, {
                GridData: action.payload
            });
        default:
            return state;
    }
};

export default AppReducer
