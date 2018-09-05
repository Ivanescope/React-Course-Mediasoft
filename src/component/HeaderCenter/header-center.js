import React, { Component } from 'react';
import './style.css';



class HeaderCenter extends Component {

  render() {
    const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    const months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    let date = new Date();
    const currentDayWeek = date.getDay();
    const currentDayMonth = date.getMonth();
    const currentDay = date.getDate();

    let style =  function (){
      let hour = date.getHours();
      if(5 <= hour && hour < 12){
        return 'header-main morning';
      }else if(12 <= hour && hour < 17){
        return 'header-main noon';
      }else if(17 <= hour && hour < 21){
        return 'header-main evening';
      }
        return 'header-main night';
    }();
    
    return (
      <div className = {style}>
        <div className = 'date-name'>
            <div>{days[currentDayWeek]}</div>
            <div>{months[currentDayMonth]}, {currentDay}</div>          
        </div>          
      </div>      
    )
  }
}

export default HeaderCenter;
