export const initialState = { count: 0 };

export const COUNT_PLUS = 'COUNT_PLUS' as const;
export const COUNT_MINUS = 'COUNT_MINUS' as const;

export const countPlusAction = () => ({
  type: COUNT_PLUS,
});

export const countMinusAction = () => ({
  type: COUNT_MINUS,
});

type CountAction =
  | ReturnType<typeof countPlusAction>
  | ReturnType<typeof countMinusAction>;

const reducer = (state = initialState, action: CountAction) => {
  console.log(state);
  // 리듀서
  switch (
    action.type // 액션의 type이 COUNT_PLUS일땐 state에 + 1 COUNT_MINUS 일 땐 state에 -1
  ) {
    case COUNT_PLUS:
      return {
        ...state,
        count: state.count + 1,
      };
    case COUNT_MINUS:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default reducer;
