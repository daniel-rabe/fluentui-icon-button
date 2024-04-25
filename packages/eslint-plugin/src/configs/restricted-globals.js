// These will be enabled in a follow up PR.
// https://github.com/microsoft/fluentui/issues/29964

// Via: https://developer.mozilla.org/en-US/docs/Web/API/Window
// const windowKeys = [
//   // Instance properties
//   'caches',
//   'clientInformation',
//   'closed',
//   'console',
//   'credentialless',
//   'crypto',
//   'customElements',
//   'devicePixelRatio',
//   'frameElement',
//   'frames',
//   'fullScreen',
//   'history',
//   'indexedDB',
//   'innerHeight',
//   'innerWidth',
//   'isSecureContext',
//   'launchQueue',
//   'length',
//   'localStorage',
//   'location',
//   'locationbar',
//   'menubar',
//   'name',
//   'navigation',
//   'navigator',
//   'opener',
//   'origin',
//   'outerHeight',
//   'outerWidth',
//   'pageXOffset',
//   'pageYOffset',
//   'parent',
//   'performance',
//   'personalbar',
//   'scheduler',
//   'screen',
//   'screenX',
//   'screenY',
//   'scrollbars',
//   'scrollX',
//   'scrollY',
//   'self',
//   'sessionStorage',
//   'speechSynthesis',
//   'statusbar',
//   'toolbar',
//   'top',
//   'visualViewport',
//   'window',

//   // Deprecated properties
//   'defaultStatus',
//   'event',
//   'external',
//   'orientation',
//   'returnValue',
//   'sidebar',
//   'status',

//   // Instance methods
//   'addEventListener',
//   'alert',
//   'atob',
//   'blur',
//   'btoa',
//   'cancelAnimationFrame',
//   'cancelIdleCallback',
//   'clearImmediate',
//   'clearInterval',
//   'clearTimeout',
//   'close',
//   'confirm',
//   'createImageBitmap',
//   'dispatchEvent',
//   'dump',
//   'fetch',
//   'find',
//   'focus',
//   'getComputedStyle',
//   'getSelection',
//   'matchMedia',
//   'moveBy',
//   'moveTo',
//   'open',
//   'postMessage',
//   'print',
//   'prompt',
//   'queryLocalFonts',
//   'removeEventListener',
//   'reportError',
//   'requestAnimationFrame',
//   'requestIdleCallback',
//   'resizeBy',
//   'resizeTo',
//   'scroll',
//   'scrollBy',
//   'scrollTo',
//   'setImmediate',
//   'setInterval',
//   'setTimeout',
//   'showDirectoryPicker',
//   'showOpenFilePicker',
//   'showSaveFilePicker',
//   'stop',
//   'updateCommands',

//   // Deprecated methods
//   'back',
//   'captureEvents',
//   'forward',
//   'releaseEvents',
//   'showModalDialog',

//   // Events
//   'onabort',
//   'onafterprint',
//   'onanimationend',
//   'onanimationiteration',
//   'onanimationstart',
//   'onappinstalled',
//   'onauxclick',
//   'onbeforeinput',
//   'onbeforeinstallprompt',
//   'onbeforematch',
//   'onbeforeprint',
//   'onbeforetoggle',
//   'onbeforeunload',
//   'onbeforexrselect',
//   'onblur',
//   'oncancel',
//   'oncanplay',
//   'oncanplaythrough',
//   'onchange',
//   'onclick',
//   'onclose',
//   'oncontentvisibilityautostatechange',
//   'oncontextlost',
//   'oncontextmenu',
//   'oncontextrestored',
//   'oncuechange',
//   'ondblclick',
//   'ondevicemotion',
//   'ondeviceorientation',
//   'ondeviceorientationabsolute',
//   'ondrag',
//   'ondragend',
//   'ondragenter',
//   'ondragleave',
//   'ondragover',
//   'ondragstart',
//   'ondrop',
//   'ondurationchange',
//   'onemptied',
//   'onended',
//   'onerror',
//   'onfocus',
//   'onformdata',
//   'ongotpointercapture',
//   'onhashchange',
//   'oninput',
//   'oninvalid',
//   'onkeydown',
//   'onkeypress',
//   'onkeyup',
//   'onlanguagechange',
//   'onload',
//   'onloadeddata',
//   'onloadedmetadata',
//   'onloadstart',
//   'onlostpointercapture',
//   'onmessage',
//   'onmessageerror',
//   'onmousedown',
//   'onmouseenter',
//   'onmouseleave',
//   'onmousemove',
//   'onmouseout',
//   'onmouseover',
//   'onmouseup',
//   'onmousewheel',
//   'onoffline',
//   'ononline',
//   'onoverscroll',
//   'onpagehide',
//   'onpageshow',
//   'onpause',
//   'onplay',
//   'onplaying',
//   'onpointercancel',
//   'onpointerdown',
//   'onpointerenter',
//   'onpointerleave',
//   'onpointermove',
//   'onpointerout',
//   'onpointerover',
//   'onpointerrawupdate',
//   'onpointerup',
//   'onpopstate',
//   'onprogress',
//   'onratechange',
//   'onrejectionhandled',
//   'onreset',
//   'onresize',
//   'onscroll',
//   'onscrollend',
//   'onsearch',
//   'onsecuritypolicyviolation',
//   'onseeked',
//   'onseeking',
//   'onselect',
//   'onselectionchange',
//   'onselectstart',
//   'onslotchange',
//   'onstalled',
//   'onstorage',
//   'onsubmit',
//   'onsuspend',
//   'ontimeupdate',
//   'ontimezonechange',
//   'ontoggle',
//   'ontransitioncancel',
//   'ontransitionend',
//   'ontransitionrun',
//   'ontransitionstart',
//   'onunhandledrejection',
//   'onunload',
//   'onvolumechange',
//   'onwaiting',
//   'onwebkitanimationend',
//   'onwebkitanimationiteration',
//   'onwebkitanimationstart',
//   'onwebkittransitionend',
//   'onwheel',
// ];

const reactLegacy = [
  'error',
  {
    name: 'window',
    message: 'Get a reference to `window` via context.',
  },
  {
    name: 'document',
    message: 'Get a reference to `document` via context.',
  },
];

const react = [
  'error',
  {
    name: 'window',
    message: 'Get a reference to `window` from `useFluent()`.',
  },
  {
    name: 'document',
    message: 'Get a reference to `document` from `useFluent()`.',
  },
  // ...windowKeys.map(key => {
  //   return {
  //     name: key,
  //     message: `Get a reference to \`window\` from \`useFluent()\` and access \`${key}\` from there.`,
  //   };
  // }),
];

module.exports = {
  reactLegacy,
  react,
};
