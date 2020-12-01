import styled from 'styled-components';

export const Wrapper = styled.div`
	padding-bottom: 4rem;
	flex-grow: 1
`;

export const RoadmapWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Row = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: row;

	div {
		margin-bottom: 1.2rem;
	}

	@media (max-width: 960px) {
		flex-direction: column;
	}
`;

export const Content = styled.div`
`;

export const Thumbnail = styled.div`
	flex-grow: 2;

	img {
		width: 100%;
	}
`;
