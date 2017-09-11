$(document).ready(function(){
    $(".fill").click(function(){
        console.log('clicked');
        $("#fn, #ln, #age, #email").addClass("alert-primary animated pulse");
    });
   
});




var myArr = [
    {
        first_name: 'Robert',
        last_name: 'Collen',
        age: 33,
        email: "Jane@gmail.com"
    },
    {
        first_name: 'Jane',
        last_name: 'Smith',
        age: 22,
        email: "JaneSmith@gmail.com"
    },
    {
        first_name: 'Kate',
        last_name: 'Jones',
        age: 33,
        email: "Jones.Kate@gmail.com"
    },
    {
        first_name: 'Shelly',
        last_name: 'Osborn',
        age: 33,
        email: "Shelly123@gmail.com"
    },
    {
        first_name: 'Sam',
        last_name: 'Colts',
        age: 26,
        email: "SamColts@gmail.com"
    },
    {
        first_name: 'Sam',
        last_name: 'Kas',
        age: 26,
        email: "Sam-kas@gmail.com"
    },
    {
        first_name: 'Mike',
        last_name: 'Sims',
        age: 18,
        email: "MikeSims@gmail.com"
    },
    {
        first_name: 'Thomas',
        last_name: 'Roberts',
        age: 41,
        email: "ThomasR@gmail.com"
    }
];

comesback = {};


var myApp = angular.module("myApp", []);
myApp.controller('add', function($scope){

    $scope.fillForm = function(person){
    
    comesback.first_name = person.first_name;
    comesback.last_name = person.last_name;
    comesback.age = person.age;
    comesback.email = person.email;
    console.log(comesback);


};



    $scope.myArrayFunction = function (){
    console.log('I was pushed');

    var newPerson = {};
    newPerson.first_name = $scope.firstname;
    newPerson.last_name = $scope.lastname;
    newPerson.age = $scope.age;
    newPerson.email = $scope.email;
    console.log(newPerson);

    if (newPerson.first_name == undefined || newPerson.last_name == undefined || newPerson.email == undefined || newPerson.age <= 0 || newPerson.age == undefined){
        console.log('Error');
        } else {
        myArr.push(newPerson);
        }
};



$scope.myPerson = comesback;
$scope.collection = myArr;


});


