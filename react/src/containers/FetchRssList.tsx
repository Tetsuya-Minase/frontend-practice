import React from 'react';
import {connect} from 'react-redux';
import {RssReaderState} from '../types/RssReaderState';
import ListComponent from '../components/ListComponent';
import {RssReaderProps} from '../types/RssReaderProps';

const stateToProps = (state: RssReaderState[]): RssReaderProps => {
    return {rssList: state};
};
export default connect(stateToProps)(ListComponent);
