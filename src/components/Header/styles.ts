import styled from "styled-components";

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 4rem;
`;
export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;
export const Logo = styled.img`
  width: 7rem;
`;
export const FormSearch = styled.form`
  display: flex;
  outline: 2px solid var(--myBlack);
  height: 1.25rem;
`;
export const ImageSearch = styled.div`
  svg {
    background-color: var() (--myBlue);
    width: 1.25rem;
    height: 100%;
    border-right: 2px solid var(--myBlack);
    padding: 0.125rem;

    stroke: var(--myBlack);
    fill: var(--myBlack);
  }
`;
export const InputSearch = styled.input`
  background-color: var(--myBlue);
  width: 8rem;
  padding: 0.25rem;
  font-weight: 500;
`;
export const CartButton = styled.div`
  transition-duration: 0.3s;
  svg {
    width: 1.75rem;
    height: 1.75rem;
    stroke: var(--myBlack);
    fill: var(--myBlack);
  }
  &:hover {
    transform: scale(1.2);
    cursor: pointer;

    svg {
      fill: var(--myDarkBlue);
    }
  }
`;
