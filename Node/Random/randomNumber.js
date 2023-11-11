const math={};
//scafholding

math.getRandomNumber=function getRandomNumber(min,max){
    
 return Math.floor(Math.random()*(max-min +1)+min) ;
};

module.exports = math;