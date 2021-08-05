import "./App.css";
import React, { useState, useEffect } from "react";
import TasksDiv from "./components/Tasks";
import String from "./components/String";
import BottomPanel from "./components/Bottom";
import { v4 as uuidv4 } from 'uuid';
import { randomColor } from 'randomcolor';
import Draggable from 'react-draggable';


function App() {
  const [itemTask, setItemTask] = useState('');
  //добавление значение из инпута в объект
  const [items, setItems] = useState(

    JSON.parse(localStorage.getItem('items')) || []
    //добавление объекта в массив
  )

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  const [filteredItems, setFilteredItems] = useState([...items]);


  const addArrElement = () => {
    if (itemTask.trim() !== "") {
      const newItem = {
        id: uuidv4(),
        value: itemTask,
        isComplete: false,
        color: randomColor({
          luminosity: 'light'
        }),
      }
      setFilteredItems([...filteredItems, newItem]);
      setItems((items) => [...items, newItem])
      setItemTask('')
    } else {
      alert("Error")
      setItemTask('')
    }
  }

  const handleChange = (event) => {
    setItemTask(event.target.value);
  };

  const deleteItem = (id) => {
    const allTask = items.filter((e) => id !== e.id);
    setItems(allTask);
    setFilteredItems(allTask);
  };

  const changeComplete = (id, event) => {
    const allTask = items.map((e) => {
      if (id === e.id) {
        return { ...e, isComplete: !e.isComplete };
      } else {
        return e;
      }
    });
    setItems(allTask);
    setFilteredItems(allTask);
  };

const filter = () => {
  const page = localStorage.getItem('items');

  if (page === 'all') return
  if (page === 'Active') changeComplete('.true')
  changeComplete('.false')
}

  const finishedTasks = () => {
    const filteredTasks = items.filter((e) => e.isComplete === true);
    setFilteredItems(filteredTasks);
  };

  const noFinishedTasks = () => {
    const filteredTasks = items.filter((e) => e.isComplete === false);
    setFilteredItems(filteredTasks);
  };

  const allTasks = () => {
    const filteredTasks = items;
    setFilteredItems(filteredTasks);
  };

  const ClearAllTasks = () => {
    setItems([]);
    setFilteredItems([]);
  };

  const clearFinishedTasks = () => {
    const filteredTasks = items.filter((e) => e.isComplete === false);
    setFilteredItems(filteredTasks);
    setItems(filteredTasks);
  };

  // const allFinishedTasks = () => {
  //   const allTask = items.map((e) => {
  //     return { ...e, isComplete: true };
  //   });
  //   setFilteredItems(allTask);
  //   setItems(allTask);
  // };


  const updatePos = (data, index) => {
    let newArray = [...items]
    newArray[index].defaultPos = { x: data.x, y: data.y }
    setItems(newArray)
  }

  const changeValue = (item) => {
    const allTask = items.map((e) => {
      if (item.id === e.id) {
        return { ...e, value: item.value };
      } else {
        return e;
      }
    });
    setItems(allTask);
    setFilteredItems(allTask);
  };

  // const keyPress = (newItem, e) => {
  //   const code = e.keyCode || e.which
  //   if (code === 13) {
  //     newItem()
  //   }
  // }

  return (
    <div className="content">
      <h1>
        <span>T</span><span>O</span><span>D</span><span>O</span>
      </h1>
      <div className="bottom-panel">
        <BottomPanel
          finishedTasks={finishedTasks}
          noFinishedTasks={noFinishedTasks}
          ClearAllTasks={ClearAllTasks}
          allTasks={allTasks}
          clearFinishedTasks={clearFinishedTasks}
          // allFinishedTasks={allFinishedTasks}
        />
      </div>
      <div className="header">
        <String
          value={itemTask}
          handleChange={handleChange}
          addArrElement={addArrElement}
          itemTask={itemTask}
          // onKeyPress={keyPress}
          // onKeyPress={(newItem, e) => keyPress(newItem, e)}
        />
         {/* <button className="enter"
          onClick={keyPress}
        ></button> */}
      </div>

      <div className="task-divs">
        {filteredItems.map((item, index) => (
          <Draggable
            key={index}
            defaultPosition={item.defaultPos}
            onStop={(_, data) => {
              updatePos(data, index)
            }}
          >
            <div className="todo__item" style={{ backgroundColor: item.color }}>
              <TasksDiv
                item={item}
                key={item.id}
                deleteItem={deleteItem}
                filter={filter}
                changeComplete={changeComplete}
                changeValue={changeValue}
                finishedTasks={finishedTasks}
              />
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
}

export default App;