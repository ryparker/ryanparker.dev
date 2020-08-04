import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 4rem 2rem;
	display: flex;
	align-items: flex-start;
	justify-content: space-evenly;
	flex-direction: column;

	@media (max-width: 680px) {
    padding: 1rem;
  }
`;

export const Grid = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 8fr;
	gap: 1.2rem 1.2rem;

	@media (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 680px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const Item = styled.div.attrs({
	'data-sal': 'slide-left',
	'data-sal-easing': 'ease-in'
})`
	width: 100%;
	height: 100%;
	overflow: hidden;
	box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.44);

	h4 {
		color: #212121;
	}

	p {
		color: #707070;
	}
`;

export const Content = styled.div`
	padding: 1rem 0;
`;

export const Stats = styled.div`
	display: flex;
	align-items: center;

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
