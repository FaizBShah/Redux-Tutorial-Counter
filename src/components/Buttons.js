import React from 'react';
import { connect } from "react-redux";
import { updateFirstCounter } from "../actions/counterOneAction";
import { updateSecondCounter } from "../actions/counterTwoAction";

function Buttons(props) {
  const { counterOne, counterTwo } = props;

  function updateFirst(num) {
    console.log("First: " + num);
    props.updateFirstCounter(num);
  }

  function updateSecond(num) {
    console.log("Second: " + num);
    props.updateSecondCounter(num);
  }

  return (
    <div className="text-center">
      <h3>Counter1 Buttons</h3>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <button onClick={() => updateFirst(counterOne + 1)} className="btn btn-primary btn-lg bg-danger text-white mb-2 p-2">Increment: +1</button>
        </div>

        <div className="col-md-4 col-sm-12">
          <button onClick={() => updateFirst(counterOne - 1)} className="btn btn-primary btn-lg bg-danger text-white mb-2 p-2">Decrement: -1</button>
        </div>

        <div className="col-md-4 col-sm-12">
          <button onClick={() => updateFirst(0)} className="btn btn-primary btn-lg bg-danger text-white mb-2 p-2">Reset: 0</button>
        </div>
      </div>

      <h3 className="mt-4">Counter2 Buttons</h3>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <button onClick={() => updateSecond(counterTwo + 2)} className="btn btn-primary btn-lg bg-success text-white mb-2 p-2">Increment: +2</button>
        </div>

        <div className="col-md-4 col-sm-12">
          <button onClick={() => updateSecond(counterTwo - 2)} className="btn btn-primary btn-lg bg-success text-white mb-2 p-2">Decrement: -2</button>
        </div>

        <div className="col-md-4 col-sm-12">
          <button onClick={() => updateSecond(0)} className="btn btn-primary btn-lg bg-success text-white mb-2 p-2">Reset: 0</button>
        </div>

      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  counterOne: state.counterOne.counter,
  counterTwo: state.counterTwo.counter
})

export default connect(mapStateToProps, { updateFirstCounter, updateSecondCounter })(Buttons);