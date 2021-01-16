import {
	address,
	defaultDescription,
	defaultTitle,
	foundingDate,
	legalName,
	logo,
	social,
	socialLinks,
	url
} from 'Data';

import {Helmet} from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import Thumbnail from 'Static/thumbnail/thumbnail.png';

export const Seo = ({title = defaultTitle, description = defaultDescription, location = ''}) => {
	const structuredDataOrganization = `{
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.twitter}",
			"${socialLinks.linkedin}",
			"${socialLinks.github}"
		]
  	}`;

	return (
		<Helmet>
			<meta name="description" content={description}/>
			<meta name="image" content={Thumbnail}/>
			<meta property="og:title" content={title}/>
			<meta property="og:image" content={`${url}/thumbnail/thumbnail.png/`}/>
			<meta property="og:description" content={description}/>
			<meta property="og:url" content={`${url}${location}/`}/>
			<meta property="og:type" content="website"/>
			<meta name="twitter:card" content="summary"/>
			<meta name="twitter:creator" content={socialLinks.twitter}/>
			<meta name="twitter:site" content={social.twitter}/>
			<meta name="twitter:title" content={title}/>
			<meta name="twitter:description" content={description}/>
			<meta name="twitter:image:src" content={Thumbnail}/>
			<script type="application/ld+json">{structuredDataOrganization}</script>
			<title>{title}</title>
			<html lang="en" dir="ltr"/>
		</Helmet>
	);
};

Seo.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	location: PropTypes.string
};
