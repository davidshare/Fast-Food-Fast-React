/**
 * @description - function to update an object with out mutating it
 * @param { object } oldState
 * @param { object } newValues
 * @returns {object} - updated object
 */
const updateStateHelper = (oldState, newValues) => ({
  ...oldState,
  ...newValues,
});

export default updateStateHelper;
