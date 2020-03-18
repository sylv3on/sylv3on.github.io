module.exports = {
  siteMetadata: {
    siteTitle: 'Ashley Ruiz | Portfolio',
    siteDescription: 'InfoSec Blog',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://sylv3on.com/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Ashley Ruiz',
    authorDescription: 'Computer Engineering student in InfoSec with an interest in Offensive Security',
    avatar: '/avatar.jpg',
    twitterSite: 'https://twitter.com/sylv3on_',
    twitterCreator: 'Ashley Ruiz',
    social: [
      {
        icon: `twitter`,
        url: `https://twitter.com/sylv3on_`
      },
      {
        icon: `paypal`,
        url: `https://www.paypal.com/paypalme2/aruiz242`
      },
      {
        icon: `linkedin-in`,
        url: `https://www.linkedin.com/in/ashley-ruiz-692856181/`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
