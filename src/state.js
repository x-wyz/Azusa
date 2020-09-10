import { createStore } from 'redux';
import rootreducer from './reducers/root';

let store = createStore(rootreducer);

export default store;
