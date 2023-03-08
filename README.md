
This repo demos a React Native Navigation bug when React Native new architecture is enabled.

## Building

1. Install dependencies
  ```bash
  yarn
  cd ios
  pod install
  ```
2. Start metro
  ```bash
  cd ..
  yarn start
  ```
3. Build and run iOS app: type "i" in metro terminal

## Bug reproduction

1. Launch iOS app
2. Press "Open first modal"
3. Press "Goto second modal"
4. See that nothing happens on the screen, however `Rendering ModalTwo` is logged to the console

Reported here: https://github.com/react-navigation/react-navigation/issues/11271