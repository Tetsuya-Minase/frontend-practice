
import React from 'react';

type Props = {
  title: string,
  description: string,
  link: string
};

export const RssListContent = (props: Props) => (
  <li>
    <strong><a href={props.link}>{props.title}</a></strong><br />
    <span>{props.description}</span>
  </li>
);
