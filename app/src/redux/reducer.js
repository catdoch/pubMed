import { UPDATE_COUNT } from './actions';

export default (
      state = {},
      action,
  ) => {
      switch (action.type) {
          case UPDATE_COUNT:
              return {
                  ...state,
                  count: action.count?.esearchresult?.count,
              };
          default:
              return state;
      }
  };