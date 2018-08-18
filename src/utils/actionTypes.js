import {TOGGLE_VISIBILITY,UPDATE_GRID_DATA} from '../constants';


export function toggleVisibility() {
    return {type: TOGGLE_VISIBILITY}
}

export function updateGridata(data) {
    return {type: UPDATE_GRID_DATA, payload: data}
}
