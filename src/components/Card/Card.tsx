import { useState, useEffect } from "react";
import * as S from "./styles";

//* API Props
interface Product {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

//* Card value Props
interface CardProps {
  off: number;
  unit: number;
  stock: number;
  productID: number;
}

export const Card: React.FC<CardProps> = ({ off, unit, stock, productID }) => {
  // API Infos
  const [product, setProduct] = useState<Product | null>(null);
  // Loader API
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // API Call
        const response = await fetch(
          `https://fakestoreapi.com/products/${productID}`
        );
        const data = await response.json();

        setProduct({
          title: data.title,
          price: data.price,
          description: data.description,
          category: data.category,
          image: data.image,
        });
      } catch (err) {
        console.log("Erro ao carregar os dados do produto: " + err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [productID]);

  if (loading) {
    return <S.Loader>Carregando...</S.Loader>;
  }

  return (
    <S.WrapperCard>
      <S.SectionMainCard>
        <S.ImageCard src={product?.image} />
        <section>
          <S.OffCard> {off}% OFF</S.OffCard>
          <S.TitleCard>{product?.title}</S.TitleCard>
          <S.UnitProductCard>{unit} unidades</S.UnitProductCard>
          <article>
            <S.PriceCard>R${product?.price}</S.PriceCard>
            <S.ExPriceCard>R${product?.price}</S.ExPriceCard>
          </article>
        </section>
      </S.SectionMainCard>

      <S.SectionCartCard>
        <S.StockCard>Estoque: {stock}</S.StockCard>

        <S.CartButtonCard className="button">Carrinho</S.CartButtonCard>
      </S.SectionCartCard>
    </S.WrapperCard>
  );
};
