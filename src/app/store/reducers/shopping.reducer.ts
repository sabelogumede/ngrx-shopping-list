import { ShoppingItem } from '../models/shopping-item.model';
import { ShoppingAction, ShoppingActionTypes } from '../actions/shopping.actions';
// initialize a state with new data
const initialState: Array<ShoppingItem> = [
  {
    id: '1775935f-36fd-467e-a667-09f95b917f6d',
    name: 'Fanta',
  },
  {
    id: '1775935f-36fd-467e-a667-19f95b917f6d',
    name: 'Diet Coke',
  }
];

// export a function called ShoppingReducer
// it takes in to items "state" + "action"
export function ShoppingReducer(
  // state is set to the initialState above
  state: Array<ShoppingItem> = initialState,
  action: ShoppingAction) {
    switch (action.type) {
      case ShoppingActionTypes.ADD_ITEM:
        return [...state, action.payload];
      default:
        return state;
    }
  }
