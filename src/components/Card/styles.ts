import styled from "styled-components";

export const WrapperCard = styled.article`
  background-color: #f0f8ff;
  width: 100%;
  padding: 0.5rem;
`;

export const ImageCard = styled.img`
  width: 6.875rem;
  height: 6.875rem;
  border: 0.25rem solid #0e1216;
  display: inline;
  margin-right: 1.5rem;
`;

export const SectionMainCard = styled.section`
  background-color: #f0f8ff;
  display: flex;
  flex-direction: row;

  & > section {
    display: flex;
    flex-direction: column;

    & > article {
      position: relative;
    }
  }
`;

export const OffCard = styled.h2`
  color: #053c5e;
  background-color: #46cae4;
  font-weight: bolder;
  font-size: 0.75rem;
  padding: 0.1rem 0.25rem;
  width: max-content;
`;

export const TitleCard = styled.h1`
  color: #0e1216;
  font-weight: bold;
  width: 45vw;
`;

export const UnitProductCard = styled.p`
  color: #0e1216;
  font-size: 0.75rem;
`;

export const PriceCard = styled.h2`
  color: #0e1216;
  font-weight: bold;
`;

export const ExPriceCard = styled.h3`
  color: #a31621;
  font-weight: bold;
  font-size: 0.625rem;
  text-decoration: line-through;
  position: absolute;
  top: 0;
  right: 3rem;
`;

export const SectionCartCard = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin-top: 1rem;
`;

export const StockCard = styled.p`
  color: #474747;
  font-weight: light;
`;

export const CartButtonCard = styled.button`
  /* From Uiverse.io by SalladShooter */
  background-color: #0e1216;
  cursor: pointer;
  padding: 0.25rem;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 0.125rem;
  width: 6em;
  aspect-ratio: 1/0.5;
  color: white;
  background-size: cover;
  border-radius: 0.5em;
  outline: 0.1em solid #353535;
  border: 0;
  box-shadow: 0 0 1em 1em rgba(0, 0, 0, 0.1);
  transition-duration: 1s;
  position: relative;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 1em 0.45em rgba(0, 0, 0, 0.1);
    background: linear-gradient(45deg, #0e1216, #252525);
    background: radial-gradient(circle at bottom, #46cae4 5%, #0e1216 80%);
    outline: 0;
  }
`;
export const Loader = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #0e1216;

`;
