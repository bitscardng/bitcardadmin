import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="text-white bg-primary">
        <Routes>
          <Route
            path="/"
            element={
              <Sidebar>
                <Layout>
                  <Dashboard />
                </Layout>
              </Sidebar>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
