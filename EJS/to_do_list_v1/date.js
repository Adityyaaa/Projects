// jshint esversion:6

exports.getDate =  function () {
    let today = new Date ();

    let currentDay = today.getDay ();

    var day = "";

    let options = {

        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);

}

exports.getDay = function () {
    let today = new Date ();

    let currentDay = today.getDay ();

    var day = "";

    let options = {

        weekday: "long",
    };

    return today.toLocaleDateString("en-US", options);

}

