import {
  getCart, addToCart, calculateTotalPrice, calculateTotalQuantity,
} from '../../src/helpers/cartHelper';

describe('Cart helpers', () => {
  const item = {};
  it('should get the cart', () => {
    localStorage.setItem('cart', JSON.stringify({}));
    expect(getCart()).toBeTruthy();
  });

  it('should add to the cart', () => {
    expect(addToCart(item)).toBe(true);
  });

  it('should create a new cart', () => {
    localStorage.removeItem('cart');
    expect(addToCart(item)).toBe(true);
  });

  it('should not add an item to the cart', () => {
    const myItem = {
      mealName: 'rice',
    };
    localStorage.setItem('cart', JSON.stringify({
      rice: myItem,
    }));
    expect(addToCart(myItem)).toBe(false);
  });

  it('should not calculate the total price', () => {
    const cart = {};
    expect(calculateTotalPrice(cart)).toEqual(0);
  });

  it('should calculate the total price', () => {
    const cart = {
      rice: {
        mealName: 'rice',
        mealPrice: 10,
        quantity: 2,
      },
      beans: {
        mealName: 'beans',
        mealPrice: 10,
        quantity: 3,
      },
    };
    expect(calculateTotalPrice(cart)).toEqual(50);
  });

  it('should calculate the total price', () => {
    const cart = {
      rice: {
        mealName: 'rice',
        mealPrice: 10,
        quantity: 2,
      },
      beans: {
        mealName: 'beans',
        mealPrice: 10,
        quantity: 3,
      },
    };
    expect(calculateTotalQuantity(cart)).toEqual(5);
  });
});
