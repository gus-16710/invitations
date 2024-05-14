import { dancing, lobster } from "./Fonts";

export default function Header() {
  return (
    <section className="h-screen bg-[url('/img/quinces/sayuri/golden-background.jpg')] bg-cover bg-center bg-fixed flex flex-col justify-center items-center">
        <h1 className={`${dancing.className} golden-text`}>Sayuri</h1>
    </section>
  );
}
