
export const AppReducer = (state, { type, payload }) => {
  switch (type) {
    case 'DELETE_ITEM':
      return {
        ...state,
        transaction: state.transaction.filter((trans) => trans.id !== payload),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transaction: [...state.transaction, payload],
      };
    default:
      break;
  }
};
