import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MealCard from './MealCard';
import Nav from '../Nav/Nav';
import '../../styles/menu.css';
import navBackground from '../../assets/images/food photo.jpg';

/**
 * @description - component to view menu
 * @class ViewMenu
 * @extends {Component}
 */
class ViewMenu extends Component {
  state = {
    menu: [],
  }

    static propTypes = {
      fetchMenu: PropTypes.func.isRequired,
      fetchMenuResponse: PropTypes.array,
    }

    /**
 * @param { object } nextProps
 * @returns
 * @memberof TextEditor
 * @returns { boolean } false
 */
    shouldComponentUpdate(nextProps) {
      if (this.props.fetchMenuResponse !== nextProps.fetchMenuResponse
        && nextProps.fetchMenuResponse !== null) {
        this.setState({ menu: nextProps.fetchMenuResponse });
        return true;
      }
      return true;
    }

    /**
 * @description - method to execute when component mounts
 * @memberof ViewMenu
 * @returns { undefined }
 */
    componentDidMount() {
      this.props.fetchMenu();
    }

    /**
 * @description - method to render the component
 * @returns { JSX } jsx
 * @memberof ViewMenu
 */
    render() {
      const menu = this.props.fetchMenuResponse;
      return (
      <div className="menu">
      <Nav style={{ backgroundColor: 'rgba(49, 16, 12)' }}/>
        <div className="menuContainer">
        {(menu.length < 1)
          ? <div />
          : (menu.map(meal => (<MealCard key={meal.id} meal={meal}/>)))
        }
        </div>
      </div>
      );
    }
}
export default ViewMenu;
