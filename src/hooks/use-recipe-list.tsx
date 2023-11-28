import { useEffect, useState } from 'react';

const RECIPE_API='https://www.themealdb.com/api/json/v1/1/filter.php?c=Side';

interface IRecipe {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

function useRecipeList() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch(RECIPE_API);
                const responseJSON = await response.json();
                if (responseJSON.meals?.length) {
                    setRecipes(responseJSON.meals);
                } else {
                    throw new Error('No results');
                }
            } catch (err: any) {
                if (typeof err === 'string') {
                    setError(err);
                } else {
                    setError(err.message);
                }
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        }
        fetchRecipes();
    }, [])

    return {
        isLoading,
        recipes,
        error
    };
}

export default useRecipeList;