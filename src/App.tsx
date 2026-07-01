//importing the react router to help with navigation and routing between pages 
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    //routes defines the different pages of the application we got a catalog page, about page, item detail page, and so fourth. 
    <Routes>
      <Route path="/" element={<h1>Catalog Page</h1>} />
      <Route path="/about" element={<h1>About Page</h1>} />
      <Route path="/items/:id" element={<h1>Item Detail Page</h1>} />
      <Route path="/list/:status" element={<h1>Status List Page</h1>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;