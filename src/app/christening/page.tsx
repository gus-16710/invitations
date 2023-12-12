import Header from "./components/Header";
import Presentation from "./components/Presentation";

export default function Christening() {
  return (
    <div className="max-w-3xl m-auto bg-[url('/img/christening/background-floral.jpg')] bg-bottom bg-cover bg-fixed">
      <Header />
      <Presentation />
    </div>
  );
}
