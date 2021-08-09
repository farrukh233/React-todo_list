import React from "react";
import { ListItem } from "./components/ListItem";
import { TaskField } from "./components/TaskField";

function App() {
  const [tasks, setTasks] = React.useState([
    {
      text: "Изучить ReactJS",
      completed: true,
    },
    {
      text: "Сделать TODO на ReactJS",
      completed: false,
    },
  ]);

  const onToggleCompleted = index => {
    setTasks(prevTask => {
      return prevTask.map((task, curIdx) => {
        if (index === curIdx) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    });
  };

  const onRemoveTask = index => {
    setTasks(prevTask =>
      prevTask.filter((_, curIdx) => {
        if (index !== curIdx) {
          return true;
        }
        return false;
      })
    );
  };

  const onAddTask = text => {
    setTasks(prevTasks => [
      ...prevTasks,
      {
        text,
        completed: false,
      },
    ]);
  };

  return (
    <div className='todo'>
      <div className='todo__header'>
        <h4>Список задач</h4>
      </div>

      <TaskField onAddTask={onAddTask} />

      <div className='todo__list'>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            index={index}
            text={task.text}
            completed={task.completed}
            onToggleCompleted={onToggleCompleted}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
