import styled from 'styled-components';

export const Card = styled.div.attrs({
	'data-sal': 'slide-left',
	'data-sal-easing': 'ease-in'
})`
	display: flex;
	flex-direction: row;
	flex-flow: row wrap;
	padding: 1rem;
	background: #FFFFFF;
	box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.33);

	h3 {
		color: #212121;
	}

	h4 {
		color: #212121;
	}

	p {
		color: #707070;
	}
`;
