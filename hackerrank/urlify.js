//solution 1
//time: O(n) because slice and replace each are O(n)
//space: O(n) because have to create a new substring and new array to hold all the split chars

const URLify = (str, length) => {
  let substring = str.slice(0, length);

  //replace just replaces the first instance of the designated character
  // substring = substring.replace(" ", "%20");
  let allChars = substring.split("");

  for(let i = 0; i < allChars.length; i++) {
    if(allChars[i] === " ") {
      allChars[i] = "%20";
    }
  }

  return allChars.join("");
};

console.log(URLify("Mr John Smith     ", 13));
