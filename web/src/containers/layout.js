import { graphql, StaticQuery } from "gatsby";
import React, { useState } from "react";
import ReactGA from "react-ga";
import Layout from "../components/layout";

import "bootstrap/dist/css/bootstrap.css";
import "shards-ui/dist/css/shards.css";

ReactGA.initialize("UA-165932729-1");

if (process.browser) {
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

function LayoutContainer(props) {
  const [showNav, setShowNav] = useState(false);
  function handleShowNav() {
    setShowNav(true);
  }
  function handleHideNav() {
    setShowNav(false);
  }
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
          );
        }
        return (
          <Layout
            {...props}
            showNav={showNav}
            siteTitle={data.site.title}
            onHideNav={handleHideNav}
            onShowNav={handleShowNav}
          />
        );
      }}
    />
  );
}

export default LayoutContainer;
