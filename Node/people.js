//its a recursive function that  node builds auto-matically

// let people = ["sakib", "tamim", "mushfiq"];
// let a = 8;
// function test() {
//   console.log("Node is easy");
// }
//module.exports=people; //return module.exports
// module.exports = {
//   people: people,
//   a: a,
//   test: test ,
// };

const EventEmiiter=require('events');
class School extends EventEmiiter{
    startPeriod(){
        console.log('Class started');

        setTimeout(()=>{
            this.emit('bell',{
                period:'first',
                text:'3rd period is on',

            })
        },2000)
    }
}
module.exports=School;


