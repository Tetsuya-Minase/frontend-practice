import {connect} from 'react-redux';
import { RssReaderState } from '../reducers/rss.reducer';
import {RssListProps, DispatchProps, RssList} from '../components/RssList';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { fetchRss } from "../actions/rss.action";

const mapStateToProps = (state: RssReaderState): RssListProps => {
  return {
    rssContents: state.contents.map(content => ({
    title: content.title,
    description: content.description,
    link: content.url
  }))}
};

const mapDispatchToProps = (dispatch: ThunkDispatch<RssReaderState, null, Action>): DispatchProps => {
  return {
    fetch: () => dispatch(fetchRss())
  }
};

export const RssListContainer = connect(mapStateToProps, mapDispatchToProps)(RssList);
