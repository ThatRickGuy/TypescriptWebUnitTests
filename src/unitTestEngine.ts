export class UnitTestEngine {
    static unitTest(target, key, descriptor) {
        console.log("unitTest(): evaluated");
        //Result|Name|Duration|Output
        var output = "";

        if (descriptor === undefined) {
            descriptor = Object.getOwnPropertyDescriptor(target, key);
        }
        var originalMethod = descriptor.value;

        //editing the descriptor/value parameter
        descriptor.value = function () {
            var start;
            try {
                start = new Date();
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                var a = args.map(function (a) { return JSON.stringify(a); }).join();
                // note usage of originalMethod here
                var result = originalMethod.apply(this, args);
                var r = JSON.stringify(result);
                console.log("Call: " + key + "(" + a + ") => " + r);


                //set output to success
                let cell = (<HTMLTableElement>document.getElementById('error_' + key));
                cell.innerHTML = "Passed!";
                cell = (<HTMLTableElement>document.getElementById('status_' + key));
                cell.innerHTML = "<i class='fa fa-check-circle' style='color: green'></i>";
            }
            catch (e) {
                //set output to error and message
                let cell = (<HTMLTableElement>document.getElementById('error_' + key));
                cell.innerHTML = e;
                cell = (<HTMLTableElement>document.getElementById('status_' + key));
                cell.innerHTML = "<i class='fa fa-times-circle' style='color: red'></i>";
            }
            finally {
                var duration = new Date(new Date().valueOf() - start.valueOf());
                let cell = (<HTMLTableElement>document.getElementById('duration_' + key));
                var seconds = ("00" + duration.getSeconds().toString()).slice(-2);
                var milliseconds = ("000" + duration.getMilliseconds().toString()).slice(-3);
                cell.innerHTML = duration.getMinutes() + ':' + seconds + '.' + milliseconds;
            }
            return result;
        };


        // return edited descriptor as opposed to overwriting the descriptor
        return descriptor;
    }

    static getAllFuncs(obj) {
        var props = [];

        obj = Object.getPrototypeOf(obj)
        props = props.concat(Object.getOwnPropertyNames(obj));

        return props.sort().filter(function (e, i, arr) {
            if (e != arr[i + 1] && obj != null && typeof obj[e] == 'function' && e != 'constructor' && e != 'RunAllTests') return true;
        });
    }
   


} 