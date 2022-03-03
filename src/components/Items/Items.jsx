import React, {useState, useContext} from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { SiteContext } from '../../context/SiteContext';


function Items(props) {

  let totalItems = 0;
  let siteContext = useContext(SiteContext);
  const numToShow = siteContext.state.numItemsToDisplay;
  const displayComplete = siteContext.state.displayComplete;

  const setTotalItems = (num) => {
    totalItems = num
  }

  const [pageNum, setPageNum] = useState(0);


  // const [showIndex, setShowIndex] = useState(0);

  let items = props.list.map((item) => (
    <div >
    <Card style={{width: '1000px', margin: '30px'}} interactive={true} >
        <h5>Item</h5>
              <p>
                Assigned to: {item.assignee}
              </p>
              <p>
                Difficulty: {item.difficulty}
              </p>
              <div >
                Complete: {item.complete.toString()}
              </div>
        <Button onClick={() => props.toggleComplete(item.id)}>Complete</Button>
    </Card>
    </div>
  ))

  function setItems(itemList, num){
    if(items.length <= 3) return items;
    let tempArr = [];
    for(let i = 0; i < 3; i++){
      tempArr.push(itemList[i])
    }
    return tempArr;
  }

  return (
    <div>
      <div >
      <Button >prev</Button> 
      <Button >next</Button>
      </div>
      {setItems(items, numToShow)}
    <div style={{    display: 'flex', justifyContent: 'center', fontSize: '2em'}}>{pageNum}</div>
    </div>
  );
}

export default Items;