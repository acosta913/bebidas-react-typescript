import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponse,
  RecipeAPIResponseSchema,
} from "../utils/recipes-schema";
import type { Drink, SearchFilter } from "../types";
import api from "../lib/axios";

export async function getCategories() {
  const url = `list.php?c=list`;
  const { data } = await api(url);
  const result = CategoriesAPIResponseSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
}

export async function getRecipes(searchFilters: SearchFilter) {
  const url = `filter.php?c=${searchFilters.category}&i=${searchFilters.ingredient}`;
  const { data } = await api(url);
  const result = DrinksAPIResponse.safeParse(data);
  if (result.success) {
    return result.data;
  }
}

export async function getRecipeById(id: Drink["idDrink"]) {
  const url = `lookup.php?i=${id}`;
  const { data } = await api(url);
  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
  if (result.success) {
    return result.data;
  }
}
