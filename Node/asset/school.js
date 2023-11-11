const EventEmitter=require('events');

class School extends EventEmitter{
    startPeriod(){
        console.log("class started");

        setTimeout(()=>{
            this.emit('Enter',{
                period:'1st',
                teacher:'shamim ahmed'

            });
        },2000);
    }
}
module.exports=School;