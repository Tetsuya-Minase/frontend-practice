
import ReduxThunk, {ThunkMiddleware} from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {RssReaderState, rssReaderReducer}  from '../rss-list/reducers/rss.reducer';
import { RssActions } from '../rss-list/actions/rss.action';

export default createStore(
  rssReaderReducer,
  applyMiddleware(ReduxThunk as ThunkMiddleware<RssReaderState, RssActions>)
);
