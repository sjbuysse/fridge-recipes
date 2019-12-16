import { Recipe } from '../../model';
import React from 'react';
import './RecipeCard.scss';

interface Props {
    recipe: Recipe;
    handleClick: (recipe: Recipe) => void;
}

export const RecipeCard = ({recipe, handleClick}: Props) => {
    return (
        <div className="card" onClick={() => handleClick(recipe)}>
            <img src={recipe.thumbnail} alt={recipe.title}/>
            <div className="card__content">
                <h2> {recipe.title} </h2>
                <p> {recipe.ingredients}</p>
            </div>
        </div>
    )
};
