export const initialState = {
  lang: 'bn',
};
export default function languageReducer(state, action) {
  switch (action.type) {
    case 'CURRENT_LANGUAGE':
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
}
