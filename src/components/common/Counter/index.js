import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinusSquare, faPlusSquare} from "@fortawesome/free-regular-svg-icons";
import React, {useState} from "react";
import './Counter.scss'

const Counter = (props) => {
    const { initialValue, changeCounter } = props;
    const [counter, setCounter] = useState(initialValue);

    const changeCounterValue = (value) => {
        if (value >= 0) {
            setCounter(value)
            changeCounter(value)
        }
    }

    return (
        <div className="counter">
            <FontAwesomeIcon icon={faMinusSquare} onClick={() => changeCounterValue(counter - 1)} size="lg"/>
            <div>x{counter}</div>
            <FontAwesomeIcon icon={faPlusSquare} onClick={() => changeCounterValue(counter + 1)} size="lg"/>
        </div>
    )
}

export default Counter;