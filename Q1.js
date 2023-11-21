//Q1: filter user name with the status of the user
//i/p object arr, o/p array of names as per status

let arr = [{
    name: "a",
    status: "online"
  },
  {
    name: "b",
    status: "offline"
  },
  {
    name: "c",
    status: "offline"
  },
  {
    name: "d",
    status: "online"
  },
  {
    name: "e",
    status: "offline"
  },
  {
    name: "f",
    status: "offline"
  }
];


let filterStatus = arr.filter((arrItem) => {
  return arrItem.status == "offline";
}).map((item) => {
  return item.name
});

console.log(filterStatus);