import { BrowserRouter, Link, Route } from "react-router-dom";
import Main from "routes/Main";
import Login from "routes/Login";
import Sidebar from "components/Sidebar";
import "css/Router.css";

const AppRouter = ({ isLoggedIn }) => {
  console.log(isLoggedIn);

  return (
    <div className="Router">
      <Sidebar />
      {isLoggedIn ? (
        <>
          <Route exact path="/">
            <Main />
          </Route>
        </>
      ) : (
        <>
          <Route exact path="/">
            <Login />
          </Route>
        </>
      )}
    </div>
  );
};

export default AppRouter;
