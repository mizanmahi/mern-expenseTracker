
export const AppReducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_TRANSACTION':
      return {
        ...state,
        transaction: payload.data.data,
        loading: false,
        error: null
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        transaction: state.transaction.filter((trans) => {
          return trans._id !== payload
        }),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transaction: [...state.transaction, payload],
      };
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        transaction: [...state.transaction, payload],
        loading: false,
        error: payload
      };
    default:
      break;
  }
};
