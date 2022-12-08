import {
  USER_EMAIL,
  USER_PASSWORD,
  ACCESS_TOKEN,
  ACCOUNT_ACCESS_TOKEN,
  RANGE,
  FUND,
  LOWER,
  UPPER,
  FIRST_NAME,
  LAST_NAME,
  NAME,
  BIRTH,
  NATIONALITY,
  COUNTRY_BIRTH,
  CURP,
  RFC,
  TAX,
  PHONE,
  OCCUPATION,
  COUNTRY_CODE,
  IS_TOKEN_SUBSCRIBED,
  STREET,
  EXTERIOR,
  INSIDE,
  POSTAL_CODE,
  COLONY,
  MUNICIPALITY,
  STATE,
} from "./actions";

const initialValues = {
  email: "",
  password: "",
  access_token: "",
  account_access_token:"",
  range: "",
  fund: "",
  lower: "",
  upper: "",
  firstName: "",
  lastName: "",
  name: "",
  birth: "",
  nationality: "",
  countryBirth: "",
  curp: "",
  rfc: "",
  tax: "",
  phone: "",
  occupation: "",
  countryCode: "",
  isTokenSubscribed: "",
  street: "",
  exterior: "",
  inside: "",
  postalCode: "",
  colony: "",
  municipality: "",
  state: "",
};

const userReducer = (state = initialValues, action) => {
  switch (action.type) {
    case USER_EMAIL: {
      return { ...state, email: action.payload };
    }

    case USER_PASSWORD: {
      return { ...state, password: action.payload };
    }

    case ACCESS_TOKEN: {
      return { ...state, access_token: action.payload };
    }
    case RANGE: {
      return { ...state, range: action.payload };
    }
    case FUND: {
      return { ...state, fund: action.payload };
    }
    case LOWER: {
      return { ...state, lower: action.payload };
    }
    case UPPER: {
      return { ...state, upper: action.payload };
    }
    case FIRST_NAME: {
      return { ...state, firstName: action.payload };
    }
    case LAST_NAME: {
      return { ...state, lastName: action.payload };
    }
    case NAME: {
      return { ...state, name: action.payload };
    }
    case BIRTH: {
      return { ...state, birth: action.payload };
    }
    case NATIONALITY: {
      return { ...state, nationality: action.payload };
    }
    case COUNTRY_BIRTH: {
      return { ...state, countryBirth: action.payload };
    }
    case CURP: {
      return { ...state, curp: action.payload };
    }
    case RFC: {
      return { ...state, rfc: action.payload };
    }
    case TAX: {
      return { ...state, tax: action.payload };
    }
    case PHONE: {
      return { ...state, phone: action.payload };
    }
    case OCCUPATION: {
      return { ...state, occupation: action.payload };
    }
    case COUNTRY_CODE: {
      return { ...state, countryCode: action.payload };
    }
    case IS_TOKEN_SUBSCRIBED: {
      return { ...state, isTokenSubscribed: action.payload };
    }
    case STREET: {
      return { ...state, street: action.payload };
    }
    case EXTERIOR: {
      return { ...state, exterior: action.payload };
    }
    case INSIDE: {
      return { ...state, inside: action.payload };
    }
    case POSTAL_CODE: {
      return { ...state, postalCode: action.payload };
    }
    case COLONY: {
      return { ...state, colony: action.payload };
    }
    case MUNICIPALITY: {
      return { ...state, municipality: action.payload };
    }
    case STATE: {
      return { ...state, state: action.payload };
    }

    default:
      return state;
  }
};

export default userReducer;
