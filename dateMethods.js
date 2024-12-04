// add a getWeek method to JavaScript's Date object
Date.prototype.getWeek = function () {
  let date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  let week1 = new Date(date.getFullYear(), 0, 4);
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
    - 3 + (week1.getDay() + 6) % 7) / 7);
};

// add a getNextDate method to JavaScript's Date object
Date.prototype.getNextDate = function () {
  var date = new Date(this.getTime() + 24 * 60 * 60 * 1000);
  date.setHours(12, 0);
  return date;
}

// add a getPreviousDate method to JavaScript's Date object
Date.prototype.getPreviousDate = function () {
  var date = new Date(this.getTime() - 24 * 60 * 60 * 1000);
  date.setHours(12, 0);
  return date;
}