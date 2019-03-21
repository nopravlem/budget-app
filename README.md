# Budget App

Playing around with React Native to build a budget app


## Setup
If you already have react-native set up, then get outta here (onto the next step). Otherwise, welcome! Do these in your terminal:
brew install node
brew install watchman
brew install xcode-select
brew install yarn
yarn add react-native-cli

Facebook does a better job in explaining why you need this: https://facebook.github.io/react-native/docs/getting-started


## The methods to my madness
### My reasoning for the layout
Normally, when I build a practice app, I just whack some things together and hope it works without knowing why. This time, I decided to grow up and actually try to build an application from ground up that can be maintainable. (This was my best attempt at that.) This blog post basically describes why I divided my React app into three folders (components, scenes, and services).
https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1

### Why use yarn instead of npm
