const FETCH_CURRENT_SCHEMA = "em/create/Stuff";

export default function reducer(state = {
  data: {}
}, action) {
  switch (action.type) {
    case FETCH_CURRENT_SCHEMA:
      return {
        data: {
          name: action.name
        }
      };

    default:
      return state;
  }
}

// Intermediate action creators and helpers
function stuff(name) {
  return {
    type: FETCH_CURRENT_SCHEMA,
    name
  };
}

// Action creators
export const newPage = (name, title) => dispatch => {
  dispatch(stuff(name));
};