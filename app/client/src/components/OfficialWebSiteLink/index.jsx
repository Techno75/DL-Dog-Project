import React from 'react';
import { labels } from '../../utils/labels';

const OfficialWebSiteLink = React.forwardRef(() => 
    <a href={labels.officialWebSiteLink.link} rel="noreferrer" target="_blank">{ labels.officialWebSiteLink.label }</a>
)

export default OfficialWebSiteLink;