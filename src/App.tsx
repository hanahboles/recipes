import RecipeDetails from './pages/RecipeDetails';
import RecipeList from './pages/RecipeList';
import { Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </HashRouter>
  );
}

export default App;