import 'package:flutter/material.dart';
// import 'dart:html' as html;
// import 'package:web_browser_detect/web_browser_detect.dart';
// import 'package:platform_detect/platform_detect.dart';
// import 'package:flutter_webview_plugin/flutter_webview_plugin.dart';

import 'package:js/js.dart';
import 'package:js/js_util.dart' as js_util;

@JS()
// This is the JavaScript function we want to call, use the same name as the JS function.
// external dynamic timer();
external dynamic detectBrowser();

void main() {
  // flutter build web --base-href "/detect/" --release
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
                checkBrowser();
                // js.context.callMethod("detectBrowser");
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
    // Call the JavaScript function
    final jsPromise = detectBrowser();

    final data = jsPromise; 
    print(data);
    setResult(data);
  }

  // Async
  void checkBrowserAsync() async {
    // Call the JavaScript function
    final jsPromise = detectBrowser();

    // Convert JavaScript Promise to Dart Future
    final futureData = js_util.promiseToFuture(jsPromise);

    try {
      final data = await futureData;
      print(data);
      setResult(data);
    } catch (e) {
      print('Error: $e');
    }
  }

  void setResult(String message) {
    setState(() {
      result = message;
    });
  }
}
