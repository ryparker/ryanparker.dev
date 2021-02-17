import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  margin: auto;
  max-width: 1200px;
  padding-left: 10px;
  padding-right: 10px;

  @media (max-width: 1460px) {
    overflow-x: hidden;
  }

  @media (max-width: 960px) {
    max-width: 90vw;
  }
`;
