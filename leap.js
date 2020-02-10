//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  let result = year % 4 === 0 ? true : false;
  if(result) {
    if(year % 400 === 0) {
      return true;
    } else if(year % 100 === 0) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
