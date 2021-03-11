import React from 'react';
import { labels } from '../../utils/labels';

const OfficialWebSiteLink = React.forwardRef(() => 
    <a href={labels.officialWebSiteLink.link} target="_blank">{ labels.officialWebSiteLink.label }</a>
)

export default OfficialWebSiteLink;