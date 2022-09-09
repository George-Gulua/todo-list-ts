import classes from './App.module.css';
import {BrowserRouter} from "react-router-dom";
import NavMenu from "./components/NavBar/NavMenu";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  return (
      <BrowserRouter>
          <main className={ classes.app }>
              <div className={ classes.container }>
                  <NavMenu/>
                  <AppRouter/>
              </div>
          </main>
      </BrowserRouter>
  );
}

export default App;
