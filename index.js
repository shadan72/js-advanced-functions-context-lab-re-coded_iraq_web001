/* Your Code Here */
const createEmployeeRecord=(arr)=>{
  return {firstName:arr[0], familyName:arr[1], title:arr[2], payPerHour:arr[3],timeInEvents:[], timeOutEvents:[] }
}
const createEmployeeRecords=(arr)=>{
  
  return  arr.map(emp =>createEmployeeRecord(emp) );
   return newArr;
};

const createTimeInEvent=(dateIn)=>{
const TimeDate=dateIn.split(" ")
 this.timeInEvents.push({type:"TimeIn" , date:TimeDate[0], hour:parseInt(TimeDate[1],10)})
  return this
}

const createTimeOutEvent=(dateOut)=>{
const TimeDate=dateOut.split(" ")
this.timeOutEvents.push({type:"TimeOut" , date:TimeDate[0], hour:parseInt(TimeDate[1])})
return this
  
}

const hoursWorkedOnDate=(date)=>{
  
  const timeIn=this.timeInEvents.find(ele => ele.date === date)
  const timeOut=this.timeOutEvents.find(ele => ele.date === date)
   let result=(timeOut.hour - timeIn.hour)/100
   return result
  }
  const wagesEarnedOnDate=(date)=>{
  return hoursWorkedOnDate.call(this,date)* this.payPerHour
}
const findEmployeeByFirstName=(srcArray,firstName)=>{
  
  return srcArray.find(ele => ele.firstName === firstName)
}
const calculatePayroll=(arr)=>{
  return arr.reduce((acc, curr)=>{
    return acc + allWagesFor(curr)
  },0)
  
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}