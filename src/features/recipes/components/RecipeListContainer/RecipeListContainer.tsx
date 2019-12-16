import { connect } from 'react-redux';
import React, { MouseEvent } from 'react';
import { Recipe } from '../../model';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import { getAll } from '../../statemanagement/selectors';
import './RecipeListContainer.scss';

interface Props {
    recipes: Recipe[]
}

const RecipeListContainer = ({recipes}: Props) => (<div className="recipe-list">
    {recipes.map(recipe => <RecipeCard key={recipe.href} handleClick={handleClickRecipeCard} recipe={recipe}/>)}
</div>);

const mapStateToProps = (state: any) => ({
    recipes: getAll(state),
});

const handleClickRecipeCard = (recipe: Recipe) => window.open(recipe.href, '_blank');

export default connect(mapStateToProps)(RecipeListContainer);
