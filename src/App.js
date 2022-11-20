import './App.css';
import MyportfolioDetails from './components/MyPortfolioDetails';
import MyHomePage from './components/MyHomePage';
import MyAboutPage from './components/MyAboutPage';
import ResumePage from './components/ResumePage';


function App() {
  return (
    <body className="App">
      <MyportfolioDetails/>
      <MyHomePage/>
      <MyAboutPage/>
      <ResumePage/>
    </body>
  );
}

export default App;
