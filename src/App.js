import logo from './logo.svg';
import './App.css';

const GrandChildOne = (props) => {
  return (
    <>
      <h3>{props.bookTitle}</h3>
      <h3>{props.author}</h3>
    </>
  )
}


const ChildOne = (props) => {
  return (
    <>
      <h1>{props.bookTitle}</h1>
      {props.author && <GrandChildOne bookTitle={props.bookTitle} author={props.author}/>}
    </>
  )
}


const App = () => {
  return (
    <div className="App">
      <ChildOne bookTitle='Goosebumps' />
      <ChildOne bookTitle='Twilight' />
      <ChildOne author='jkrawling' bookTitle='Harry Potter' />
    </div>
  );
}

export default App;