<div style="display:flex; flex-direction:row; align-items:center; gap:1rem;">

<svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2062_488)">
<path d="M28.9427 39.117C28.9427 37.3745 29.78 34.6035 36.2825 34.6035C38.2757 34.6035 39.504 34.748 41.153 35.1178C40.626 41.9433 37.2855 42.8443 34.0385 42.8443C32.262 42.8443 28.9427 41.9178 28.9427 39.117Z" fill="black"/>
<path d="M11.0075 68H56.9925C59.9119 68 62.7117 66.8403 64.776 64.776C66.8403 62.7117 68 59.9119 68 56.9925V11.0075C68 8.08813 66.8403 5.28833 64.776 3.22402C62.7117 1.15972 59.9119 0 56.9925 0L11.0075 0C8.08813 0 5.28833 1.15972 3.22402 3.22402C1.15972 5.28833 0 8.08813 0 11.0075L0 56.9925C0 59.9119 1.15972 62.7117 3.22402 64.776C5.28833 66.8403 8.08813 68 11.0075 68ZM24.9305 25.1175C27.3403 21.675 30.5192 20.332 34.918 20.332C38.0205 20.332 40.6597 21.3775 42.5467 23.3537C44.4295 25.3342 45.5048 28.1648 45.7513 31.7815C46.7939 32.2178 47.7544 32.7321 48.6327 33.3243C52.1687 35.7 54.1152 39.253 54.1152 43.3245C54.1152 51.9818 47.0178 59.5 34.1743 59.5C23.1455 59.5 11.6875 53.0825 11.6875 33.983C11.6875 14.9855 22.7843 8.5 34.1402 8.5C39.3847 8.5 51.6885 9.2735 56.3125 24.5522L51.9775 25.6742C48.399 14.7942 40.8977 13.0602 34.0255 13.0602C22.6567 13.0602 16.2308 19.9793 16.2308 34.7055C16.2308 47.9103 23.4133 54.9228 34.1743 54.9228C43.027 54.9228 49.6273 50.3242 49.6273 43.588C49.6273 39.0022 45.7767 36.8093 45.577 36.8093C44.8247 40.7405 42.8103 47.3577 33.9618 47.3577C28.8065 47.3577 24.3567 43.7962 24.3567 39.1297C24.3567 32.4657 30.6808 30.0518 35.6745 30.0518C37.5445 30.0518 39.797 30.1793 40.9742 30.4173C40.9742 28.3858 39.2573 24.9093 34.9138 24.9093C31.042 24.9093 29.9837 26.1333 28.7512 27.5613L28.6493 27.676C27.7908 27.1023 24.9305 25.1175 24.9305 25.1175Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2062_488">
<rect width="68" height="68" fill="white"/>
</clipPath>
</defs>
</svg>
 <h1>React native threads menu</h1>
</div>
<p>
This is a menu component inspired by the Threads app, built with React Native. It works seamlessly on both Android and iOS, providing smooth and intuitive gesture-driven interactions.
</p>

<video autoplay controls width="600">
  <source src="https://res.cloudinary.com/whil/video/upload/v1738552610/projects/rn_threads_assets/ijwloc0gva6jixdubq3w.mp4" type="video/mp4">
  Tu navegador no soporta la etiqueta de video.
</video>

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
