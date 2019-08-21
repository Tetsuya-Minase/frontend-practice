import React from 'react';
import {fetchRss, RssActions} from '../actions/RssReaderAction';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {RssReaderStates} from '../types/RssReaderStates';

type DispatchProps = {
    onClick: () => void;
};
const button: React.FC<DispatchProps> = (props: DispatchProps) => (
    <button
        onClick={() => {
            props.onClick();
        }}
    >
        更新
    </button>
);
const mapDispatchToProps = (
    dispatch: ThunkDispatch<RssReaderStates, undefined, RssActions>
): DispatchProps => ({
    onClick: () => {
        dispatch(fetchRss());
    },
});

export default connect(null, mapDispatchToProps)(button);
