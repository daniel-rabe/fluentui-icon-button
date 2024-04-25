  // Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

import {
  IIconOptions,
  IIconSubset,
  registerIcons
} from '@fluentui/style-utilities';

export function initializeIcons(
  baseUrl: string = '',
  options?: IIconOptions
): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-1"`,
      src: `url('${baseUrl}fabric-icons-1-4d521695.woff') format('woff')`
    },
    icons: {
      'Paste': '\uE77F',
      'WindowsLogo': '\uE782',
      'Error': '\uE783',
      'GripperBarVertical': '\uE784',
      'Unlock': '\uE785',
      'Slideshow': '\uE786',
      'Trim': '\uE78A',
      'AutoEnhanceOn': '\uE78D',
      'AutoEnhanceOff': '\uE78E',
      'Color': '\uE790',
      'SaveAs': '\uE792',
      'Light': '\uE793',
      'Filters': '\uE795',
      'AspectRatio': '\uE799',
      'Contrast': '\uE7A1',
      'Redo': '\uE7A6',
      'Crop': '\uE7A8',
      'PhotoCollection': '\uE7AA',
      'Album': '\uE7AB',
      'Rotate': '\uE7AD',
      'PanoIndicator': '\uE7B0',
      'Translate': '\uE7B2',
      'RedEye': '\uE7B3',
      'ViewOriginal': '\uE7B4',
      'ThumbnailView': '\uE7B6',
      'Package': '\uE7B8',
      'Telemarketer': '\uE7B9',
      'Warning': '\uE7BA',
      'Financial': '\uE7BB',
      'Education': '\uE7BE',
      'ShoppingCart': '\uE7BF',
      'Train': '\uE7C0',
      'Move': '\uE7C2',
      'TouchPointer': '\uE7C9',
      'Merge': '\uE7D5',
      'TurnRight': '\uE7DB',
      'Ferry': '\uE7E3',
      'Highlight': '\uE7E6',
      'PowerButton': '\uE7E8',
      'Tab': '\uE7E9',
      'Admin': '\uE7EF',
      'TVMonitor': '\uE7F4',
      'Speakers': '\uE7F5',
      'Game': '\uE7FC',
      'HorizontalTabKey': '\uE7FD',
      'UnstackSelected': '\uE7FE',
      'StackIndicator': '\uE7FF',
      'Nav2DMapView': '\uE800',
      'StreetsideSplitMinimize': '\uE802',
      'Car': '\uE804',
      'Bus': '\uE806',
      'EatDrink': '\uE807',
      'SeeDo': '\uE808',
      'LocationCircle': '\uE80E',
      'Home': '\uE80F',
      'SwitcherStartEnd': '\uE810',
      'ParkingLocation': '\uE811',
      'IncidentTriangle': '\uE814',
      'Touch': '\uE815',
      'MapDirections': '\uE816',
      'CaretHollow': '\uE817',
      'CaretSolid': '\uE818',
      'History': '\uE81C',
      'Location': '\uE81D',
      'MapLayers': '\uE81E',
      'SearchNearby': '\uE820',
      'Work': '\uE821',
      'Recent': '\uE823',
      'Hotel': '\uE824',
      'Bank': '\uE825',
      'LocationDot': '\uE827',
      'Dictionary': '\uE82D',
      'ChromeBack': '\uE830',
      'FolderOpen': '\uE838',
      'PinnedFill': '\uE842',
      'RevToggleKey': '\uE845',
      'USB': '\uE88E',
      'Previous': '\uE892',
      'Next': '\uE893',
      'Sync': '\uE895',
      'Help': '\uE897',
      'Emoji': '\uE899',
      'MailForward': '\uE89C',
      'ClosePane': '\uE89F',
      'OpenPane': '\uE8A0',
      'PreviewLink': '\uE8A1',
      'ZoomIn': '\uE8A3',
      'Bookmarks': '\uE8A4',
      'Document': '\uE8A5',
      'ProtectedDocument': '\uE8A6',
      'OpenInNewWindow': '\uE8A7',
      'MailFill': '\uE8A8',
      'ViewAll': '\uE8A9',
      'Switch': '\uE8AB',
      'Rename': '\uE8AC',
      'Go': '\uE8AD',
      'Remote': '\uE8AF',
      'SelectAll': '\uE8B3',
      'Orientation': '\uE8B4',
      'Import': '\uE8B5'
    }
  };

  registerIcons(subset, options);
}
