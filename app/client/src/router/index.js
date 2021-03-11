import Home                 from '../components/Home';
import StanfordDogs         from '../components/StanfordDogs';
import OfficialWebSiteLink  from '../components/OfficialWebSiteLink';

export const roadMap = [
    { path: "/home", name: "Home", component: Home },
    { path: "/stanford-dogs", name: "Dogs images classifier", component: StanfordDogs },
    { path: "http://svl.stanford.edu/", name: "Official Website", component: OfficialWebSiteLink, externalLink: true},
    { redirect: true, path:"/", to:"/home", name: "Home"}
];