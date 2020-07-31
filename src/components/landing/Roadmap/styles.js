import styled from 'styled-components';

export const Wrapper = styled.div`
	padding-bottom: 4rem;
	background-image: url('../illustrations/details.svg');
	background-size: contain;
	background-position: left top;
	background-repeat: no-repeat;
`;

export const MilestonesWrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`;

export const Details = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 26pt;
		color: #212121;
	}

	p {
		margin-bottom: 2.5rem;
		font-size: 10pt;
		font-weight: normal;
		line-height: 1.3;
		color: #707070;
		word-break: true;
	}
`;

export const MilestoneTitle = styled.h3.attrs(_ => {
	return {'data-sal': 'slide-left', 'data-sal-easing': 'ease'};
})``;

export const Milestone = styled.li.attrs(_ => {
	return {'data-sal': 'slide-left', 'data-sal-easing': 'ease'};
})``;

export const Thumbnail = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}

	img {
		width: 100%;
	}
`;
