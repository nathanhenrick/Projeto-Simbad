// import logoBlack from "../../images/logo-black.png"
import logoWhite from "../../images/logo-white.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

// import {
//   WrapperHeader,
//   StyledHeader,
//   FormSearch,
//   ImageSearch,
//   InputSearch,
//   // CartButton,
// } from "./styles";
import * as S from "./styles";
// import { Card } from "./components/Card/Card";
export const Header: React.FC = () => {
  return (
      <S.WrapperHeader>
        <S.StyledHeader>
          <S.Logo src={logoWhite} alt="Simbad Logo" />

          <S.FormSearch>
            <S.ImageSearch>
              <FaSearch />
            </S.ImageSearch>

            <S.InputSearch
              type="text"
              id="id_inputSearch"
              placeholder="Search"
              maxLength={15}
            />
          </S.FormSearch>
          <S.CartButton>
            <FaShoppingCart />
          </S.CartButton>
        </S.StyledHeader>
      </S.WrapperHeader>
  );
};
