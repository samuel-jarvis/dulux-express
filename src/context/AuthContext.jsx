import { createContext, useReducer, useEffect } from 'react';
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log("login action runs");
      return {
        ...state,
        user: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null
      };
    case 'AUTH-STATE':
      return {user: action.payload, authState: true}
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: "life",
    authState : false
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      dispatch({type: "AUTH-STATE", payload: user})
      // if (user) {
      //   dispatch({
      //     type: 'LOGIN',
      //     payload: user
      //   });
      // } else {
      //   dispatch({
      //     type: 'LOGOUT'
      //   });
      // }
      unsub();
    });
  }, []);

  console.log('state run', state);
  console.log("the user is", state.user);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
