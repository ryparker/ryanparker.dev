import styled from 'styled-components';

export const Wrapper = styled.div`
	padding-bottom: 4rem;
	flex-grow: 1;

	@media (max-width: 960px) {
		padding-bottom: 1rem;
		background-position: center center;
	}
`;

export const IntroWrapper = styled.div`
	width: 100%;
	padding-top: 4rem;

	display: grid;
	grid-gap: 16px;
	grid-template-columns: 1fr 1fr;
	grid-template-areas: 'content thumbnail';

	@media (max-width: 960px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1.8fr;
		grid-template-areas:
			'thumbnail'
			'content';
	}

	.thumbnail {
		grid-area: thumbnail;
	}

	.content {
		grid-area: content;
	}
`;

export const Detail = styled.div`
	flex-grow: 1;
	align-items: center;

	h1 {
		margin-bottom: 2rem;
		font-size: 36pt;
		color: #212121;
	}

	@media (max-width: 960px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;

		.center {
			margin: auto;
		}
	}
`;

export const Thumbnail = styled.div`
	flex-grow: 1;
	margin: auto;

	background-image: url('../illustrations/cloud-overlay.svg');
	background-size: contain;
	background-position: center top;
	background-repeat: no-repeat;

	img {
		width: 100%;
		padding: 0;
	}
`;
