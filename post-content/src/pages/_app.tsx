import { FooterComponent } from "@/components/footer";
import { HeaderComponent } from "@/components/header";
import { ProviderComponent } from "@/context/postContext";
import "@/styles/globals.css";


export default function App() {
  return (
    <>
      <ProviderComponent>
        <HeaderComponent />
        <p>Aqui vem os post</p>
        <FooterComponent />
      </ProviderComponent>
    </>
  );
}
