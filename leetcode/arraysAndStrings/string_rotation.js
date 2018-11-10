// O(n) time
// O(n) space

function stringRotation(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }

  const firstLetter = str1[0];

  for(let i = 0; i < str2.length; i++) {
    let currChar = str2[i];

    if(currChar === firstLetter) {
      let reorganizedStr = rotateStr(str2, i);
      if(reorganizedStr === str1) {
        return true;
      }
    }
  }

  return false;
}

// O(1) time
// O(n) space
function rotateStr(str, idx) {
  let endStr = str.slice(0, idx);
  let startStr = str.slice(idx, str.length);

  return startStr.concat(endStr);
}

console.log(stringRotation("waterbottle", "erbottaewat"));
