import 'package:DemoEstate/presentation/splash/splash_screen.dart';
import 'package:flutter/material.dart';
import './presentation/theme.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Estate Demo',
      theme: lightTheme,
      debugShowCheckedModeBanner: false,
      home:SplashScreen(),
    );
  }
}
