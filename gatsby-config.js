const path = require('path');
const config = require('./data/config');

require('dotenv').config();

const siteAddress = new URL('https://ryanparker.dev');

module.exports = {
	siteMetadata: {
		title: config.defaultTitle,
		description: config.defaultDescription,
		author: config.author,
		siteUrl: siteAddress.href.slice(0, -1)
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'static',
				path: path.join(__dirname, '/static')
			}
		},
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-sharp',
			options: {
				useMozJpeg: false,
				stripMetadata: true,
				defaultQuality: 75
			}
		},
		{
			resolve: 'gatsby-source-graphql',
			options: {
				typeName: 'GitHub',
				fieldName: 'github',
				url: 'https://api.github.com/graphql',
				headers: {
					Authorization: `bearer ${process.env.GITHUB_TOKEN}`
				},
				fetchOptions: {}
			}
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: config.themeColor,
				showSpinner: true
			}
		},
		{
			resolve: 'gatsby-plugin-google-gtag',
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [config.googleAnalyticsID],
				// This object gets passed directly to the gtag config command
				// This config will be shared across all trackingIds
				gtagConfig: {
					// Optimize_id: 'OPT_CONTAINER_ID',
					anonymize_ip: true,
					cookie_expires: 0
				},
				// This object is used for configuration specific to this plugin
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: true,
					// Setting this parameter is also optional
					respectDNT: true
					// Avoids sending pageview hits from custom paths
					// exclude: ['/preview/**', '/do-not-track/me/too/'],
				}
			}
		},
		{
			resolve: 'gatsby-plugin-canonical-urls',
			options: {
				siteUrl: siteAddress.href.slice(0, -1)
			}
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
					windows: false
				}
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: config.defaultTitle,
				short_name: config.author,
				start_url: '/',
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'standalone',
				icon: './static/favicon/favicon-512.png'
			}
		},
		'gatsby-plugin-sitemap',
		'gatsby-plugin-offline',
		{
			resolve: 'gatsby-plugin-alias-imports',
			options: {
				workboxConfig: {
					globPatterns: ['**/static/favicon/*']
				},
				alias: {
					Components: path.resolve(__dirname, 'src/components'),
					Common: path.resolve(__dirname, 'src/components/common'),
					Static: path.resolve(__dirname, 'static/'),
					Theme: path.resolve(__dirname, 'src/components/theme'),
					Data: path.resolve(__dirname, 'data/config')
				}
			}
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
				exitEventName: 'sal:out'
			}
		}
	]
};
