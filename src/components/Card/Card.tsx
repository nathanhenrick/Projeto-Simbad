import { useState, useEffect } from "react";
import * as S from "./styles";

interface Product {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface CardProps {
  off: number;
  unit: number;
  stock: number;
  productID: number;
}

export const Card: React.FC<CardProps> = ({ off, unit, stock, productID }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        
        const responses = await Promise.all(
          ids.map(async(id) => {
            console.log(id)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            return response.json()
          })
        );
        const firstProduct = responses[productID]

        setProduct({
          title: firstProduct.title,
          price: firstProduct.price,
          description: firstProduct.description,
          category: firstProduct.category.name,
          image: firstProduct.image,
        });
      } catch (err) {
        setError("Erro ao carregar os dados do produto" + err + error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

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
