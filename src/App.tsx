import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import CatalogPage from "./pages/CatalogPage";
import AboutPage from "./pages/AboutPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import StatusListPage from "./pages/StatusListPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useUiStore } from "./store/useUiStore";
//app function which is the main function that renders the app and the routes. 
function App() {
  const theme = useUiStore((state) => state.theme);
  const density = useUiStore((state) => state.density);

  return (
  <div
    className={
      theme === "dark"
        ? "min-h-screen bg-slate-900 text-white"
        : "min-h-screen bg-white text-black"
    }
  >
    <NavBar />

    <main className={density === "compact" ? "p-3 text-sm" : "p-6 text-base"}>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/items/:id" element={<ItemDetailPage />} />
        <Route path="/list/:status" element={<StatusListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  </div>
);
}

export default App;