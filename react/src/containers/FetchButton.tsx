import React from 'react';
import {fetchRss, RssActions} from '../actions/RssReaderAction';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {RssReaderStates} from '../types/RssReaderStates';

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
    dispatch: ThunkDispatch<RssReaderStates, undefined, RssActions>
): DispatchProps => ({
    onClick: () => {
        dispatch(fetchRss());
    },
});

export default connect(null, mapDispatchToProps)(FetchButton);
