import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HaederManagement from "./component/HaederManagement/HaederManagement";
import AboutManagement from "./component/AboutManagement/AboutManagement";
import ContactManagement from "./component/ContactManagement/ContactManagement";
import ResumeManagement from "./component/ResumeManagemnet/ResumeManagement";
import BlogManagement from "./component/BlogManagement/BlogManagement";
import ProjectManagement from "./component/ProjectManagement/ProjectManagement";
import "./App.css";
import { useEffect, useState } from "react";
import { ClipLoader, RingLoader } from "react-spinners";
function App() {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  useEffect(() => {
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 1000);
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {loading ? (
              <div className="loader">
                <RingLoader color={"#FD0155"} loading={loading} size={150} />
              </div>
            ) : (
              <HaederManagement></HaederManagement>
            )}
          </Route>

          {loading ? (
            <div className="loader">
              <RingLoader color={"#FD0155"} loading={loading2} size={150} />
            </div>
          ) : (
            <>
              {" "}
              <Route exact path="/about">
                <AboutManagement></AboutManagement>
              </Route>
              <Route exact path="/contact">
                <ContactManagement></ContactManagement>
              </Route>
              <Route exact path="/resume">
                <ResumeManagement></ResumeManagement>
              </Route>
              <Route exact path="/blog">
                <BlogManagement></BlogManagement>
              </Route>
              <Route exact path="/project">
                <ProjectManagement></ProjectManagement>
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </>
  );
}

export default App;
