// Importing React Router to help with navigation between pages.
import { Route, Routes } from "react-router-dom";

// Import all page components.
import CatalogPage from "./pages/CatalogPage";
import AboutPage from "./pages/AboutPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import StatusListPage from "./pages/StatusListPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    //this is all thhe routes for the application. the path is the url and the element is the page that will be displayed when the user navigates to that path. 
    <Routes>
      <Route path="/" element={<CatalogPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/items/:id" element={<ItemDetailPage />} />
      <Route path="/list/:status" element={<StatusListPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
//export it to the app
export default App;