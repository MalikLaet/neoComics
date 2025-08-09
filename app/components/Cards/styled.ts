import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 1rem;
`;

export const CardContariner = styled.div`
  background-color: #d9d9d9;
  border-radius: 24px;
  padding: 0.5rem;
  margin: 0.5rem 0;

  flex: 1 1 100%;
  max-width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom:3rem;
  @media (min-width: 600px) {
    flex: 1 1 45%;
    max-width: 45%;
  }

  @media (min-width: 1024px) {
    flex: 1 1 22%;
    max-width: 22%;
  }
`;

export const TittlePage = styled.h1`
  padding-left:1rem;
`

export const TittleCard = styled.p`
  font-weight: bold;
  @media (min-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const PriceCard = styled.p`
  font-weight: bold;
  @media (min-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const ButtonCard = styled.button`
  background-color: ${(props) => props.theme["green-button"]};
  color: white;
  border: none;
  border-radius: 12px;

  padding: 0.4rem;
  margin-bottom: 0.6rem;
  width: 90%;

  @media (min-width: 600px) {
    padding: 0.8rem;
    font-size: 1.1rem;
  }
`;
