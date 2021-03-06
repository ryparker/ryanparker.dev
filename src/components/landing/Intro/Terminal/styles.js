import styled from 'styled-components';

export const TerminalWrapper = styled.div`
  background-color: rgba(63, 61, 86, 0.7);
  padding: 0 1rem;
  height: 15vw;
  border-top: 1rem solid grey;
  border-radius: 0.5rem;
  color: #DCDCDC;
  line-height: 2rem;
  margin-bottom: 2rem;
  overflow: auto;
  text-align: left;

  .command {
    color: lime;
  }

  .response {
    color: white;
  }

  @media (max-width: 960px) {
    width: 60vw;
    height: 30vw;
    font-size: 0.8em;
	}
`;
