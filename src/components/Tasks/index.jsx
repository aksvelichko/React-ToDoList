
function TasksDiv(props) {
    let spanClassName = ''
    if (props.item.isComplete) {
      spanClassName = "text-complete";
    } else {
      spanClassName = "";
    }
    return (
      <div className="task-div" style={{ backgroundColor: props.item.color }}>
        <div>
          <button
            className="complete-div"
            onClick={(event) => props.changeComplete(props.item.id, event)}
          >
            {props.item.isComplete && <span>✓</span>}
          </button>
          <span className={"text-div " + spanClassName} >{props.item.value}</span>
        </div>
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