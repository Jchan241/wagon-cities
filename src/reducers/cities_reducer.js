export default function (state, action) {
  if (state === undefined) {
    return [];
  }

  if (action.type === 'SET_CITIES') {
    return action.payload;
  }
  return state;
}

// const citiesReducer = (state, action) => {
//   if (state === undefined) {
//     return [];
//   }

//   switch (action.type) {
//     case 'SET_CITIES':
//       return action.payload;
//     case 'SELECT_CITY':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export default citiesReducer;
