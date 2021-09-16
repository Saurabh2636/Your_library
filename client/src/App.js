import React, { useState, createContext } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Create from "./Component/CreateBook/Create";
import Bookinfo from "./Component/BookInfo/BookInfo";
import Update from "./Component/Update/Update";
import Books from "./Component/Books/Books";
import Layout from "./Layout/Layout";
export const Mycontext = createContext();
export const MyId = createContext();
const App = () => {
  const [id, setId] = useState({});
  console.log(id);
  return (
    <div>
      <Mycontext.Provider value={setId}>
        <MyId.Provider value={id}>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/create">
                <Create />
              </Route>
              <Route exact path="/bookinfo/:id">
                <Bookinfo />
              </Route>
              <Route exact path="/update/:id">
                <Update />
              </Route>
              <Route exact path="/books">
                <Books />
              </Route>
            </Switch>
          </Layout>
        </MyId.Provider>
      </Mycontext.Provider>
    </div>
  );
};

export default App;
