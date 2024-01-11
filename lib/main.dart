import 'package:flutter/material.dart';
// import 'dart:html' as html;
// import 'package:web_browser_detect/web_browser_detect.dart';
// import 'package:platform_detect/platform_detect.dart';
import 'dart:js' as js;
import 'dart:html';

void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    home: BrowserDetectionWidget(),
  ));
}

class BrowserDetectionWidget extends StatefulWidget {
  @override
  _BrowserDetectionWidgetState createState() => _BrowserDetectionWidgetState();
}

class _BrowserDetectionWidgetState extends State<BrowserDetectionWidget> {
  String result = '';
  String userAgent = '';

  @override
  void initState() {
    super.initState();

    //setup listener ---------------------------------
    // window.addEventListener("callback", (event) {
    //   // MessageEvent event2 = event;
    //   print(event.toString());
    //   setResult(event.toString());
    // });
    //------------------------------------------------
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Browser Detection 328'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text('Agen:$userAgent'),
          ),
          const Divider(),
          Center(
            child: ElevatedButton(
              onPressed: () {
                // checkBrowser();
                js.context.callMethod("detectBrowser");
              },
              child: const Text('Check Browser'),
            ),
          ),
          const SizedBox(height: 20),
          Text(
            'Current Browser:$result',
            style: const TextStyle(fontSize: 18),
          ),
        ],
      ),
    );
  }

  void checkBrowser() {
    // userAgent = html.window.navigator.userAgent;

    // // Detect Chrome
    // final chromeAgent = userAgent.indexOf("Chrome") > -1;

    // // Detect Safari
    // final safariAgent = userAgent.indexOf("Safari") > -1;

    // final browser = Browser();

    // setResult(browser.isChrome
    //     ? 'Chrome'
    //     : browser.isSafari
    //         ? "Safari"
    //         : 'Unknown');
  }

  void setResult(String message) {
    setState(() {
      result = message;
    });
  }
}
