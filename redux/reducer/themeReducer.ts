import { CHOICE_THEME_COLOR } from '../const';
const initialState = {
  themeColor: { id: 0, color: '#9DBBD7' },
};
const themeReducer = (state = initialState, { type, payload }:any) => {
  switch (type) {
    case CHOICE_THEME_COLOR:
      return { ...state, themeColor: payload };

    default:
      return state;
  }
};

export default themeReducer;
