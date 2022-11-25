import { USER_EMAIL , USER_PASSWORD , ACCESS_TOKEN} from "./actions"

const initialValues = {
    email: "",
    password: "",
    access_token : ""
}



const userReducer = (state = initialValues, action) => {
    switch (action.type) {
      case USER_EMAIL: {
        console.log("email", action.payload);
        return { ...state, email: action.payload };
      }

      case USER_PASSWORD: {
        console.log("password", action.payload);
        return { ...state, password: action.payload };
      }

      case ACCESS_TOKEN: {
        console.log("access_token", action.payload);
        return { ...state, access_token: action.payload };
      }

      default:
        return state;
    }
}

export default userReducer