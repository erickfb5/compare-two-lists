import './App.css';
import { useState } from 'react';

const App = () => {
  const [listA, setListA] = useState();
  const [onlyA, setOnlyA] = useState();
  const [listB, setListB] = useState();
  const [onlyB, setOnlyB] = useState();
  const [bothLists, setBothLists] = useState();  
  
  const compareArrays = (first, second) => {
    const newArr = [];
    for (let i = 0; i < second.length; i += 1) {
      if (first.indexOf(second[i]) === -1) newArr.push(second[i])
    }
    return newArr.toString().split(',').join(' - ')
  }

  const compareEqual = (first, second) => {
    const newArr = [];
    for (let i = 0; i < second.length; i += 1) {
      if (first.indexOf(second[i]) !== -1) newArr.push(second[i])
    }
    return newArr.toString().split(',').join(' - ')
  }
  
  const compareBoth = () => {    
    setOnlyB(compareArrays(listA, listB))
    setOnlyA(compareArrays(listB, listA))
    setBothLists(compareEqual(listA, listB))
    document.getElementById('btn-compare').hidden = true ;

  }

  const clearLists = () => {
    setOnlyB('');
    setOnlyA('');
    setBothLists('');
    document.getElementById('btn-compare').hidden = false;
    window.location.reload(false);

  }

  return (
    <div>
      <h1>Compare Two Lists</h1>
      <div className="txt-area">
        <div className="list-a">
          <label>List A</label><br />
          <textarea id='txt-a' onInput={e => setListA(e.target.value)} />
        </div>

        <div className="list-b">
          <label>List B</label><br />
          <textarea id='txt-b' onInput={e => setListB(e.target.value)} />
        </div>

        <div className="only-a">
          <label>Only A</label><br />
          <textarea value={onlyA} disabled />
        </div>

        <div className="only-b">
          <label>Only B</label><br />
          <textarea value={onlyB} disabled />
        </div>

        <div className="both-lists">
          <label>Both Lists</label><br />
          <textarea value={bothLists} disabled />
        </div>

      </div>
      <button id='btn-compare' onClick={compareBoth}>compare</button>
      <button id='btn-clear' onClick={clearLists}>clear</button>
    </div>
  );
}

export default App;
