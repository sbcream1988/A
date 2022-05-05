console.log("hello")
// console.log(document)
// document=html
console.log(document.body)

let body = document.body

console.log(body===document.body)

console.log(body.children[3])
// children

// console.log(Array.isArray(body.children)) 배열인지 확일할때 결과 타입은 boolean으로

// let h5 = document.getElementsByTagName('h5')[0]
// console.log(h5)

// let lonely = document.getElementById("lonely")
// console.log(lonely)

// let lonely = document.getElementsByClassName("lonely")
// console.log(lonely)

let lonely = document.querySelectorAll("#lonely")
console.log(lonely)

