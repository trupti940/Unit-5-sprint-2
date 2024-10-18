import {createStore,combineReducers,applyMiddleware} from 'redux';
import userReducer from './components/userReducer'
import bookReducer from './components/bookReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    users : userReducer,
    books : bookReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware())
)

export default store;