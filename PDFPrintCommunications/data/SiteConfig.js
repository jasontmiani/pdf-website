const config = {
  siteTitle: "PDF Print Communications", // Site title.
  siteTitleShort: "PDFPC", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Pacific Data Forms", // Alternative site title for SEO.
  siteLogo: "/logos/logo-pdfpc.png", // Logo used for SEO and manifest.
  siteUrl: "", //TODO (Netlify URL)Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Owned and Operated by PDF Print Communications.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", //TODO Path to the RSS file.
  siteFBAppID: "1825356251115265", //TODO FB Application ID for using app insights
  googleAnalyticsID: "", //TODO GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", //TODO Disqus shortname.
  postDefaultCategoryID: "Printing", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: "Admin", // Username to display in the author segment.
  userEmail: "tdmiani@pdfpc.com", // Email used for RSS feed's author segment
  userTwitter: "", //TODO-OPTIONAL renders "Follow Me" in the UserInfo segment.
  userLocation: "Signal Hill, California", //TODO Amend to Correct Address User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", //NOTE Req Update User avatar to display in the author segment.
  userDescription: "PDFPC Account Manager", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "HOME",
      url: "https://www.pdfpc.com",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "#",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:tdmiani@pdfpc.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. PDF Print Communications", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
