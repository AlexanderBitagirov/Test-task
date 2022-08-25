import { Layout } from "antd";
import React from "react";
import AppRouter from "./components/AppRouter";
import 'antd/dist/antd.min.css'
import "./App.css";


function App() {
  return (
    <Layout>
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
