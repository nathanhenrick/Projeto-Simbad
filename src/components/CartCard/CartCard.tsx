import { FaXmark } from "react-icons/fa6";
import * as S from "./styles.ts"

export const CartCard:React.FC = () => {
  return (
    <S.PopUpCart>
      <S.CartHeader>
        <S.CartTitle>Carrinho</S.CartTitle>
      <FaXmark />
      </S.CartHeader>

      <S.CartItem>
        Hello, World!
      </S.CartItem>
    </S.PopUpCart>
  )
}