export default function productReducer(state = {}, action = {}){
  switch(action.type){
    case 'ADD_PRODUCT':
      if(action.operation === 'Add')
        return (x,y) => y.add(x)
      break;

    case 'DELETE_PRODUCT':
      if(action.operation === 'Delete')
        return (x,y) => y.remove(x)
      break;

    default:
      return state;
  }
}
