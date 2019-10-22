import React from 'react';
import { connect } from 'react-redux';
import { RssReaderState } from '../types/RssReaderState';
import ListComponent from '../components/ListComponent';
import { RssReaderProps } from '../types/RssReaderProps';

const mapStateToProps = (state: RssReaderState[]): RssReaderProps => {
  return { rssList: state['rssReader'] };
};
export default connect(mapStateToProps)(ListComponent);
