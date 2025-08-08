import styled from "styled-components";

export const CardContariner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 4rem;
  padding: 0.5rem;
  width: 14rem;

  background-color: #d9d9d9;
  border-radius: 24px;
`;

export const TittleCard = styled.p`
    font-weight:bold;

`;

export const PriceCard = styled.p`
    font-weight:bold;
`;

export const ButtonCard = styled.button`
  background-color: ${(props) => props.theme["green-button"]};
  color: white;
  border: none;
  border-radius: 12px;

  padding:0.4rem;
  margin-bottom:0.6rem;
  width: 90%;
`;
