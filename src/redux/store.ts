import { createStore, applyMiddleware, combineReducers } from 'redux'
import reduxThunk from 'redux-thunk'
import productsReducer from './products/products.reducer'
import loginReducer from './login/login.reducer'
import registerReducer from './register/register.reducer';

// combining all the reducers
const rootReducer = combineReducers({
    productsReducer: productsReducer,
    loginReducer: loginReducer,
    registerReducer : registerReducer
})

const store = createStore(rootReducer,
    applyMiddleware(reduxThunk))

export default store