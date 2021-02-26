function formatTime(time) {
  if (typeof time !== "number" || time < 0) {
    return time;
  }

  var hour = parseInt(time / 3600);
  time = time % 3600;
  var minute = parseInt(time / 60);
  time = time % 60;
  var second = time;

  return [hour, minute, second]
    .map(function (n) {
      n = n.toString();
      return n[1] ? n : "0" + n;
    })
    .join(":");
}

function formatLocation(longitude, latitude) {
  if (typeof longitude === "string" && typeof latitude === "string") {
    longitude = parseFloat(longitude);
    latitude = parseFloat(latitude);
  }

  longitude = longitude.toFixed(2);
  latitude = latitude.toFixed(2);

  return {
    longitude: longitude.toString().split("."),
    latitude: latitude.toString().split("."),
  };
}
function formatLocalTime(valueTime) {
  if (valueTime) {
    // @ts-ignore
    valueTime = parseInt(valueTime);
    // @ts-ignore
    const newData = Date.parse(new Date());

    const diffTime = Math.abs(newData - valueTime);
    if (diffTime >= 24 * 3600 * 1000) {
      const date = new Date(parseInt(valueTime));
      const y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let minute = date.getMinutes();
      let second = date.getSeconds();
      minute = minute < 10 ? "1" + minute : minute;
      second = second < 10 ? "0" + second : second;
      return m + "-" + d + " " + h + ":" + minute;
    } else if (diffTime < 24 * 3600 * 1000 && diffTime >= 3600 * 1000) {
      // //注释("一天之内");
      // var time = newData - diffTime;
      const dayNum = Math.floor(diffTime / (60 * 60 * 1000));
      return dayNum + "小时前";
    } else if (diffTime < 3600 * 1000 && diffTime >= 60 * 1000) {
      // //注释("一小时之内");
      // var time = newData - diffTime;
      const dayNum = Math.floor(diffTime / (60 * 1000));
      return dayNum + "分钟前";
    } else if (diffTime < 60 * 1000 && diffTime >= 0) {
      return "刚刚";
    }
  }
}
var dateUtils = {
  UNITS: {
    年: 31557600000,
    月: 2629800000,
    天: 86400000,
    小时: 3600000,
    分钟: 60000,
    秒: 1000,
  },
  humanize: function (milliseconds) {
    var humanize = "";
    for (var key in this.UNITS) {
      if (milliseconds >= this.UNITS[key]) {
        humanize = Math.floor(milliseconds / this.UNITS[key]) + key + "前";
        break;
      }
    }
    return humanize || "刚刚";
  },
  format: function (dateStr) {
    var date = this.parse(dateStr);
    var diff = Date.now() - date.getTime();
    if (diff < this.UNITS["天"]) {
      return this.humanize(diff);
    }
    var _format = function (number) {
      return number < 10 ? "0" + number : number;
    };
    return (
      date.getFullYear() +
      "/" +
      _format(date.getMonth() + 1) +
      "/" +
      _format(date.getDate()) +
      "-" +
      _format(date.getHours()) +
      ":" +
      _format(date.getMinutes())
    );
  },
  parse: function (str) {
    //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
    var a = str.split(/[^0-9]/);
    return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
  },
};

function strJoin(...arr) {
  return arr.reduce((data, item) => data + item);
}
module.exports = {
  formatLocalTime: formatLocalTime,
  strJoin: strJoin,
  formatTime: formatTime,
  formatLocation: formatLocation,
  dateUtils: dateUtils,
};
