function longestSubstringWithoutDuplicates(str) {
  const lastSeen = {};
  // it's cheaper to just store the indices of the longest string seen so far
  // instead of the whole string
  let longest = [0, 1];
  let startIdx = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (lastSeen[char] !== undefined) {
      startIdx = Math.max(startIdx, lastSeen[char] + 1);
    }
    if (longest[1] - longest[0] < i + 1 - startIdx) {
      longest = [startIdx, i + 1];
    }
    lastSeen[char] = i;
  }
  return str.slice(longest[0], longest[1]);

}
