class SpeedTest {
    constructor(testImplement, testParams, repetitions = 10) {
        this.testImplement = testImplement;
        this.testParams = testParams;
        this.repetitions = repetitions;
        this.average = 0;
    }

    startTest() {
        var beginTime, endTime, sumTimes = 0;
        for (var i = 0; i < this.repetitions; i++) {
            beginTime = +new Date();
            this.testImplement(this.testParams);
            endTime = +new Date();
            sumTimes += endTime - beginTime;
        }

        this.average = sumTimes / this.repetitions;
        return console.log("Elapsed time: " + this.average);
    }
}