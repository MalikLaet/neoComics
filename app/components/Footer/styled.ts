import styled from "styled-components";

export const FooterComponent = styled.footer`
  background-color: ${(props) => props.theme["slate-bg"]};
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  position: fixed;
  bottom: 0;
`;

export const TextName = styled.p`
  padding-left: 2rem;
  color: white;
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 2rem;
  padding-right: 2rem;
`;
