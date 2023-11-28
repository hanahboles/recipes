import './Breadcrumb.css';
import { Link} from 'react-router-dom';

interface BreadcrumbProps {
    currentPage?: string;
}

function Breadcrumb({ currentPage }: BreadcrumbProps) {
    return (
        <ol className="breadcrumbs margin-b-sm">
            <li className="breadcrumb link">
                <Link
                    className="breadcrumb"
                    to="/">Recipes
                </Link>
            </li>
            {
                currentPage && (
                    <li className="breadcrumb">
                        <span
                            className="breadcrumb"> / {currentPage}
                        </span>
                    </li>
                )
            }
        </ol>
    )
}

export default Breadcrumb