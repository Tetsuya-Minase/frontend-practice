import {combineReducers} from 'redux';
import {rssReaderReducer} from './RssReaderReducer';

export default combineReducers({rssReader: rssReaderReducer});
