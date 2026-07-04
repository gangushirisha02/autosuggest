console.log("hello from js");
const users = [
  {
    "name" :"Shirisha",
    "role" : "Student at BVRITH",
    "image" : "./images/siri2.jpg"
  },
  {
    "name" :"siri",
    "role" : "siri the swag",
    "image" : "./images/siri1.jpg"
  },
]
let curUserId = 0;
function toggle(){
  if(curUserId == 0)
    curUserId=1;
  else
    curUserId=0;
  // image
  document.getElementById("img").src=users[curUserId].image;
  // name
  document.getElementById("card-name").innerText=users[curUserId].name;
  // role
  document.getElementById("card-role").innerText=users[curUserId].role;
}
function getRandomUser()
{
  fetch("https://randomuser.me/api")
    .then(function (data){
      return data.json()
    })
    .then(function (parsedData){
      // console.log(parsedData)
      let gender = parsedData.results[0].gender;

      let first = parsedData.results[0].name.first;
      let last = parsedData.results[0].name.last;
      let name = first  + " " + last;
      let imageUrl = parsedData.results[0].picture.large;

      // gender
      document.getElementById("card-role").innerText=gender;
      // name
      document.getElementById("card-name").innerText=name
      // img
      document.getElementById("img").src=imageUrl

    })
}