import "@/styles/globals.css";
import { SwitchUser } from "@/components/IsLoged";
import { ComponentProvider } from "@/contexts/contextUser";

export default function App() {
  return (
    <>
      <header>
        <h1>Titulo da pagina</h1>
        <ComponentProvider>
          <SwitchUser />
        </ComponentProvider>
      </header>
    </>
  );
}
