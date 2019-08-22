import {Action, Dispatch} from 'redux';
import {RssReaderState} from '../types/RssReaderState';
import axios from 'axios';
import {ThunkAction} from 'redux-thunk';

export enum RSS_READER_TYPES {
    ADD_LIST = 'ADD_RSS_LIST'
}

interface IAddRssListAction extends Action{
    type: typeof RSS_READER_TYPES.ADD_LIST;
    payload: RssReaderState[]
}

export const addRssList = (rssList: RssReaderState[]): IAddRssListAction => ({
    type: RSS_READER_TYPES.ADD_LIST,
    payload: [...rssList]
});
export const fetchRss = (): ThunkAction<void, any, any, IAddRssListAction> => {
    return async (dispatch: Dispatch<IAddRssListAction>) => {
        const result = await axios.get<RssReaderState[]>('http://localhost:4000/result');
        dispatch(addRssList(result.data));
    }
};

export type RssActions = (
    ReturnType<typeof addRssList>
    );
