/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const LCStr1=str1.toLowercase();
  const a1=LCStr1.split("");
  a1.sort()
  const ss1=a1.join()
  const LCStr2=str2.toLowercase();
  const a2=LCStr2.split();
  a2.sort();
  const ss2=a2.join();
  if(ss1 == ss2)
  {
    return true;
  }
  else
  {
  return false;
  }
}

module.exports = isAnagram;
