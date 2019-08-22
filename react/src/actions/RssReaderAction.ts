import {Action, Dispatch} from 'redux';
import {RssReaderStates} from '../types/RssReaderStates';
import axios from 'axios';
import {ThunkAction} from 'redux-thunk';

export enum RSS_READER_TYPES {
    ADD_LIST = 'ADD_RSS_LIST',
    FETCH = 'FETCH_RSS'
}

interface IAddRssListAction extends Action{
    type: typeof RSS_READER_TYPES.ADD_LIST;
    payload: RssReaderStates[]
}
const fetchRssRequest = (): Action<RSS_READER_TYPES.FETCH> => ({
    type: RSS_READER_TYPES.FETCH
});

export const addRssList = (rssList: RssReaderStates[]): IAddRssListAction => ({
    type: RSS_READER_TYPES.ADD_LIST,
    payload: [...rssList]
});
export const fetchRss = (): ThunkAction<void, any, any, any> => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(fetchRssRequest());
        const result = await axios.get<RssReaderStates[]>('http://localhost:4000/result');
        dispatch(addRssList(result.data));
    }
};

export type RssActions = (
    ReturnType<typeof fetchRssRequest>
    | ReturnType<typeof addRssList>
    );
