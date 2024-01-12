
function timer() {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
            resolve('Promise resolved!');
        // }, 2000);
    });
}

function detectBrowser() {

    let userAgent = navigator.userAgent;
    let browserName;

    if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "Firefox";
    } else if (userAgent.match(/safari/i)) {
        browserName = "Safari";
    } else if (userAgent.match(/opr\//i)) {
        browserName = "Opera";
    } else if (userAgent.match(/edg/i)) {
        browserName = "Edge";
    } else if (userAgent.match(/android/i)) {
        browserName = "Android";
    } else if (userAgent.match(/iphone/i)) {
        browserName = "iPhone";
    } else {
        browserName = "Unknown";
    }

    // Test
    // alert("You are browsing with: " + browserName + "");

    // Async
    // return new Promise((resolve, reject) => {
    //     resolve(browserName);
    // });

    // Sync
    return browserName;
}