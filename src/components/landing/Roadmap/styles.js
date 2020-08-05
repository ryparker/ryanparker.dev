import styled from 'styled-components';

export const Wrapper = styled.div`
	background-image: url('../illustrations/details.svg');
	background-size: contain;
	background-position: left bottom;
	background-repeat: no-repeat;

	padding: 4rem;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	flex-direction: row;
	max-width: 100vw;
	overflow-x: hidden;

	@media (max-width: 960px) {
    flex-direction: column;
	}

	@media (max-width: 680px) {
    padding: 1rem;
  }
`;

export const Details = styled.div`
	flex: 1;
	flex-direction: row;
	max-width: 100%;

  @media (max-width: 960px) {
    padding-right: unset;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;

export const Grid = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 4fr;
	grid-template-rows: 8fr;
	gap: 1.2rem 1.2rem;
`;

export const Item = styled.div.attrs({
	'data-sal': 'slide-left',
	'data-sal-easing': 'ease-in'
})`
	overflow: hidden;
	box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.33);

	h4 {
		color: #212121;
	}

	li {
		color: #707070;
	}
`;

export const Thumbnail = styled.div`
	flex: 1;

	img {
		width: 100%;
	}
`;
