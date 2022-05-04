const anagram = (word, list) => {
  word = word.split(``);
  word.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  word = word.join(``);

  return list.filter((ele) => {
    let potentialAnagram = ele.split(``);
    potentialAnagram.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    potentialAnagram = potentialAnagram.join(``);
    return potentialAnagram === word;
  });
};

const test = anagram("abba", ["aabb", "abcd", "bbaa", "dada"]);

console.log(test);
