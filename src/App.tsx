import { Layout } from "antd";
import React, { useEffect } from "react";
import AppRouter from "./components/AppRouter";
import 'antd/dist/antd.min.css'
import "./App.css";
import { UseActions } from "./components/hooks/UseActions";
import { IUser } from "./store/reducers/auth/types";


function App() {
  const {setUser, setAuth} = UseActions(); 
  useEffect(() => {
    if(localStorage.getItem("auth")) {
      setUser({username: localStorage.getItem("username" || "")} as IUser)
      setAuth(true)
    } 
  }, [])

  return (
    <Layout>
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
