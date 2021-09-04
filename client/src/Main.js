import React from 'react';
import './Main.css';

function Main(props) {

  const [result, setResult] = React.useState(props.dataObject);
  console.log(result)
  React.useEffect(() => {
    setResult(result);
  }, [result]);

  return <div className="container">
  {result[0]}
  <div id="palceholder1" className="placeholder">hello</div>
  <div id="palceholder2" className="placeholder"></div>
  <div id="palceholder3" className="placeholder"></div>
  </div>;
}


export default Main;
