import axios from "axios";
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponse,
  RecipeAPIResponseSchema,
} from "../utils/recipes-schema";
import type { Drink, SearchFilter } from "../types";

const url_base = import.meta.env.VITE_API_BASE_URL;

export async function getCategories() {
  const url = `${url_base}list.php?c=list`;
  const { data } = await axios(url);
  const result = CategoriesAPIResponseSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
}

export async function getRecipes(searchFilters: SearchFilter) {
  const url = `${url_base}filter.php?c=${searchFilters.category}&i=${searchFilters.ingredient}`;
  const { data } = await axios(url);
  const result = DrinksAPIResponse.safeParse(data);
  if (result.success) {
    return result.data;
  }
}

export async function getRecipeById(id: Drink["idDrink"]) {
  const url = `${url_base}lookup.php?i=${id}`;
  const { data } = await axios(url);
  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
  if (result.success) {
    return result.data;
  }
}
