import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/routes";
import { FilterProvider } from "./contexts/FilterContext";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <FilterProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </FilterProvider>
    </AuthProvider>
  );
}

export default App;
