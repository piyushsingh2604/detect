import 'dart:html' as html;

import 'package:flutter/material.dart';

// ignore: avoid_web_libraries_in_flutter

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  String? message;

  @override
  void initState() {
    html.window.addEventListener('message', listen, true);
    super.initState();
  }

  @override
  void dispose() {
    html.window.removeEventListener('message', listen, true);
    super.dispose();
  }

  void listen(html.Event event) {
    var data = (event as html.MessageEvent).data;
    setState(() {
      message = data['message'];
      print(data['message']);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('iFrame Test'),
      ),
      body: Center(
        child: SingleChildScrollView(child: Text(message ?? 'No messages yet')),
      ),
    );
  }
}