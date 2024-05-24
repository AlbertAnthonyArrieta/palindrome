const init = (word) => {

    // remove symbols, spaces and keep alphaneumeric characters
    word = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    
    // Divide word in to two strings
    let str1 = word.slice(0, word.length/2);
    let str2 = word.slice(word.length/2, word.length);
    
    // Reverse second half
    str2 = str2.split('').reverse().join('');
    
    //Compare reversed half and compare
    for (let i=0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            console.log(`${word} is not a palindrome`);
            return;
        }
    }
    console.log(`${word} is a palindrome`);
}
const str = "Do geese see God?"
init(str);

//"Do geese see God?"

/**
*
* 1. write out in comments everything that you want to do in the function (init)
* 2. work through each step and change it from a comment to code
* 3. test it with different strings in var str before init()
*
*/

