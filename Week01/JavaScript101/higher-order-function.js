const names = ["Jeffrey", "Marisa", "Sadaf", "Hamish", "Dylan", "Dayne"]

console.log(names)

let shortnames = names.filter(name => name.length < 6)

console.log(shortnames)


///////////////////////////////////////////////////////////////////


let names2 = names.map(name => `${name} are in COMP.7214`)

console.log(names2)

