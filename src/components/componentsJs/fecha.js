
const date = new Date();
const [month, day, year]       = [date.getMonth()+1, date.getDate(), date.getFullYear()];
const [hour, minutes, seconds] = [date.getHours()-12, date.getMinutes(), date.getSeconds()];

export const ArrayFecha = []
ArrayFecha.push(month, day, year, hour, minutes, seconds)

export const Day = () =>{
  if(date.getDay() === 1){
      return 'Monday'
  }else if(date.getDay() === 2){
      return 'Tuesday'
  }else if(date.getDay() === 3){
      return 'Wednesday'
  }else if(date.getDay() === 4){
      return 'Thursday'
  }else if(date.getDay() === 5){
      return 'Friday'
  }else if(date.getDay() === 6){
      return 'Saturdy'
  }else if(date.getDay() === 7){
      return 'Sunday'
  }
}
export const Month = () =>{
  if(date.getMonth()+1 === 1){
      return 'January'
  }else if(date.getMonth() + 1 === 2){
      return 'February'
  }else if(date.getMonth() + 1 === 3){
      return 'March'
  }else if(date.getMonth() + 1 === 4){
      return 'April'
  }else if(date.getMonth() + 1 === 5){
      return 'May'
  }else if(date.getMonth() + 1 === 6){
      return 'June'
  }else if(date.getMonth() + 1 === 7){
      return 'July'
  }else if(date.getMonth() + 1 === 8){
      return 'August'
  }else if(date.getMonth() + 1 === 9){
      return 'September'
  }else if(date.getMonth() + 1 === 10){
      return 'Octuber'
  }else if(date.getMonth() + 1 === 11){
      return 'November'
  }else if(date.getMonth() + 1 === 12){
      return 'December'
  }
}
