function setName(cookieName,cookieValue,expiredys){
    const d=new Date();
    d.setTime(d.getTime()+expiredys*24*3600*1000);
    let expires='expires '+d.toUTCString();
    document.cookie=cookieName+ '=' +cookieValue +expiredys+";path=/";
}

function getName(cookieName){
console.log(document.cookie);
}