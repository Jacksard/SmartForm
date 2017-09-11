$(document).ready(function(){
    $(".fill").click(function(){
        console.log('clicked');
        $("#fn, #ln, #age, #email").addClass("alert-primary animated pulse");
    });
   
});

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


