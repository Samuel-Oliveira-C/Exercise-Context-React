import { ProviderComponent } from "@/context/postContext";
import "@/styles/globals.css";


export default function App() {
  return (
    <>
      <ProviderComponent>
        <header className="text-base font-bold">Post Criados</header>
        <p>Aqui vem os post</p>
        <footer>Total de Posts criados:</footer>
      </ProviderComponent>
    </>
  );
}
