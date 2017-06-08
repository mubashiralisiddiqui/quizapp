
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import TokenReducer from '../store/reducers/adminReducers/tokenReducer'


const rootReducer = combineReducers({
    TokenReducer
})

export const Store = compose(
    applyMiddleware(thunk),
    autoRehydrate()
)(createStore)(rootReducer)

persistStore(Store, { });

// store = createStore(rootReducer, applyMiddleware(thunk));
// export const store
