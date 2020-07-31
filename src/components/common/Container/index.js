import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	width: 90vw;
	overflow-x: hidden;

	@media (min-width: 601px) {
		width: 90vw;
	}

	@media (min-width: 993px) {
		width: 80vw;
	}
`;
