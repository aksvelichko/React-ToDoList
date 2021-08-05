function BottomPanel(props) {
    return (
      <div>
        <button className = 'Completed'
        onClick={() => props.finishedTasks()}>Completed</button>
        <button className = 'Active'
        onClick={() => props.noFinishedTasks()}>Active</button>
        <button className='all'
        onClick={() => props.allTasks()}>All</button>
        <button className = 'clearTask'
        onClick={() => props.ClearAllTasks()}>Clear all </button>
        <button className = 'Clear'
        onClick={() => props.clearFinishedTasks()}>Clear completed</button>
        {/* <button 
        onClick={() => props.allFinishedTasks()}>Make all tasks completed</button> */}
      </div>
    );
  }
  export default BottomPanel;