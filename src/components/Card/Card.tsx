// export const Card: React.FC = () => {
//   async function fetchData() {
//     try {
//       const URL = await fetch(`https://api.escuelajs.co/api/v1/products/${22}`);
//       const response = await URL.json();
//       const title: string = response.title;
//       const price: number = response.price;
//       const description: string = response.description;
//       const category: string = response.category.name;
//       const images: string[] = response.imag;
//       console.log(response);
//       console.log(title, price, description, category, images);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return (
//     <>
//       <section className="bg-myBlue w-10 h-10 border-2 border-myBlack">
//         <article>
//           <img src={} alt="" />
//         </article>
//         <article></article>
//       </section>
//     </>
//   );
// };
