export const getCart = () => {
  const cart = localStorage.getItem('cart');
  if (cart) return JSON.parse(cart);
  return null;
};
export const addToCart = (item) => {
  const { mealName } = item;
  const cart = getCart();
  if (!cart) {
    item.quantity = 1;
    localStorage.setItem('cart', JSON.stringify({
      [mealName]: item,
    }));
    return true;
  }

  if (!cart[mealName]) {
    item.quantity = 1;
    cart[mealName] = item;
    localStorage.setItem('cart', JSON.stringify({
      ...cart,
      [mealName]: item,
    }));
    return true;
  }
  return false;
};

export const calculateTotalPrice = (cart) => {
  if (!cart || cart.length < 1) return 0;
  const totalPrice = Object.keys(cart)
    .map(meal => parseInt(cart[meal].mealPrice, 10)
    * parseInt(cart[meal].quantity, 10))
    .reduce((total, price) => total + price, 0);
  return totalPrice;
};

export const calculateTotalQuantity = (cart) => {
  if (!cart || cart.length < 1) return 0;
  const totalQuantity = Object.keys(cart)
    .map(meal => parseInt(cart[meal].quantity, 10))
    .reduce((total, quantity) => total + quantity, 0);
  return totalQuantity;
};

export const getCartItems = () => {
  const cart = getCart();
  const cartItems = Object.keys(cart).map((mealkey) => {
    const meal = cart[mealkey];
    return {
      item: meal.mealName,
      quantity: meal.quantity,
      price: meal.mealPrice,
      total: parseInt(meal.mealPrice, 10) * parseInt(meal.quantity, 10),
    };
  });
  return cartItems;
};


export const updateItemQuantity = (item, quantity) => {
  const cart = getCart();
  if (!cart) return false;
  const currentItem = cart[item];
  currentItem.quantity = quantity;
  cart[item] = currentItem;
  localStorage.setItem('cart', JSON.stringify(cart));
  return {
    totalQuantity: calculateTotalQuantity(cart),
    totalPrice: calculateTotalPrice(cart),
  };
};

export const removeItem = (item) => {
  const cart = getCart();
  delete cart[item];
  localStorage.setItem('cart', JSON.stringify(cart));
  return getCart();
};

export const updateCartIcon = () => {
  const value = document.getElementById('cart-count');
  value.innerHTML = getCart() ? Object.keys(getCart()).length : 0;
  return true;
};
