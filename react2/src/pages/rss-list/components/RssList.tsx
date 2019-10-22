import React, { useEffect } from 'react';
import { RssListContent } from "./RssListContent";
import { isExistList } from '../../../common/ListUtils';
import { fetchRss } from "../actions/rss.action";

export type RssListProps = {
  rssContents: Array<{
    title: string,
    description: string,
    link: string
  }>
}
export type DispatchProps = {
  fetch: () => void
}

type Props = RssListProps & DispatchProps;

export const RssList = (props: Props) => {
  useEffect(() => {
    console.log('useEffect');
    props.fetch();
  }, []);

  return (
    <>
      {
        isExistList(props.rssContents) ?
          <ul>
            {props.rssContents.map(content =>
              <RssListContent
                key={content.title}
                title={content.title}
                description={content.description}
                link={content.link}
              />)
            }
          </ul>
          : <span>新着記事は有りません</span>
      }
    </>
  );
};
