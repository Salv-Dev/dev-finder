import Header from './components/Header';
import Search from './components/Search';
import UserInfo from './components/UserInfo';
import './app.scss';

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Search />
      <UserInfo />
    </div>
  );
}

export default App;
