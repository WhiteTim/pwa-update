# pwa-update

`pwa-update` is a [web component](https://meowni.ca/posts/web-components-with-otters/) from the [PWABuilder](https://pwabuilder.com) team that brings an awesome "update" experience to your Progressive Web App! It will automatically register your service worker and notify the user of when a new update to your PWA is available. Finally, this component will also let the user of your PWA know when your PWA is ready to be used offline, completing the experience.

Live demo: https://pwa-update.glitch.me

_Built with [lit-element](https://lit-element.polymer-project.org/)_

### What does it look like?

![An image of what the component looks like](assets/update.png?raw=true "pwa-update")

## Supported Browsers
- Edge
- Chrome
- Firefox
- Safari

## Using this component

## Install

There are two ways to use this component. For simple projects or just to get started fast, we recommend using the component by script tag. If your project is using [npm](https://www.npmjs.com/) then we recommend using the npm package.

### Script tag

- Put this bit of code in your index.html

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate"
></script>

<pwa-update></pwa-update>
```

### NPM

- Run `npm install @pwabuilder/pwaupdate`
- import with `import '@pwabuilder/pwaupdate'`

Then you can use the element `<pwa-update></pwa-update>` anywhere in your template, JSX, html etc. An example of using this component can be found here: https://pwa-update.glitch.me

## API

### Properties

| Property             | Attribute            | Description                                                                     | Type      | Default                                             |
| -------------------- | -------------------- | ------------------------------------------------------------------------------- | --------- | --------------------------------------------------- |
| `updatemessage`           | `updatemessage`       | Message that will be show to the user when there is an update                                  | `string` | `An update for this app is available`                                             |
| `updateevent`          | `updateevent`          | name of event sent to service worker to start udpate                        | `string` | `false`                                             |
 `string`  | `forceUpdate`                                     |
| `swpath`          | `swpath`          | The path to the service worker to be registered | `string`  | `pwabuilder-sw.js`                      |
| `showStorageEstimate`          | `showStorageEstimate`          | Show the user how much storage has been used by the PWA | `boolean`  | `false`                      |
| `offlineToastDuration`          | `offlineToastDuration`          | How long the offline toast is displayed | `number (milliseconds)`  | `1300`                      |


### CSS Variables

We recommend using our [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) to easily tweak the style of this component to fit your project. Here are our current
supported CSS variables.

| name                       | Description                                           |
| -------------------------- | ----------------------------------------------------- |
| `--toast-background`       | `Changes the background color of the toast`           |
| `--button-background`      | `Changes the background color of the update button`   |

### Shadow Parts

If you need to style this component more comprehensively, you can use [Shadow Parts](https://dev.to/webpadawan/css-shadow-parts-are-coming-mi5) to style both the update toast and the "ready to use offline" toast. To target these two elements you can use `pwa-install::part(updateToast)` and `pwa-install::part(offlineToast)` respectively. For example, to make the background of the install button grey, I would need this CSS:

```css
pwa-install::part(updateToast) {
  backround: grey;
}
```
