import 'package:detect/animi.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
// import 'dart:html' as html;
// import 'package:web_browser_detect/web_browser_detect.dart';
// import 'package:platform_detect/platform_detect.dart';
// import 'package:flutter_webview_plugin/flutter_webview_plugin.dart';

import 'package:js/js.dart';
import 'package:js/js_util.dart' as js_util;

abstract class AppAssets {
  // aseets for svg icons
  static const String logo = 'assets/svg/diykotak_securities.svg';
  static const String pdfIcon = 'assets/svg/diypdf_icon.svg';
}

// @JS()
// This is the JavaScript function we want to call, use the same name as the JS function.
// external dynamic timer();
external dynamic detectBrowser();

void main() {
  // flutter build web --base-href "/detect/" --release
  // mkdir -p release/docs && cp -a build/web/* release/docs
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    home: BrowserDetectionWidget(),
    // home: StaggeredDotsWave(size: 20, color: Colors.black45,),
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
          SvgPicture.asset(
            AppAssets.logo,
          ),
          const Divider(),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: SvgPicture.asset(
              AppAssets.pdfIcon,
              width: MediaQuery.of(context).size.width * 0.15,
              height: MediaQuery.of(context).size.height * 0.25,
            ),
          ),
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
    final data = detectBrowser();

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
