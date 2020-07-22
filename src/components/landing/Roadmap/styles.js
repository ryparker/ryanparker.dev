import styled from 'styled-components';

export const Wrapper = styled.div`
	background-image: url('../illustrations/details.svg');
	background-size: contain;
	background-position: left top;
	background-repeat: no-repeat;
`;

export const SkillsWrapper = styled.div`
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
	padding-left: 2rem;

	@media (max-width: 960px) {
		padding-left: unset;
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
	}
`;

export const StyledImage = styled.img.attrs(_ => {
	return {};
})`
	padding: 4rem 0;
`;

export const SkillTitle = styled.h3.attrs(_ => {
	return {'data-sal': 'slide-left', 'data-sal-easing': 'ease'};
})``;

export const Skill = styled.li.attrs(_ => {
	return {'data-sal': 'slide-left', 'data-sal-easing': 'ease'};
})``;

export const Thumbnail = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}

	img {
		@media (max-width: 960px) {
			width: 50%;
		}

		width: 100%;
	}
`;