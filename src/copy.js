function copy(text) {
    var textArea = document.createElement("textarea");
    document.body.appendChild(textArea);

    textArea.value = text;
    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);
    window.alert("Successfully copied.\n\nContent:\n" + text);
}

function getTestCases() {
    var testCasesStr = "";
    var testCaseSet = new Set();

    for (var i = 0; ; i += 2) {
        pre = document.getElementById("pre-sample" + i);
        if (pre == undefined) break;
        testCaseSet.add(pre.innerText.trim()); 
    }

    testCaseSet.forEach(testCase => {
        testCasesStr += testCase + "\n\n";
    });

    return testCasesStr;
}

copy(getTestCases());