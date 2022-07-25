import styled from 'styled-components';

export const CardContainer = styled.div`
  flex-grow: 1;
  background: #fafafa;
  margin: 10px;
  display: flex;
  flex-direction: column;
  max-width: 250px;
  height: 250px;
  padding: 10px;
  margin-bottom: 50px;
`;

export const CardImage = styled.img`
  max-width: 100%;
  min-height: 100%;
  object-fit: contain;
  vertical-align: bottom;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fafafa;
  align-items: center;
  padding: 10px;
  margin: 10px -10px 0 -10px;
`;

export const CardInfoText = styled.span`
  color: black;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`;

export const FavoriteButton = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }

  .filled {
    color: #f30;
  }
`;
