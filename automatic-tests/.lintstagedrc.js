const path = require("path");

const getStringOfFilenames = ({
  filenames = [],
  ignoredRelativeFilenames = [".lintstagedrc.js"],
}) => {
  const length = filenames.length;
  let result = [];

  for (let i = 0; i < length; i++) {
    const filename = filenames[i];
    const relativePath = path.relative(process.cwd(), filename);

    if (ignoredRelativeFilenames.includes(relativePath)) {
      continue;
    }

    result.push(relativePath);
  }

  return result.length > 0 ? ` --file ${result.join(" --file ")}` : "";
};

const buildEslintCommand = (filenames) => {
  return `next lint --fix ${getStringOfFilenames({
    filenames,
  })} --max-warnings=0`;
};

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, "prettier --write"],
};
