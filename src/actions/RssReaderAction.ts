import {Action, Dispatch} from "redux";
import {RssReaderStates} from "../constants/RssReaderStates";
import axios from 'axios';
import {ThunkAction} from "redux-thunk";

export enum RSS_READER_TYPES {
    ADD = 'ADD_RSS',
    ADD_LIST = 'ADD_RSS_LIST',
    FETCH = 'FETCH_RSS'
}
interface IAddRssAction extends Action {
    type: typeof RSS_READER_TYPES.ADD;
    payload: RssReaderStates;
}
interface IAddRssListAction extends Action{
    type: typeof RSS_READER_TYPES.ADD_LIST;
    payload: RssReaderStates[]
}

export const addRss = (title: string, description: string, url: string): IAddRssAction => ({
    type: RSS_READER_TYPES.ADD,
    payload: {
        title: title,
        description: description,
        url: url
    }
});
export const addRssList = (rssList: RssReaderStates[]): IAddRssListAction => ({
    type: RSS_READER_TYPES.ADD_LIST,
    payload: [...rssList]
});
export const fetchRssRequest = (): Action<RSS_READER_TYPES.FETCH> => ({
    type: RSS_READER_TYPES.FETCH
});
export const fetchRss = (): ThunkAction<void, any, any, any> => {
    return async (dispatch: Dispatch<Action>) => {
        console.log('in fetchRss');
        dispatch(fetchRssRequest());
        const result = await axios.get<RssReaderStates[]>('http://localhost:4000/result');
        console.log('result:', result);
        dispatch(addRssList(result.data));
    }
};

export type RssActions = (
    ReturnType<typeof addRss>
    | ReturnType<typeof fetchRssRequest>
    | ReturnType<typeof addRssList>
    );

