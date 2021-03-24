import 'package:DemoEstate/presentation/theme.dart';
import 'package:flutter/material.dart';
import 'package:flutter/material.dart';

class LoginScreen extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: <Widget>[
          Expanded(
            flex: 2,
              child: Container(
            color: Colors.red,
          )),
          Expanded(
            flex: 3,
              child: Container(
            color: Colors.white,
          )),
          Padding(
            padding: const EdgeInsets.all(25),
            child: Container(
              color: Colors.black,
              height: 20,
            ),
          )
        ],
      ),
    );
  }
}
