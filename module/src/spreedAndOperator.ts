{
//   spreed operator
// rest operator
// destructuring

// spreed operator

const bros1: string[] = ["azad", "hosen", "rizwan"]
const bros2: string[] = ["thufayel", "tusar", "rahin"]



const bros:string[] = [
    ...bros1,
    ...bros2
]
console.log(bros);
// rest operator

const getFriends = (...friends:string[])=>{
    console.log(friends);
    friends.forEach((friend:string)=>console.log(friend))
}
getFriends("azad","J", "k")



}




