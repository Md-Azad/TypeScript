"use strict";
{
    //   spreed operator
    // rest operator
    // destructuring
    // spreed operator
    const bros1 = ["azad", "hosen", "rizwan"];
    const bros2 = ["thufayel", "tusar", "rahin"];
    const bros = [
        ...bros1,
        ...bros2
    ];
    console.log(bros);
    // rest operator
    const getFriends = (...friends) => {
        console.log(friends);
        friends.forEach((friend) => console.log(friend));
    };
    getFriends("azad", "J", "k");
}
