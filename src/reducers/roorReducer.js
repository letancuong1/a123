import {combineReducers} from 'redux';
import infomations from './reducer/infomations';
import chatsReducer from './reducer/chatsReducer';
import userReducer from './reducer/userReducer';
import toDoList from './reducer/toDoList';



const rootReducer = combineReducers({
    infomations,
    chatsReducer,
    userReducer,
    toDoList,
})

export default rootReducer;