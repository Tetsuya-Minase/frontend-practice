import React from 'react';
import {connect} from 'react-redux';
import {RssReaderStates} from '../types/RssReaderStates';
import ListComponent from '../components/ListComponent';
import {RssReaderProps} from '../types/RssReaderProps';

const stateToProps = (state: RssReaderStates[]): RssReaderProps => {
    return {rssList: state};
};
export default connect(stateToProps)(ListComponent);
