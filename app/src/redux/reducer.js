import { UPDATE_COUNT, UPDATE_DATA, LOADING } from './actions';

export default (state = {}, action) => {
    switch (action.type) {
        case UPDATE_COUNT:
            return {
                ...state,
                count: action.count,
            };
        case UPDATE_DATA:
            return {
                ...state,
                searchResult: action.searchResult,
            };
        case LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        default:
            return state;
    }
};
