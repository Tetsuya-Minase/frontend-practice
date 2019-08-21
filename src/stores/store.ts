import ReduxThunk, {ThunkMiddleware} from 'redux-thunk';
import {applyMiddleware, createStore} from "redux";
import rootReducer from '../reducers';
import {RssReaderStates} from "../constants/RssReaderStates";
import {RssActions} from "../actions/RssReaderAction";

export default createStore(
    rootReducer,
    applyMiddleware(ReduxThunk as ThunkMiddleware<RssReaderStates, RssActions>)
);
