import React from 'react';
import {fetchRss, RssActions} from '../actions/RssReaderAction';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {RssReaderState} from '../types/RssReaderState';

type DispatchProps = {
    onClick: () => void;
};
class FetchButton extends React.Component<DispatchProps> {
    componentDidMount(): void {
        this.props.onClick();
    }
    render() {
        return (
            <button
                onClick={() => {
                    this.props.onClick();
                }}
            >
                追加
            </button>
        );
    }
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<RssReaderState, undefined, RssActions>
): DispatchProps => ({
    onClick: () => {
        dispatch(fetchRss());
    },
});

export default connect(null, mapDispatchToProps)(FetchButton);
