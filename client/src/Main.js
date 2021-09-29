import React from 'react';
import './Main.css';
import ReactTooltip from "react-tooltip";
import Dropdown from 'react-dropdown';
import Select from 'react-select';
import 'react-dropdown/style.css';
import $ from 'jquery';


function Main(props) {

  const [result, setResult] = React.useState(props.items);
  const [response,setResponse]= React.useState(props.response);
  const [dragSrcEl, setdragSrcEl] = React.useState("");
  const [read,setRead] = React.useState(false);
  const [read2,setRead2] = React.useState(false);
  const [read3,setRead3] = React.useState(false);

  const[selectedValue,setSelectedValue] = React.useState("");

  const readArray = [read,read2,read3];
  const setReadArray = [setRead,setRead2,setRead3];




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
  function handleChange(e){
  setSelectedValue(selectedValue == e.target.value);
  console.log("this is", selectedValue )
  }

  function handleClick(e) {
    console.log(e);
    let plusid = $(e.target).attr('plusid');
    console.log(plusid);
    console.log(setReadArray[plusid]);
    setReadArray[plusid](!readArray[plusid]);
  }

  function onSelectAmount() {

  }

  function onSelectcurrencyPairs() {

  }

  //drag and drop
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

let plusItems =document.querySelectorAll('.plus');
plusItems.forEach(function(item) {
  item.addEventListener('click', handleClick);
});

let amountItems =document.querySelectorAll('.amountDropdown');
amountItems.forEach(function(item) {
  item.addEventListener('onChange',onSelectAmount);
});
let currencyItems =document.querySelectorAll('.currencyPairsDropdown');
currencyItems.forEach(function(item) {
  item.addEventListener('onChange',onSelectcurrencyPairs);
});
let selectedItems =document.querySelectorAll('.amountdropdown');
selectedItems.forEach(function(item) {
  item.addEventListener('onChange',handleChange);
});


});


  const items = [1,2,3];
  let itemList=[];

  const amountOptions = [
  '1M', '2M', '3M','4M','5M'
  ];
  const amountDefaultOption = amountOptions[0];
  let amountDropdown=[];
  amountDropdown.push( <Dropdown className="amountdropdown" options={amountOptions} value={selectedValue} placeholder="Select an option"  />)

  const currencyPairsOptions = [
  'USD/ILS', 'EUR/USD', 'USD/JPY'
  ];
  const currencyPairsDefaultOption = currencyPairsOptions[0];
  let currencyPairsDropdown=[];
  currencyPairsDropdown.push( <Dropdown className="dropdown" options={currencyPairsOptions} value={currencyPairsDefaultOption} placeholder="Select an option" />)


  const amountList = result;

  let itemList2=[];

  items.forEach((item,index)=>{
    const linkContent = result[index];
    const reads = readArray[index];
    itemList2.push(
     !reads?
      <div key={index} id="index" className="placeholder" draggable="true">
      {item}
      <div>{linkContent}</div>
      <a data-tip data-for='addWidget' className="addWidget">
      <div className="plus" plusid={index}>
      <ReactTooltip id='addWidget' type='error'>
      <span>add widget</span>
      </ReactTooltip>
      </div>
      </a>
      </div>
      :
      <div>
      {amountDropdown}
      {currencyPairsDropdown}
      </div>
      )
    })


    return (
    <>
    <div className="container" id="drop-area">


    {itemList2}

    </div>
    </>
    );
  }


export default Main;
