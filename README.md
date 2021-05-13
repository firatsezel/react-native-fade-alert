
# react-native-fade-alert

## Getting started

`$ npm install react-native-fade-alert --save`

### Mostly automatic installation

`$ react-native link react-native-fade-alert`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-fade-alert` and add `RNFadeAlert.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNFadeAlert.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNFadeAlertPackage;` to the imports at the top of the file
  - Add `new RNFadeAlertPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-fade-alert'
  	project(':react-native-fade-alert').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-fade-alert/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-fade-alert')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNFadeAlert.sln` in `node_modules/react-native-fade-alert/windows/RNFadeAlert.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Fade.Alert.RNFadeAlert;` to the usings at the top of the file
  - Add `new RNFadeAlertPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNFadeAlert from 'react-native-fade-alert';

// TODO: What to do with the module?
RNFadeAlert;
```
  