
import './App.scss'
import Main from "./Main"
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom"

export default function App() {
  return (
    <Router>
      <Route>
        <Main />
      </Route>
    </Router>
  );
}