import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import { GlobalStyles } from "./components/styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Card off={25} unit={2} stock={25} productID={1}/>
      <Card off={25} unit={2} stock={25} productID={2}/>
    </>
  );
}

export default App;
