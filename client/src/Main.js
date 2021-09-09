import React from 'react';
import './Main.css';

function Main(props) {

  const [result, setResult] = React.useState(props.dataObject);
  const [dragSrcEl, setdragSrcEl] = React.useState("");



  React.useEffect(() => {
    setResult(result);
     console.log(result)
  }, [result]);


document.addEventListener('DOMContentLoaded', (event) => {
  var dragSrcEl = null;
  function handleDragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';

    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

  function handleDrop(e) {
  e.stopPropagation(); // stops the browser from redirecting.
  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

  let items = document.querySelectorAll('.placeholder');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
  });
});
  return <div className="container" id="drop-area">
  <div id="palceholder1" className="placeholder" draggable="true">1</div>
  <div id="palceholder2" className="placeholder" draggable="true">2</div>
  <div id="palceholder3" className="placeholder" draggable="true">3</div>
  </div>;
}
export default Main;
