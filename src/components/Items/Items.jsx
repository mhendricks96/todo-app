import React, {useState} from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";

function Items(props) {

  const [showIndex, setShowIndex] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const numToShow = 3; 

  let items = props.list.map((item) => (
    <div >
    <Card style={{width: '1000px', margin: '30px'}} interactive={true} elevation={Elevation.TWO}>
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
    for(let i = showIndex; i <(showIndex + num); i++){
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