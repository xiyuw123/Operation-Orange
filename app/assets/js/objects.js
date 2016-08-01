var users = [
    {"firstName":"John", "lastName":"Doe", "userName":"jd123", "password":"stocks123"},
    {"firstName":"Sarah", "lastName":"Doe", "userName":"sd123", "password":"stocks123"}
];
function user(firstName, lastName, userName, password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
}

var user = new user("Bill", "Smith", "bs345", "stocks345");

users.push(user);

