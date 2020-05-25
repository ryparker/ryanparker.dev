const path = require('path')
const config = require('./data/config')

require('dotenv').config()

module.exports = {
	siteMetadata: {
		title: config.defaultTitle,
		description: config.defaultDescription,
		author: config.author,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'static',
				path: `${__dirname}/static`,
			},
		},
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
				showSpinner: true,
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
				short_name: 'Ryan Parker',
				start_url: '/',
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'minimal-ui',
				icon: './static/favicon/favicon-512.png',
			},
		},
		'gatsby-plugin-offline',
		{
			resolve: 'gatsby-plugin-alias-imports',
			options: {
				alias: {
					Components: path.resolve(__dirname, 'src/components'),
					Common: path.resolve(__dirname, 'src/components/common'),
					Static: path.resolve(__dirname, 'static/'),
					Theme: path.resolve(__dirname, 'src/components/theme'),
					Data: path.resolve(__dirname, 'data/config'),
				},
			},
		},
		{
			resolve: 'gatsby-plugin-scroll-reveal',
			options: {
				threshold: 0.75,
				once: false,
				disable: false,
				selector: '[data-sal]',
				animateClassName: 'sal-animate',
				disabledClassName: 'sal-disabled',
				rootMargin: '0% 50%',
				enterEventName: 'sal:in',
				exitEventName: 'sal:out',
			},
		},
	],
}
