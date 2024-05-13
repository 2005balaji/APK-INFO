# Android Development Research

This repository contains information and resources related to Android Development with Android Studio and Google.

## Decompilation
Decompilation is the process of reverse-engineering an Android application package (APK) to extract its source code. The following programming languages can be used to build an APK:

- Java
- Kotlin
- C++ (Android Native Development Kit, should be integrated with Java)
- Python (using Kivy framework)
- React Native (Android and iOS)

The Android code is packed into `.dex` files. Dex stands for Dalvik Executable, and a Dex file contains code that is ultimately executed by the Android Runtime.

## Tools
The following tools are required for reverse engineering an APK:

- APKTOOL - For reverse engineering Android APK files
- Dex2Jar - Tool to work with android `.dex` and ajava `.class` files
- JD-GUI - Java Decompiler is a tool to decompile and analyze Java “byte code”

## Accessing Dependencies / Libraries
The following ways can be used to access dependencies and libraries in an Android project:

- Gradle build files
- Library documentation
- `AndroidManifest.xml`
- `CMakeLists.txt`
- Code references

## Popular Libraries
The following is a list of popular libraries used in Android development:

- Android Support Library
- Retrofit
- OkHttp
- Glide
- Butter Knife
- Room
- Dagger
- RxJava
- Firebase
- Picasso
- Gson
- Material Design
- Android Architecture Components
- Constraint Layout
- Timber
- Google Maps
- Fabric
- LeakCanary
- Stetho
- ZXing (Barcode Scanner Library)

## `build.gradle` and `AndroidManifest.xml`
`build.gradle` and `AndroidManifest.xml` are two different configuration files in Android app development. The main differences between them are:

- Purpose - `build.gradle` is used for project-level build configuration, while `AndroidManifest.xml` is used for app-level configuration.
- Content - `build.gradle` contains information about the build environment, while `AndroidManifest.xml` contains information about the app itself.
- Build Process - `build.gradle` is processed by Gradle during the build process, while `AndroidManifest.xml` is processed by the Android system when the app is installed and launched.
