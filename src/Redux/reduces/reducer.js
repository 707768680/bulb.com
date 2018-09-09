import { NEW_POST,FETCH_POSTS } from '../actions/types.js';
// reducer的作用: 返回新的状态

const initialState = {
  items: [],
  item: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      }
    case NEW_POST:
      console.log("在reducer中")
      console.log(action.payload)
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}