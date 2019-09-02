import React from 'react';
import {RssReaderState} from '../types/RssReaderState';
import {RssReaderProps} from '../types/RssReaderProps';

export default (props: RssReaderProps) => (
    <ul>
        {
            props.rssList
                .map((rss: RssReaderState, index: number) =>
                    <li key={index}>
                        <a href={rss.url} target="_blank">{rss.title}</a>: {rss.description}
                    </li>)
        }
    </ul>
);
