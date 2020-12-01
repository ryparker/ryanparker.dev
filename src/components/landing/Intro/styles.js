import styled from 'styled-components';

export const Wrapper = styled.div`
	padding-bottom: 4rem;
	flex-grow: 1

	@media (max-width: 960px) {
		padding-bottom: 1rem;
		background-position: center center;
	}
`;

export const IntroWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding-top: 4rem;

	@media (max-width: 960px) {
		flex-flow: row wrap-reverse;
	}
`;

export const Detail = styled.div`
	flex-grow: 1;

	h1 {
		margin-bottom: 2rem;
		font-size: 36pt;
		color: #212121;
	}
`;

export const Thumbnail = styled.div`
	flex-grow: 1;

	background-image: url('../illustrations/cloud-overlay.svg');
	background-size: contain;
	background-position: center top;
	background-repeat: no-repeat;

	img {
		width: 100%;
	}
`;
