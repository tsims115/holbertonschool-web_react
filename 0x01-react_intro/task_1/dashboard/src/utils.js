exports.getFullYear = function() {
  return new Date().getFullYear();
};

exports.getFooterCopy = function(isIndex) {
  if (isIndex) {
    return "Holberton School"
  } else {
    return "Holberton School main dashboard"
  }
};
