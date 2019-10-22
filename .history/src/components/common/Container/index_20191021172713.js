import styled from 'styled-components'

export const Container = styled.div.attrs({'data-sal': 'fade'})`
	max-width: 1280px;
	margin: 0 auto;
	width: 90%;

	@media (min-width: 601px) {
		width: 90%;
	}

	@media (min-width: 993px) {
		width: 80%;
	}
`
