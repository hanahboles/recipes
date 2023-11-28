import { Link } from 'react-router-dom';
import './RecipeCard.css';

interface RecipeCardProps {
    id: string;
    image: string;
    title: string;
}

function RecipeCard({ id, image, title }: RecipeCardProps) {
    return (
        <Link to={`recipes/${id}`}>
            <article className="recipe-card-container">
                <img className="recipe-thumbnail" src={image} alt={`${title} recipe preview`} />
                <h2 className="text-center">{title}</h2>
            </article>
        </Link>
    );
}

export default RecipeCard;