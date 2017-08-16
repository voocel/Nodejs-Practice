const exec = require("child_process").exec;
function start() {
    console.log("Request handler 'start' was called.");

    // function sleep(milliSeconds) {
    // var startTime = new Date().getTime();
    // while (new Date().getTime() < startTime + milliSeconds);
    // };
    // sleep(5000); //模拟阻塞操作
    
    var content = 'empty';
    exec("cmd.exe", function (error, stdout, stderr) {
        content = stdout;
    });
    //return "Hello Start"; 
    return content;
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;