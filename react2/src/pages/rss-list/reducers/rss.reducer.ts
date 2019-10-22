import { combineReducers } from 'redux';
import { RssActions,RSS_READER_TYPES } from "../actions/rss.action";

export type RssReaderState = {
  contents: RssReaderStateContent[]
}
export type RssReaderStateContent = {
  title: string,
  description: string,
  url: string
}

const initialState: RssReaderState = {
  contents: []
};

export const rssReaderReducer = (state: RssReaderState | never = initialState, action: RssActions): RssReaderState => {
  switch (action.type) {
    case RSS_READER_TYPES.ADD_LIST:
      return {
        contents: [...state.contents, action.payload]
      };
    default:
      return initialState;
  }
};
