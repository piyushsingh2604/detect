// import 'package:detect/animi.dart';
import 'dart:convert';

import 'package:detect/face_test.dart';
import 'package:detect/home.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'dart:html' as html;
// import 'package:web_browser_detect/web_browser_detect.dart';
// import 'package:platform_detect/platform_detect.dart';
// import 'package:flutter_webview_plugin/flutter_webview_plugin.dart';

import 'dart:js' as js;
import 'package:http/http.dart' as http;

// import 'package:js/js.dart' ;
// import 'package:js/js_util.dart' as js_util;

abstract class AppAssets {
  // aseets for svg icons
  static const String logo = 'assets/svg/diykotak_securities.svg';
  static const String pdfIcon = 'assets/svg/diypdf_icon.svg';
}

// This is the JavaScript function we want to call, use the same name as the JS function.
// @JS()
// external dynamic initSelfi();
// external dynamic detectBrowser();

void main() {
  // flutter build web --base-href "/detect/" --release
  // mkdir -p release/docs && cp -a build/web/* release/docs
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    home: BrowserDetectionWidget(),
    // home: HomePage(),
    // home: FaceTest(),
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
  String proImg = '';

   @override
  void initState() {
    // html.window.addEventListener('message', listen, true);
    super.initState();
    handleGetTokenAndSDKInit();

    //setup listener ---------------------------------
      html.window.onMessage.listen((html.MessageEvent event) {
        setState(() {
          final jsonString = event.data.toString().trim(); // Trim the string
          print('Raw JSON string: ${jsonString}'); // Print raw JSON string
          Map<String, dynamic> eventData = jsonDecode(jsonAddQuotes(jsonString));
          if (eventData['is_valid'] == "1") {
            proImg = eventData['croppedImage'];
          }
        });
      });
    //------------------------------------------------
  }

  @override
  void dispose() {
    // html.window.removeEventListener('message', listen, true);
    super.dispose();
  }

  String jsonAddQuotes(String json){
    json = json.replaceAll('{', '{"');
    json = json.replaceAll(': ', '": "');
    json = json.replaceAll(', ', '", "');
    json = json.replaceAll('}', '"}');
    
    json = json.replaceAll('"{', '{');
    json = json.replaceAll('}"', '}');
    print('JSON:$json');
    return json;
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
          SvgPicture.asset(
            AppAssets.logo,
          ),
          const Divider(),
          if (proImg.isNotEmpty)
           SizedBox(height: MediaQuery.of(context).size.height * 0.35,
                    child:Image.network(proImg, fit: BoxFit.none,)),
                  
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
                // checkBrowser();
                // checkSelfie(); //
                // js.context.callMethod('handleGetTokenAndSDKInit');
                js.context.callMethod('initializeAinxtSDK', [token,handleSDKData]);
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

dynamic sdkData;
void handleSDKData(dynamic data) {
  setState(() {
    sdkData = data;
    print('RN SDK Data:${json.encode(sdkData)}');
  });
}

String token = '';
  void handleGetTokenAndSDKInit() {
  
    String apiUrl =
        "https://utexse375h.execute-api.ap-south-1.amazonaws.com/default/get_ainxt_liveliness_token?RefId=308&Redirect_url=https://www.google.com/";

    Map<String, String> headers = {
      "Content-Type": "application/json",
      "x-api-key" : "LaZtThwV4R3jxJuXSY2eb2tboVU9BCNT5ZOvzewe",
      "key": "A1B30AA035D76A08465399672DF5AC44"
    };

    http.post(Uri.parse(apiUrl), headers: headers,).then((res) {
      dynamic data = json.decode(res.body);
      setState(() {
        token = data["Token"];
        // print('Token: $token');
        // js.context.callMethod('handleGetTokenAndSDKInit', []);
        // js.context.callMethod('initializeAinxtSDK', [token,handleSDKData]);

      });

      // Initialize AinxtSDK here with token and handleSDKData function
    }).catchError((error) {
      print("Error fetching token: $error");
    }).whenComplete(() {
    });
  }

  // void checkSelfie() {
  //   // Call the JavaScript function
  //   final data = initSelfi();

  //   print(data);
  //   // setResult(data);
  // }

  // void checkBrowser() {
  //   // Call the JavaScript function
  //   final data = detectBrowser();

  //   print(data);
  //   setResult(data);
  // }

  // Async
  // void checkBrowserAsync() async {
  //   // Call the JavaScript function
  //   final jsPromise = detectBrowser();

  //   // Convert JavaScript Promise to Dart Future
  //   final futureData = js_util.promiseToFuture(jsPromise);

  //   try {
  //     final data = await futureData;
  //     print(data);
  //     setResult(data);
  //   } catch (e) {
  //     print('Error: $e');
  //   }
  // }

  void setResult(String message) {
    setState(() {
      result = message;
    });
  }
}
