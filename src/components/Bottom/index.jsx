function BottomPanel(props) {
    return (
      <div>
        <a className = 'Completed'
        onClick={() => props.finishedTasks()}>Completed</a>
        <a className = 'Active'
        onClick={() => props.noFinishedTasks()}>Active</a>
        <a className='all'
        onClick={() => props.allTasks()}>All</a>
        <a 
        onClick={() => props.ClearAllTasks()}>Clear all </a>
        <a 
        onClick={() => props.clearFinishedTasks()}>Clear completed</a>
        {/* <a 
        onClick={() => props.allFinishedTasks()}>Make all tasks completed</a> */}
      </div>
    );
  }
  export default BottomPanel;