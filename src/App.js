import { useState } from 'react';

import Header from './components/Header';
import Search from './components/Search';
import UserInfo from './components/UserInfo';
import useFetch from './utilities/hooks/useFetch';
import './app.scss';

function App() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const data = useFetch(username, setLoading);

  return (
    <div className="mainContainer">
      <Header />
      <Search setUsername={setUsername} loading={loading} setLoading={setLoading}/>
      <UserInfo data={data} />
    </div>
  );
}

export default App;
