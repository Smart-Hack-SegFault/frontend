import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";
import { supabase } from "../utils/supabaseConfig";

import { START_LOADING, ADD_USER_SUCCESS, GET_SKILLS_SUCCESS } from "./actions";

const AppContext = React.createContext();

const initialState = {
  user: {},
  skills: [],
  isLoading: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getCurrentUser = async (userId) => {
    dispatch({ type: START_LOADING });

    try {
      const { data } = await supabase.from("User").select("*").eq("id", userId);

      dispatch({ type: ADD_USER_SUCCESS, payload: data[0] });
    } catch (error) {
      console.log(error);
    }
  };

  const getSkills = async (userId) => {
    dispatch({ type: START_LOADING });

    try {
      const { data } = await supabase
        .from("User_Skill")
        .select("*, Tags(name, Categories(type, category))")
        .eq("user", userId);

      dispatch({ type: GET_SKILLS_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider value={{ ...state, getCurrentUser, getSkills }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
