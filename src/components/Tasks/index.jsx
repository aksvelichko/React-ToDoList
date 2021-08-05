import React, {useState} from "react";

function TasksDiv(props) {
  let spanClassName = ''
  let completeClassName 
  if (props.item.isComplete) {
    spanClassName = "text-complete";
    completeClassName = "complete";
  } else {
    spanClassName = "";
    completeClassName = "";
  }

  const [editMode, setEditMode] = useState(false);
  const [valueInput, setValueInput] = useState(props.item.value);

  const makeInput = () => {
    if (editMode) {
      props.item.value = valueInput;
      props.changeValue(props.item);
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };
  const setInputValueFunc = (event) => {
    //добавление значение из инпута в объект
    setValueInput(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div className="task-div" style={{ backgroundColor: props.item.color }}>
      <div>
        <button
          className={"complete-div " + completeClassName}
          onClick={(event) => props.changeComplete(props.item.id, event)}
        >
          {props.item.isComplete === true && "✓"}
          
        </button>
        {/* <span className={"text-div " + spanClassName} >{props.item.value}</span> */}
      </div>
      {editMode === true && (
        <input onChange={setInputValueFunc} onDoubleClick={makeInput}></input>
      )}
      {editMode === false && (
        <span className={"text-div " + spanClassName} onDoubleClick={makeInput}>
          {valueInput}
        </span>
      )}
      <button
        className="delete-div"
        style={{ backgroundColor: props.item.color }}
        onClick={() => props.deleteItem(props.item.id)}
      >
        X
      </button>
    </div>
  );
}
export default TasksDiv;