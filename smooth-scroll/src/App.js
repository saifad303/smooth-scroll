import React,{ useState } from 'react';
import useBookSearch from './useBookSearch';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const onChangeHandler = (e) =>{
    setQuery(e.target.value);
    setPageNumber(1);
  };

  useBookSearch(query, pageNumber);

  return (
    <div className="App">
      <input type="text" onChange={onChangeHandler}/>
      <div>
        <p>Title1</p>
        <p>Title2</p>
        <p>Title3</p>
      </div>
      <div>
        <p>loading...</p>
        <p>error</p>
      </div>
    </div>
  );
}

export default App;
