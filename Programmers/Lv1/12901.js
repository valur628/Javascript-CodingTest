//2016년
function solution(a, b) {
    var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var date = new Date(2016, a - 1, b);
    return days[date.getDay()];
  }
  