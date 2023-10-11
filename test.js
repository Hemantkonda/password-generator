let names = ["hemant", "gotya", "prasad", "nayan", "bocchu"]

// want to capital 1st letter of each name

// for (let i = 0; i < names.length; i++) {
//     const element = names[i].toUpperCase() + names[i].slice(1);
//     console.log(element);
    
// }

const modifiedNames = names.map((item) => {
    const lastIndex = item.length - 1;
    const secondLastIndex = item.length - 2;

    if (lastIndex >= 1) {
        const firstPart = item.slice(0, secondLastIndex);
        const secondPart = item.charAt(secondLastIndex).toUpperCase();
        const thirdPart = item.slice(secondLastIndex + 1);

        return firstPart + secondPart + thirdPart;
    } else {
        // If the string has only one character or is empty, return it as is
        return item;
    }
});

console.log(modifiedNames);


// const capital = names.map((item)=>{
//     return item.charAt(3).toUpperCase() + item
// })

// console.log(capital);