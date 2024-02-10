import { User } from "./Components/User/User";
import { UserDetails } from "./Components/UserDetails/UserDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="mx-8">
      <Route path="/" exact component={User} />
      <Route path="/:id" exact component={UserDetails} />
    </div>
  );
}

export default App;
