import 'dart:convert';
import 'dart:html' as html; // Add this import

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class FaceTest extends StatefulWidget {
  @override
  _FaceTestState createState() => _FaceTestState();
}

class _FaceTestState extends State<FaceTest> {
  String token = "";
  dynamic sdkData;
  bool loading = false;

  void handleSDKData(dynamic data) {
    setState(() {
      sdkData = data;
      print('RN SDK Data:${json.encode(sdkData)}');
    });
  }

  void handleGetTokenAndSDKInit() {
    setState(() {
      loading = true;
    });

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
        print('Token: $token');
      });

      // Initialize AinxtSDK here with token and handleSDKData function
    }).catchError((error) {
      print("Error fetching token: $error");
    }).whenComplete(() {
      setState(() {
        loading = false;
      });
    });
  }

  @override
  void initState() {
    super.initState();
    handleGetTokenAndSDKInit();
    // loadAinxtSDKScript();
  }

  void loadAinxtSDKScript() {
    final script = html.ScriptElement()
      ..src = "https://d2ex1ser8dn35u.cloudfront.net/TestingSdk.js"
      ..async = true;

    html.document.head?.append(script);

    script.onLoad.listen((_) {
      print("AinxtSDK script loaded successfully.");
    });

    // html.AinxtSDK.Initialize(token, handleSDKData);

    script.onError.listen((_) {
      print("Failed to load AinxtSDK script.");
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Face Liveliness'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: loadAinxtSDKScript,
              child: Text(loading ? "Loading..." : "Get Token & Initialize AinxtSDK"),
            ),
            if (sdkData != null) ...[
              SizedBox(height: 20),
              Text(
                'Data from SDK:',
                style: TextStyle(fontSize: 20),
              ),
              SizedBox(height: 10),
              Text(
                json.encode(sdkData),
                style: TextStyle(fontSize: 16),
              ),
            ],
          ],
        ),
      ),
    );
  }
}

