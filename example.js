const me = {
  name: "Kristian"
}

const newInfo = {
  city: "Austin, Texas"
}

console.log(Object.assign(me, newInfo, { age: 28 }))