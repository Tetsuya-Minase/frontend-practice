import {RssReaderState} from '../types/RssReaderState';
import {RSS_READER_TYPES, RssActions} from '../actions/RssReaderAction';

export const rssReaderReducer = (state: RssReaderState[] | never = [], action:RssActions): RssReaderState[] => {
    switch (action.type) {
        case RSS_READER_TYPES.ADD_LIST:
            return [...state, ...action.payload];
        default:
            return state;
    }
};
