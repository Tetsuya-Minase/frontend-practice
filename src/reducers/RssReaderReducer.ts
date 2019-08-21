import {RssReaderStates} from '../constants/RssReaderStates';
import {RSS_READER_TYPES, RssActions} from "../actions/RssReaderAction";


export const rssReaderReducer = (state: RssReaderStates[] | never = [], action:RssActions): RssReaderStates[] => {
    switch (action.type) {
        case RSS_READER_TYPES.ADD:
            return [
                ...state,
                {
                    title: action.payload.title,
                    description: action.payload.description,
                    url: action.payload.url
                }
            ];
        case RSS_READER_TYPES.ADD_LIST:
            return [...state, ...action.payload];
        default:
            return state;
    }
};
