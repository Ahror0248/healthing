import './App.css';
import HomePage from "./HomePage";
import {useStyles} from "./Components/Classes";
import {Route, Switch} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";

function App() {
    const classes = useStyles();
    return (

        <Switch>
            <Route path={"/"}><HomePage/></Route>
        </Switch>

    );
}

export default App;
