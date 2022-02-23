import React from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";



function Form(props) {
  return (
    <div >

    <Card style={{width: '1000px', margin: '30px'}} interactive={true} elevation={Elevation.TWO}>
      <form onSubmit={props.handleSubmit}>
        <h2>I Have something to do!</h2>

        <label>
          <span>Goal</span>
          <input
            onChange={props.handleChange}
            name="text"
            type="text"
            placeholder="description"
            />
        </label>

        <label>
          <span>Assigned To</span>
          <input
            onChange={props.handleChange}
            name="assignee"
            type="text"
            placeholder="Assignee Name"
            />
        </label>

        <label>
          <span>Difficulty</span>
          <input
            onChange={props.handleChange}
            defaultValue={3}
            type="range"
            min={1}
            max={5}
            name="difficulty"
            />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>
    </Card>
            </div>
  );
}

export default Form;