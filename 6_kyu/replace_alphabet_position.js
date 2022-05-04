const replaceAlphabetPosition = (string) => {
  string = string
    .toLowerCase()
    .replace(/[^a-z]/g, ``)
    .split(``)
    .map((ele) => ele.charCodeAt(0) - 96)
    .join(` `);
};

replaceAlphabetPosition(`abz`);
