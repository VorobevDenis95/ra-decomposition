import Yandex from './components/Yandex';
import News from './components/News';
import Search from './components/Search';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Yandex>
        <News />
        <Search />
        <Main />
      </Yandex>

    </div>
  );
}

export default App;