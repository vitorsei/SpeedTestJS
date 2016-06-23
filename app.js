var newbs = function () {
    var array = [];
    for (var i = 0; i < 1000; i++) {
        array.push("Vitor");
    }
    return array;
}();

var knights = [];
var listsForTests = [newbs, knights];

var noBP = function (listOfParams) {
    for (var i = 0, x = listOfParams[0].length; i < x; i++) {
        //for (var i = 0; i < listOfParams[0].length; i++) {
        // var newGuy = new Knight(listOfParams[0][i], 1);
        // listOfParams[1].push(newGuy);
        listOfParams[1].push(new Knight(listOfParams[0][i], 1));
    }
};

var BPtest = new SpeedTest(noBP, listsForTests, 30);
BPtest.startTest();