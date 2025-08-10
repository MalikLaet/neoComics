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
  padding: 1rem;
  margin: 0.5rem 0;

  max-width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  transition: transform 0.3s ease-in-out, padding 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    padding: 0.8rem;
  }
  margin-bottom: 3rem;
  @media (min-width: 600px) {
    flex: 1 1 45%;
    max-width: 45%;
  }

  @media (min-width: 1024px) {
    flex: 1 1 22%;
    max-width: 22%;
  }
`;

export const CardImage = styled.img`
  display: block;
  height: auto;
  margin: 0 auto;
  padding: 1rem 0;
`;

export const TittlePage = styled.h1`
  padding: 2rem;
`;

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

  transition: transform 0.3s ease-in-out, padding 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    padding: 0.8rem;
  }

  @media (min-width: 600px) {
    padding: 0.8rem;
    font-size: 1.1rem;
  }
`;
