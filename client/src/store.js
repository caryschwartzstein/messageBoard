import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk';

const Store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)



export default Store;