import { BrowserRouter, Link, Route } from "react-router-dom";
import Main from "routes/Main";
import Login from "routes/Login";

const AppRouter = () => {
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Main Page</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Main />
            </Route>
          </>
        ) : (
          <Route exact path="/login" component={Login} />
        )}
      </>
    </BrowserRouter>
  );
};

export default AppRouter;
