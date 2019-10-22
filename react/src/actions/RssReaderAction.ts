import {Action, Dispatch} from 'redux';
import {RssReaderState} from '../types/RssReaderState';
import axios from 'axios';
import {ThunkAction} from 'redux-thunk';

export enum RSS_READER_TYPES {
    ADD_LIST = 'ADD_RSS_LIST'
}

interface IAddRssListAction extends Action {
    type: typeof RSS_READER_TYPES.ADD_LIST;
    payload: RssReaderState[]
}

// Listに情報を追加するようのAction
export const addRssList = (rssList: RssReaderState[]): IAddRssListAction => ({
    type: RSS_READER_TYPES.ADD_LIST,
    payload: [...rssList]
});
// RSS読み込む用のAction
export const fetchRss = (): ThunkAction<void, any, any, IAddRssListAction> => (
    async (dispatch: Dispatch<IAddRssListAction>) => {
        // データ取ってくる
        const result = await axios.get<RssReaderState[]>('http://localhost:4000/result');
        // 取ってきたデータをリストへ追加する
        dispatch(addRssList(result.data));
    }
);

export type RssActions = (
    ReturnType<typeof addRssList>
    );
