import { BrowserRouter, Link, Route } from "react-router-dom";
import Main from "routes/Main";
import Login from "routes/Login";
import Navigation from "components/Navigation";

const AppRouter = ({ isLoggedIn }) => {
  console.log(isLoggedIn);

  return (
    <div>
      <>
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
      </>
    </div>
  );
};

export default AppRouter;
