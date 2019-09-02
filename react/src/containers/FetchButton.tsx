import React, {FC, useEffect} from 'react';
import {fetchRss, RssActions} from '../actions/RssReaderAction';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {RssReaderState} from '../types/RssReaderState';

type DispatchProps = {
    onClick: () => void;
};

const FetchButton: FC<DispatchProps> = ({onClick}) => {

    useEffect(() => onClick(), []);

    return (
        <button
            onClick={() => {
                onClick();
            }}
        >
            追加
        </button>
    );
};

const mapDispatchToProps = (
    dispatch: ThunkDispatch<RssReaderState, undefined, RssActions>
): DispatchProps => ({
    onClick: () => {
        dispatch(fetchRss());
    },
});

export default connect(null, mapDispatchToProps)(FetchButton);
