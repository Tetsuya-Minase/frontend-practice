import * as React from 'react';
import {RssReaderStates} from '../../types/RssReaderStates';
import {RssReaderProps} from '../../types/RssReaderProps';

export default (props: RssReaderProps) => {
    console.log('props: ', props);
    console.log('props.rssList:', props.rssList);
    console.log('props.rssList["rssReaderReducer"]: ', props.rssList['rssReaderReducer']);
    console.log('join:', props.rssList['rssReaderReducer'].join());
    if (Array.isArray(props.rssList['rssReaderReducer'])) {
        return (
            <ul>
                {props.rssList['rssReaderReducer'].map((rss: RssReaderStates) => <li>{rss.title}</li>)}
            </ul>
        );
    }
    return (<div>hogehoge</div>);
};
