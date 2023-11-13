let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj=JSON.parse(text);
obj.employees.forEach((element) => {
    console.log(element);
});
// console.log(obj.employees[0].firstName);

