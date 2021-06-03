const workercode = () => {

    self.onmessage = function (e) {
        self.postMessage({msg:'worker数据'})
        console.log('=====worker进程接收数据 ====',e.data)
    }
};



let code = workercode.toString();
//"() => {\n  self.onmessage = function (e) {\n     console.log('Message received from main script');\n    var workerResult = 'Received from main: ' + e.data;\n    console.log('Posting message back to main script');\n    self.postMessage(workerResult);\n  };\n}"
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));
// "\n  self.onmessage = function (e) {\n      console.log('Message received from main script');\n    var workerResult = 'Received from main: ' + e.data;\n    console.log('Posting message back to main script');\n    self.postMessage(workerResult);\n  };\n"

const blob = new Blob([code], { type: "application/javascript" });
const workerScript = URL.createObjectURL(blob);

// module.exports = workerScript
export default workerScript;