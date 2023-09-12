'use client';

import { useCallback, useEffect, useMemo, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthStateType, Action, Types } from "../types";
import { Auth } from "aws-amplify";
import awsExports from "@/aws-exports"

const initialState: AuthStateType = {
  user: null,
  loading: true,
};

const reducer = (state: AuthStateType, action: Action) => {
  if (action.type === Types.INITIAL) {
    return {
      loading: false,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGOUT) {
    return {
      ...state,
      user: null,
    };
  }
  return state;
};

type Props = {
  children: React.ReactNode
}

Auth.configure(awsExports);

export const AuthProvider =({ children } : Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const initialize = useCallback(async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      
      if (currentUser) {
        dispatch({
          type: Types.INITIAL,
          payload: {
            user: {
              ...currentUser,
              id: currentUser.attributes.sub,
              displayName: `${currentUser.attributes.name} ${currentUser.attributes.family_name}`,
              roles: currentUser?.signInUserSession?.idToken?.payload['cognito:groups'] ?? []
            },
          },
        });
      } else {
        dispatch({
          type: Types.INITIAL,
          payload: {
            user: null,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: Types.INITIAL,
        payload: {
          user: null,
        },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = useCallback(async (email: string, password: string) => {
    const currentUser = await Auth.signIn(email, password);

    dispatch({
      type: Types.INITIAL,
      payload: {
        user: {
          ...currentUser,
          id: currentUser.attributes.sub,
          displayName: `${currentUser.attributes.name} ${currentUser.attributes.family_name}`,
        },
      },
    });
  }, []);

  // REGISTER
  const register = useCallback(
    async (email: string, password: string, name: string, family_name: string) => {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          name,
          family_name,
        },
      });
    },
    []
  );

  // CONFIRM REGISTER
  const confirmRegister = useCallback(async (email: string, code: string) => {
    await Auth.confirmSignUp(email, code);
  }, []);

  // RESEND CODE REGISTER
  const resendCodeRegister = useCallback(async (email: string) => {
    await Auth.resendSignUp(email);
  }, []);

  // LOGOUT
  const logout = useCallback(async () => {
    await Auth.signOut();
    dispatch({
      type: Types.LOGOUT,
    });
  }, []);

  // FORGOT PASSWORD
  const forgotPassword = useCallback(async (email: string) => {
    await Auth.forgotPassword(email);
  }, []);

  // NEW PASSWORD
  const newPassword = useCallback(async (email: string, code: string, password: string) => {
    await Auth.forgotPasswordSubmit(email, code, password);
  }, []);

  const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';
  const status = state.loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      login,
      logout,
      register,
      newPassword,
      forgotPassword,
      confirmRegister,
      resendCodeRegister,
    }),
    [login, logout, register, newPassword, forgotPassword, confirmRegister, resendCodeRegister, state, status]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>
};