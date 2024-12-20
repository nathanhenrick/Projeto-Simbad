import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { CartCard } from "./components/CartCard/CartCard";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Card off={25} unit={1} stock={25} productID={1} />
      <Card off={13} unit={1} stock={48} productID={2} />
      <Card off={42} unit={1} stock={12} productID={3} />
      <Card off={17} unit={1} stock={17} productID={4} />
      <Card off={8} unit={1} stock={89} productID={5} />
      <Card off={12} unit={1} stock={92} productID={6} />
      <Card off={17} unit={1} stock={81} productID={7} />
      <Card off={25} unit={1} stock={8} productID={8} />
      <Card off={28} unit={1} stock={2} productID={9} />
      <Card off={31} unit={1} stock={19} productID={10} />

      <CartCard />
    </>
  );
}

export default App;
