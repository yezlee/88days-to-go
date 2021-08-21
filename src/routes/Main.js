import { BrowserRouter, Link, Route } from "react-router-dom";
import MyInfo from "routes/MyInfo";
import MyJobs from "routes/MyJobs";
import MyWork from "routes/MyWork";
import "css/Main.css";

const Main = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/myinfo">My Info</Link>
          </li>
          <li>
            <Link to="/myjobs">My Jobs</Link>
          </li>
          <li>
            <Link to="/mywork">My Work</Link>
          </li>
        </ul>
        <hr />

        <Route exact path="/" render={() => <div>Rendering.</div>} />
        <Route exact path="/myinfo" component={MyInfo} />
        <Route exact path="/myjobs" component={MyJobs} />
        <Route exact path="/mywork" component={MyWork} />
      </BrowserRouter>
    </div>
  );
};

export default Main;
