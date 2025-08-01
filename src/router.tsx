import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import GenerateAI from "./pages/GenerateAI";

const IndexPage = lazy(() => import("./pages/IndexPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback="Cargando...">
                <IndexPage />
              </Suspense>
            }
            index
          />
          <Route
            path="/favoritos"
            element={
              <Suspense fallback="Cargando...">
                <FavoritesPage />
              </Suspense>
            }
          />
          <Route path="/generate" element={<GenerateAI />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
