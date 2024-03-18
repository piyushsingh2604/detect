
window.addEventListener('load', function () {
    // var loading = document.querySelector('#loading');
    _flutter.loader.loadEntrypoint({
        entrypointUrl: "/detect/main.dart.js",
        serviceWorker: {
            serviceWorkerVersion: serviceWorkerVersion,
            serviceWorkerUrl: "/detect/flutter_service_worker.js?v=" + serviceWorkerVersion,
        }
    }).then(function (engineInitializer) {
        return engineInitializer.initializeEngine({useColorEmoji: true})
    }).then(function (appRunner) {
        return appRunner.runApp();
    }).then(function (app) {
        // Wait a few milliseconds so users can see the "any" animation
        // before getting rid of the "loading" div.
        window.setTimeout(function () {
            // loading.remove();
        }, 200);
    });
});

// < !-- 👇 Prevent Clickjacking Attacks-- >
if (top != window) {
    top.location = window.location;
}

//
window.addEventListener('popstate', function (event) {
    // Disable the back button on popstate
    history.pushState(null, null, window.location.href);
});

// unused
function navigateTo(route) {
    // Change the route and add to history
    window.location.hash = route;
}

window.onload = function () {
    history.replaceState(null, '', location.href);
    window.onpopstate = function (event) {
    history.replaceState(null, '', location.href);
    };
};

//  < !--Google Tag Manager-- >
// < !--  < script > (function (w, d, s, l, i) {
//         w[l] = w[l] || []; w[l].push({
//             'gtm.start':
//                 new Date().getTime(), event: 'gtm.js'
//         }); var f = d.getElementsByTagName(s)[0],
//             j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
//                 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
//     })(window, document, 'script', 'dataLayer', 'GTM-T4JW3FG');</script > -->
//   < !--End Google Tag Manager-- >

// < !--GTM for web-- >
// < !--< noscript > <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T4JW3FG" height="0" width="0"
//         style="display:none;visibility:hidden"></iframe></noscript > -->
// < !--End Google Tag Manager(noscript)-- >

//   < !--Instana changes shared by Yogesh-- >
// < !--
//   < script >
//     (function (s, t, a, n) {
//         s[t] || (s[t] = a, n = s[a] = function () { n.q.push(arguments) },
//             n.q = [], n.v = 2, n.l = 1 * new Date)
//     })(window, "InstanaEumObject", "ineum");

// ineum('reportingUrl', 'https://instana-nonprod.kotaksecurities.online/');
// ineum('key', '5mzD2EpIRAqGv2yVK-gKTQ');
// ineum('trackSessions');
// </script >
//     <script defer crossorigin="anonymous" src="https://instana-nonprod.kotaksecurities.online/eum.min.js"></script>
// -->