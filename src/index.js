import store from './store';
import { addProduct, removeProduct } from './cart.actions'
import { setUser, removeUser } from './user.actions'
import { setLanguage } from './language.actions'

store.subscribe(() => console.log(store.getState()));

store.dispatch(addProduct({ id: 1, name: 'milk' }));
store.dispatch(addProduct({ id: 2, name: 'meat' }));
store.dispatch(addProduct({ id: 3, name: 'bread' }));
store.dispatch(removeProduct(2));

store.dispatch(setUser({ name: 'Tom' }));
store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(setUser({ name: 'Ann' }));
store.dispatch(removeUser());

store.dispatch(setLanguage({language: 'jp'}));
store.dispatch(setLanguage({language: 'es'}));
store.dispatch(setLanguage({language: 'ua'}));
