import Breadcrumb from '../components/Breadcrumb';
import RecipeCard from '../components/RecipeCard';
import LoadingSpinner from '../components/LoadingSpinner';
import useRecipeList from '../hooks/use-recipe-list';
import './RecipeList.css';

function RecipeList() {
    const { isLoading, recipes, error } = useRecipeList();
    
    const renderedRecipes = recipes && recipes.length > 0 && recipes.map((recipe) => 
        <RecipeCard
            key={recipe.idMeal}
            id={recipe.idMeal}
            image={recipe.strMealThumb}
            title={recipe.strMeal} />
    );

    return (
        <div className="page">
            <Breadcrumb />
            <div>
                <h1 className="text-center bold margin-b-lg">Thanksgiving Side Ideas</h1>
                {isLoading && <LoadingSpinner />}
                {error && <div>{error}</div>}
                <div className="recipe-wrapper">{renderedRecipes}</div>
            </div>
        </div>
    );
}

export default RecipeList;