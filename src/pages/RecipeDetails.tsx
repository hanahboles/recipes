import Breadcrumb from '../components/Breadcrumb';
import LoadingSpinner from '../components/LoadingSpinner';
import useRecipeDetails from '../hooks/use-recipe-details';
import { useLocation } from 'react-router-dom';
import './RecipeDetails.css';

function RecipeDetails() {
    const path = useLocation().pathname;
    const id = path.replace('/recipes/', '');

    const { details, isLoading, error } = useRecipeDetails(id);

    return (
        <div className="page">
            <Breadcrumb currentPage={details?.title} />
            {isLoading && <LoadingSpinner />}
            {error && <div>{error}</div>}
            {details && (
                <>
                    <h1 className="bold margin-b-sm">{details.title}</h1>
                    <section className="recipe-container">
                        <div className="image-container">
                            <img className="cover-image" src={details.image} alt={details.title} />
                        </div>
                        <section className="recipe bg-primary padding-lg">
                            <h2 className="bold margin-b-sm">Ingredients</h2>
                            <ul className="ingredient-list margin-b-md">
                                {details.ingredientList.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
                            </ul>
                            <h2 className="bold margin-b-sm">Instructions</h2>
                            <span className="margin-b-md">{details.instructions}</span>
                        </section>
                    </section>
                </>
            )}
        </div>
    );
}

export default RecipeDetails;