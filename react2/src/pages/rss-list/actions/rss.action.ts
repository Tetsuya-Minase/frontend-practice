import axios from 'axios';
import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RssReaderStateContent } from "../reducers/rss.reducer";
export enum RSS_READER_TYPES {
  ADD_LIST = 'ADD_LIST',
}

export const addRssList = (content: RssReaderStateContent) => ({
  type: RSS_READER_TYPES.ADD_LIST,
  payload: content
});

export const fetchRss = (): ThunkAction<void, any, any, Action> => (
  async (dispatch: Dispatch<Action>) => {
    const result = await axios.get<RssReaderStateContent[]>('http://localhost:4000/result');
    result.data.forEach(content => dispatch(addRssList(content)));
  }
);

export type RssActions = (
  ReturnType<typeof  addRssList>
);
