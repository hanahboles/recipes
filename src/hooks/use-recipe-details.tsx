import { useEffect, useState } from 'react';

const RECIPE_API='https://www.themealdb.com/api/json/v1/1/lookup.php';
const MAX_INGREDIENTS = 20;

interface IDetails {
    title: string;
    image: string;
    ingredientList: string[];
    instructions: string;
}

function useRecipeDetails(id: string) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [details, setDetails] = useState<IDetails>();
    const [error, setError] = useState<null | string>(null);

    const formatResponse = (response: any) => {
        const formatIngredientList = () => {
            const ingredients: string[] = [];
            for (let i = 1; i <= MAX_INGREDIENTS; i++) {
                const ingredient = response[`strIngredient${i}`];
                const measurement = response[`strMeasure${i}`];
                if (ingredient && measurement) {
                    ingredients.push(measurement + ' ' + ingredient);
                } else {
                    break;
                }
            }
            return ingredients;
        }

        return {
            title: response.strMeal,
            image: response.strMealThumb,
            instructions: response.strInstructions,
            ingredientList: formatIngredientList()
        };
    }

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            const params = new URLSearchParams({
                'i': id
            });
            try {
                const response = await fetch(`${RECIPE_API}?${params}`);
                const responseJSON = await response.json();
                if (responseJSON.meals && responseJSON.meals[0]) {
                    setDetails(formatResponse(responseJSON.meals[0]));
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
        fetchRecipeDetails();
    }, [id]);

    return {
        isLoading,
        details,
        error
    };
}

export default useRecipeDetails;