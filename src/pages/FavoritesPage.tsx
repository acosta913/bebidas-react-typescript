import { useMemo } from "react";
import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore";

export default function FavoritesPage() {
  const favorites = useAppStore((state) => state.favorites);
  const hasFavorites = useMemo(() => favorites.length, []);
  return (
    <>
      <h1 className=" text-6xl font-extrabold">FAVORITES</h1>
      {hasFavorites ? (
        <div className=" grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
          {favorites.map((recipe) => (
            <DrinkCard key={recipe.idDrink} drink={recipe} />
          ))}
        </div>
      ) : (
        <p className=" my-10 text-center text-2xl">
          Los Favoritos se mostraran aqui
        </p>
      )}
    </>
  );
}
