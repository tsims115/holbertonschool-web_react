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

exports.getLatestNotification = () => {
  return "<strong>Urgent requirement</strong> - complete by EOD"
}
