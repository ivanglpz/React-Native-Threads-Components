![Texto alternativo](https://res.cloudinary.com/whil/image/upload/v1738554533/projects/rn_threads_assets/bi_threads-fill_fswbmb.png)

# React Native Threads Components

This repository contains React Native components replicating the UI of the Threads app. It serves as a resource for developers looking to implement Threads-like designs in their React Native projects. The components are designed for reusability and compatibility with both Expo

![Watch the video](https://res.cloudinary.com/whil/image/upload/v1738554163/projects/rn_threads_assets/kk-ezgif.com-video-to-gif-converter_x4myvo.gif)

<h2>Features</h2>

<ul>
    <li>Built with TypeScript for strong typing and better development experience</li>
    <li>Gesture-based animations powered by react-native-gesture-handler and react-native-reanimated.</li>
    <li>Fully compatible with Expo, making integration straightforward.</li>
    <li>Smooth and responsive UI, closely mimicking the menu behavior in the Threads app.</li>
</ul>

<h3>Technologies Used</h3>

<ul>
    <li>React Native</li>
    <li>TypeScript</li>
    <li>react-native-gesture-handler</li>
    <li>react-native-reanimated</li>
    <li>Expo</li>
</ul>

<h4>Usage</h4>
<p>You can use it as a list of items. </p>

```tsx
<Menu
  isOpen={showMenu}
  onClose={() => {
    setshowMenu(false);
  }}
  options={[
    {
      label: "Close",
      onPress: () => {
        setshowMenu(false);
      },
      icon: "close",
    },
  ]}
/>
```

<p>You can use it as a multi list of items. </p>

```tsx
<Menu
  isOpen={showMenu}
  onClose={() => {
    setshowMenu(false);
  }}
  options={[
    [
      {
        label: "Close",
        onPress: () => {
          setshowMenu(false);
        },
        icon: "close",
      },
    ],
    [
      {
        label: "Close",
        onPress: () => {
          setshowMenu(false);
        },
        icon: "close",
      },
    ],
  ]}
/>
```
