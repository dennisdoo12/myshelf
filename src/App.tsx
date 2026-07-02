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
    //this is the div that wraps the app and applies the theme and densiity settings for whole app
    <div className={theme === "dark" ? "dark" : ""}>
      <div
        className={`min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white ${
          density === "compact" ? "text-sm" : "text-base"
        }`}
      >
        <NavBar />

        <main className={density === "compact" ? "p-3" : "p-6"}>
          <Routes>
            <Route path="/" element={<CatalogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/items/:id" element={<ItemDetailPage />} />
            <Route path="/list/:status" element={<StatusListPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;