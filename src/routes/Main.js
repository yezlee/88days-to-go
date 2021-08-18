import { BrowserRouter, Link, Route } from "react-router-dom";
import MyInfo from "routes/MyInfo";
import MyJobs from "routes/MyJobs";
import MyWork from "routes/MyWork";

const Main = () => {
  return (
    <BrowserRouter>
      <h3>This is Main Page.</h3>
      <p>name</p>
      <p>information</p>
      <ul>
        <li>
          <Link to="/main/myinfo">My Info</Link>
        </li>
        <li>
          <Link to="/main/myjobs">My Jobs</Link>
        </li>
        <li>
          <Link to="/main/mywork">My Work</Link>
        </li>
      </ul>

      <Route exact path="/main" render={() => <div>Rendering.</div>} />
      <Route exact path="/main/myinfo" component={MyInfo} />
      <Route exact path="/main/myjobs" component={MyJobs} />
      <Route exact path="/main/mywork" component={MyWork} />
    </BrowserRouter>
  );
};

export default Main;
