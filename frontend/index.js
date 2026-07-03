console.log("hello from js");
const users = [
  {
    "name" :"Shirisha",
    "role" : "Student at BVRITH",
    "image" : "./images/siri.jpg"
  },
  {
    "name" :"siri",
    "role" : "siri the swag",
    "image" : "./images/siri1.png"
  },
]
let curUserId = 0;
function toggle(){
  if(curUserId == 0)
    curUserId=1;
  else
    curUserId=0;
  // image
  document.getElementById("card-img").src=users[curUserId].image;
  // name
  document.getElementById("card-name").innerText=users[curUserId].name;
  // role
  document.getElementById("card-role").innerText=users[curUserId].role;
}