import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/mealCard.css';
/**
 *
 * @class MealCard
 * @extends {Component}
 */
class MealCard extends Component {
  state = {
    meal: null,
  }

  static propTypes = {
    meal: PropTypes.object,
  }

  /**
 * @description - method to render the component
 * @returns { jsx } - jsx
 * @memberof MealCard
 */
  render() {
    return (
      <div className="mealCard" id="mealCard">
        <div className="mealImage">
          <img src={this.props.meal.picture} alt="meal image"/>
        </div>
        <div className="mealContent">
          <div className="mealInfo">
            <span className="mealName">{this.props.meal.name}:</span>
            <span className="mealPrice">{this.props.meal.price}</span>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    );
  }
}

export default MealCard;
