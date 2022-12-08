export const USER_EMAIL = "USER_EMAIL";
export const USER_PASSWORD = "USER_PASSWORD";
export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const ACCOUNT_ACCESS_TOKEN = "ACCOUNT_ACCESS_TOKEN";
export const RANGE = "RANGE";
export const FUND = "FUND";
export const LOWER = "LOWER";
export const UPPER = "UPPER";
export const FIRST_NAME = "FIRST_NAME";
export const LAST_NAME = "LAST_NAME";
export const NAME = "NAME";
export const BIRTH = "BIRTH";
export const NATIONALITY = "NATIONALITY";
export const COUNTRY_BIRTH = "COUNTRY_BIRTH";
export const CURP = "CURP";
export const RFC = "RFC";
export const TAX = "TAX";
export const PHONE = "PHONE";
export const OCCUPATION = "OCCUPATION";
export const COUNTRY_CODE = "COUNTRY_CODE";
export const IS_TOKEN_SUBSCRIBED = "IS_TOKEN_SUBSCRIBED";
export const STREET = "STREET";
export const EXTERIOR = "EXTERIOR";
export const INSIDE = "INSIDE";
export const POSTAL_CODE = "POSTAL_CODE";
export const COLONY = "COLONY";
export const MUNICIPALITY = "MUNICIPALITY";
export const STATE = "STATE";

export const addEmail = (email) => (dispatch) => {
  return dispatch({
    type: USER_EMAIL,
    payload: email,
  });
};

export const addPassword = (password) => (dispatch) => {
  return dispatch({
    type: USER_PASSWORD,
    payload: password,
  });
};

export const addAccessToken = (token) => (dispatch) => {
  return dispatch({
    type: ACCESS_TOKEN,
    payload: token,
  });
};
export const addAccountAccessToken = (account_token) => (dispatch) => {
  return dispatch({
    type: ACCOUNT_ACCESS_TOKEN,
    payload: account_token,
  });
};
export const addRange = (range) => (dispatch) => {
  return dispatch({
    type: RANGE,
    payload: range,
  });
};

export const addFund = (fund) => (dispatch) => {
  return dispatch({
    type: FUND,
    payload: fund,
  });
};

export const addLower = (lower) => (dispatch) => {
  return dispatch({
    type: LOWER,
    payload: lower,
  });
};

export const addUpper = (upper) => (dispatch) => {
  return dispatch({
    type: UPPER,
    payload: upper,
  });
};

export const addFirstName = (firstName) => (dispatch) => {
  return dispatch({
    type: FIRST_NAME,
    payload: firstName,
  });
};

export const addLastName = (lastName) => (dispatch) => {
  return dispatch({
    type: LAST_NAME,
    payload: lastName,
  });
};

export const addName = (name) => (dispatch) => {
  return dispatch({
    type: NAME,
    payload: name,
  });
};

export const addBirth = (birth) => (dispatch) => {
  return dispatch({
    type: BIRTH,
    payload: birth,
  });
};

export const addNationality = (nationality) => (dispatch) => {
  return dispatch({
    type: NATIONALITY,
    payload: nationality,
  });
};

export const addCountryBirth = (countryBirth) => (dispatch) => {
  return dispatch({
    type: COUNTRY_BIRTH,
    payload: countryBirth,
  });
};

export const addCurp = (curp) => (dispatch) => {
  return dispatch({
    type: CURP,
    payload: curp,
  });
};

export const addRfc = (rfc) => (dispatch) => {
  return dispatch({
    type: RFC,
    payload: rfc,
  });
};

export const addTax = (tax) => (dispatch) => {
  return dispatch({
    type: TAX,
    payload: tax,
  });
};

export const addPhone = (phone) => (dispatch) => {
  return dispatch({
    type: PHONE,
    payload: phone,
  });
};

export const addOccupation = (occupation) => (dispatch) => {
  return dispatch({
    type: OCCUPATION,
    payload: occupation,
  });
};

export const addCountryCode = (countryCode) => (dispatch) => {
  return dispatch({
    type: COUNTRY_CODE,
    payload: countryCode,
  });
};

export const addIsTokenSubscribed = (isTokenSubscribed) => (dispatch) => {
  return dispatch({
    type: IS_TOKEN_SUBSCRIBED,
    payload: isTokenSubscribed,
  });
};

export const addStreet = (street) => (dispatch) => {
  return dispatch({
    type: STREET,
    payload: street,
  });
};

export const addExterior = (exterior) => (dispatch) => {
  return dispatch({
    type: EXTERIOR,
    payload: exterior,
  });
};

export const addInside = (inside) => (dispatch) => {
  return dispatch({
    type: INSIDE,
    payload: inside,
  });
};

export const addPostalCode = (postalCode) => (dispatch) => {
  return dispatch({
    type: POSTAL_CODE,
    payload: postalCode,
  });
};

export const addColony = (colony) => (dispatch) => {
  return dispatch({
    type: COLONY,
    payload: colony,
  });
};

export const addMunicipality = (municipality) => (dispatch) => {
  return dispatch({
    type: MUNICIPALITY,
    payload: municipality,
  });
};

export const addState = (state) => (dispatch) => {
  return dispatch({
    type: STATE,
    payload: state,
  });
};
