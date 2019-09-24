import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item',
}
// action
export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;
  // mutate ShoppingItem after action ADD_ITEM
  constructor(public payload: ShoppingItem) {}
}
// export AddItemAction (add more actions to be taken here...)
export type ShoppingAction = AddItemAction;
