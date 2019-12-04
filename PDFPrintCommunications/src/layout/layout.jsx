import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import Nav from "components/Nav";
import MediaQuery from "react-responsive";
export default class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        
        <Helmet>
          <Nav />
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        {children}
      </div>
    );
  }
}
