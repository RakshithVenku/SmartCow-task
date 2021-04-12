import { createStore, combineReducers } from 'redux'
import inputReducer from '../reducers/inputReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        input : inputReducer
    }))

    return store
}

export default configureStore