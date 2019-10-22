const path = require( 'path' )
const config = require( './data/config' )

require( 'dotenv' ).config( {
	path: `.env.${process.env.NODE_ENV}`,
} )

module.exports = {
	siteMetadata: {
		title: config.defaultTitle,
		description: config.defaultDescription,
		author: config.author,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		/* {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: '${__dirname}/src/assets',
      },
    }, */
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-graphql',
			options: {
				typeName: 'GitHub',
				fieldName: 'github',
				url: 'https://api.github.com/graphql',
				headers: {
					Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
				},
				fetchOptions: {},
			},
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: config.themeColor,
				showSpinner: false,
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: config.googleAnalyticsID,
				head: true,
			},
		},
		{
			resolve: 'gatsby-plugin-favicon',
			options: {
				logo: './static/favicon/favicon-512.png',
				injectHTML: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					twitter: false,
					yandex: false,
					windows: false,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: config.defaultTitle,
				short_name: 'starter',
				start_url: '/',
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'minimal-ui',
				icon: './static/favicon/favicon-512.png',
			},
		},
		'gatsby-plugin-offline',
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					Components: path.resolve( __dirname, 'src/components' ),
					Common: path.resolve( __dirname, 'src/components/common' ),
					Static: path.resolve( __dirname, 'static/' ),
					Theme: path.resolve( __dirname, 'src/components/theme' ),
					Data: path.resolve( __dirname, 'data/config' ),
				},
			},
		},
		{
    resolve: `gatsby-plugin-scroll-reveal`,
    options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
        
        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%' // Corresponds to root's bounding box margin
        enterEventName: 'sal:in' // Enter event name
        exitEventName: 'sal:out' // Exit event name
    }
  }
	],
}
