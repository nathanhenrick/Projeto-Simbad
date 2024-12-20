import styled from "styled-components";

export const PopUpCart = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 1.25rem;
  background-color: var(--myBlue);
  color: var(--myBlack);
  z-index: 999;
  position: absolute;
  top: 0;
  right: 0;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CartHeader = styled.section`
  display: flex;  
  justify-content: center;
  gap: 11rem;
  align-items: center;
  padding-top: 1rem;

  svg {
    font-size: 2rem;
    fill: var(--myBlack);
    transition-duration: 0.3s;
    transform: rotate(-90deg);

    &:hover {
      cursor: pointer;
      transform: scale(1.2);
      transform: rotate(90deg);
      svg {
        fill: var(--myCyan);
      }
    }
  }
`;

export const CartTitle = styled.h1`
  color: var(--myBlack);
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const CartItem = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80vw;
  max-width: 60rem;
  min-height: 15rem;
  background-color: #000;
  color: #fff;
  justify-self: center;
`;

//CartItem -> MainInfos > ProductImage > ProductTitle > ProductDescription
//       \
//        --> PriceInfos > QuantityTitle > ProductQuantity(button) > PriceSection