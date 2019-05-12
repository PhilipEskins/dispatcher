import constants from './../constants';
const { type, initialState } = constants;

export default (state = initialState, action) => {
  const {firstNameInput, lastNameInput, addressInput, cityInput, stateInput, zipInput, phoneInput} = action
  switch(action.type) {
  case type.UPDATE_INFO:
  {let newState = Object.assign({}, state, {
    firstNameInput,
    lastNameInput,
    addressInput,
    cityInput,
    stateInput,
    zipInput,
    phoneInput,
  })
  return newState;}
  default:
    return state;
  }
}
