const EventEmitter=require('events'); //events create  a class
//The Events module provides a way of working with events.
const School =require('./asset/school');
const emitter= new EventEmitter();

emitter.on('ClassStart',(data)=>{
    console.log(`1st class started ${data}`);
});
//on(event, listener)
//Adds the specified listener

emitter.emit('ClassStart',' we need to run');
//emit(event, [arg1], [arg2], [...])
//Call all the listeners registered with the specified name

const school= new School();

school.on('Enter',({period,teacher})=>{
    console.log(`${period} class started by ${teacher}`);
});

school.startPeriod();