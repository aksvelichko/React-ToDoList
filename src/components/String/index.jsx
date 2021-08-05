function String(props) {
    return (
      <div className="header">
        <input 
        className="input" 
        placeholder="Enter..."
        type="text" 
        onChange={props.handleChange} 
        value={props.itemTask} 
        />
        <button 
        className="buttonAdd" 
        onClick={props.addArrElement}
        >add
        </button>
      </div>
    );
  }
  export default String;