import styled from 'styled-components';

export const CardContainer = styled.div`
  flex-grow: 1;
  margin: 10px;
  background: white;
`;

export const CardImage = styled.img`
  min-width: 100%;
  max-height: 100%;
  object-fit: contain;
  vertical-align: bottom;
`;

export const CardInfo = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  background: #333;
  align-items: center;
`;

export const CardInfoText = styled.span`
  color: white;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`;

export const FavoriteButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }

  .filled {
    color: #f30;
  }
`;
