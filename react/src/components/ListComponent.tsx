import * as React from 'react';
import {RssReaderStates} from '../types/RssReaderStates';
import {RssReaderProps} from '../types/RssReaderProps';

export default (props: RssReaderProps) => (
        <ul>
            {props.rssList['rssReaderReducer']
                .map((rss: RssReaderStates, index: number) =>
                    <li key={index}>
                        <a href={rss.url} target="_blank">{rss.title}</a>: {rss.description}
                    </li>)
            }
        </ul>
    );
