import styled from 'styled-components';

export const Wrapper = styled.div`
	padding-bottom: 4rem;
	flex-grow: 1
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.2rem;
	width: 100%;

	@media (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 680px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const Content = styled.div`
	padding: 1rem 0;
`;

export const Stats = styled.div`
	display: flex;
	width: 100%;
	align-items: flex-end;

	div {
		display: flex;
		&:first-child {
			margin-right: 0.5rem;
		}

		img {
			margin: 0;
		}

		span {
			color: #000;
			margin-left: 0.5rem;
		}
	}
`;
