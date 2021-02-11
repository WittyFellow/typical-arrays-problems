
exports.min = function min(array) {
  if (array != undefined && array.length > 1) {
    return array.sort((a, b) => a - b)[0];
  } else {
    return 0;
  }
};

exports.max = function max(array) {
  if (array != undefined && array.length > 1) {
    return array.sort((a, b) => a - b)[array.length - 1];
  } else {
    return 0;
  }
};

exports.avg = function avg(array) {
  if (array != undefined && array.length > 1) {
    return array.reduce((acc, i) => acc + i) / array.length;
  } else {
    return 0;
  }
};
