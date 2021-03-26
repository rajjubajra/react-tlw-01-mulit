import MenuBar from "./components/MainMenu/MenuBar";
import{BrowserRouter, Route, Switch} from 'react-router-dom'; 
import Home from './page/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MenuBar />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
