import React from "react";

export const ListItem = ({
  text,
  completed,
  index,
  onToggleCompleted,
  onRemoveTask,
}) => {
  const toggleCompleted = () => {
    onToggleCompleted(index);
  };

  const removeTask = () => {
    if (global.confirm("Удалить?")) {
      onRemoveTask(index);
    }
  };

  return (
    <div
      className={`todo__list-item ${
        completed ? `todo__list-item--completed` : ""
      }`}>
      <div onClick={toggleCompleted} className='todo__list-item-check'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M8.99999 16.2L4.79999 12L3.39999 13.4L8.99999 19L21 7L19.6 5.6L8.99999 16.2Z'
            fill='white'
          />
        </svg>
      </div>
      <p>{text}</p>
      <div onClick={removeTask} className='todo__list-item-remove'>
        <svg
          width='34'
          height='30'
          viewBox='0 0 34 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M26.9167 5H21.9583L20.5417 3.75H13.4583L12.0417 5H7.08333V7.5H26.9167V5ZM8.5 8.75V23.75C8.5 25.125 9.775 26.25 11.3333 26.25H22.6667C24.225 26.25 25.5 25.125 25.5 23.75V8.75H8.5ZM19.8333 17.5V22.5H14.1667V17.5H11.3333L17 12.5L22.6667 17.5H19.8333Z'
            fill='#C5BCBC'
          />
        </svg>
      </div>
    </div>
  );
};
