import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { AppState } from './store/models/app-state.model';
import { ShoppingItem } from './store/models/shopping-item.model';
import { AddItemAction } from './store/actions/shopping.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  shoppingItems$: Observable<Array<ShoppingItem>>;
  constructor(private store: Store<AppState>) {}
  // new-ShoppingItem instant initialization with empty input fields
  newShoppingItem: ShoppingItem = { id: '', name: ''};

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping);

    // after 2sec addItem will add item
    // setTimeout(() => this.addItem(), 2000);
  }

  // addItem function dispatches a new action='AddItemAction to the store with a payload of items
  // using addItemAcction function import from actions
  addItem() {
    this.newShoppingItem.id = uuid();
    // firing the AddItemAction in actions taking inn a payload of newShoppingItem inside shopping-reducer
    // in shopping-reducer, the action type is checked in the switch statement
    // and return a new version or ...
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    // after it has been dispatched set to blank
    this.newShoppingItem = { id: '', name: ''};
  }

}
