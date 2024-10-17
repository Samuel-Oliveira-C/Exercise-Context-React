import { FooterComponent } from "@/components/footer";
import { HeaderComponent } from "@/components/header";
import { ListRender } from "@/components/list";
import { ProviderComponent } from "@/context/postContext";
import "@/styles/globals.css";


export default function App() {
  return (
    <>
      <ProviderComponent>
        <HeaderComponent />
        <ListRender />
        <FooterComponent />
      </ProviderComponent>
    </>
  );
}
