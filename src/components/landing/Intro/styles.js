import styled from 'styled-components';

export const Wrapper = styled.div`
	padding-bottom: 4rem;
	background-image: url('../illustrations/overlay.svg');
	background-size: contain;
	background-position: right top;
	background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 960px) {
		flex-direction: column;
	}

	.accent {
		color: #e94e1b;
	}
`;

export const Details = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 36pt;
		color: #212121;

		@media (max-width: 680px) {
			font-size: 30pt;
		}
	}
`;

export const Thumbnail = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
	}

	img {
		width: 100%;
	}
`;
