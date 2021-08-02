import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import CommingSoon from "./pages/comming-soon";
import Content from './pages/content';
import Learn from "./pages/learn";
import Quiz from "./pages/quiz/quiz";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Profile from "./pages/profile/profile";
import Top from './pages/top/top';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/comming-soon">
          <CommingSoon />
        </Route>
        <Route path="/content">
          <Content />
        </Route>
        <Route path="/top">
          <Top />
        </Route>
        <Route path="/learn">
          <Learn />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Redirect to="/signup"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
