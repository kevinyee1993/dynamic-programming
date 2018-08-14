function groupAnagrams(strs) {

}


// O(n) space and O(nlog(n)) time
function isAnagram(str1, str2) {
  if(!str1 || !str2 || str1.length !== str2.length) {
    return false;
  }

  let arr1 = str1.split("").sort();
  let arr2 = str2.split("").sort();

  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
