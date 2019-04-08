import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

// combined both reducers
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer;