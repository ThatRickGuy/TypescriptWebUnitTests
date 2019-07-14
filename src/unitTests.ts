import { Asserts } from "./Asserts";
import { UnitTestEngine } from "./UnitTestEngine";


export class testWrapper {
    constructor() {
        var y = UnitTestEngine.getAllFuncs(this);
        for (var i in y) {
            //Result|Name|Duration|Output
            var output = '<tr id="tr' + y[i] + '"><td id="status_' + y[i] + '"><i class="fa fa-bullseye" style="color: grey;"></i></td> <td>' + y[i] + '</td><td id="duration_' + y[i] + '">--:--.---</td><td id="error_' + y[i] + '"></td></tr>';
            let row = (<HTMLTableElement>document.getElementById('unitTests')).insertRow(1);
            row.innerHTML = output;
        }
    }

    RunAllTests() {
        var y = UnitTestEngine.getAllFuncs(this);
        for (var i in y) {
            var testName = y[i];
            this[testName]();
        }
    }


    @UnitTestEngine.unitTest
    method1() {
        var testValue = Math.random();
        Asserts.AssertGreaterThan(.6, testValue, "Test value expected to be > .5, was " + testValue);
        return true;
    }


    @UnitTestEngine.unitTest
    method2() {
        var testValue = Math.random();
        Asserts.AssertLessThan(.6, testValue, "Test value expected to be < .5, was " + testValue);
        return true;
    }
}  






