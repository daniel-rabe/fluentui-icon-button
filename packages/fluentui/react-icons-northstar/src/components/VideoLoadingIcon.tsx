import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const VideoLoadingIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg
      style={{ overflow: 'visible' }}
      role="presentation"
      focusable="false"
      viewBox="2 2 16 16"
      className={classes.svg}
    >
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M4.5 4C3.11929 4 2 5.11929 2 6.5V10.2572C2.30711 10.0035 2.64222 9.78261 3 9.59971V6.5C3 5.67157 3.67157 5 4.5 5H11.5C12.3284 5 13 5.67157 13 6.5V13.5C13 14.3284 12.3284 15 11.5 15H10.9776C10.9466 15.3434 10.8841 15.6777 10.793 16H11.5C12.8807 16 14 14.8807 14 13.5V12.5L16.4 14.3C17.0592 14.7944 18 14.324 18 13.5V6.49998C18 5.67594 17.0592 5.20556 16.4 5.69998L14 7.49998V6.5C14 5.11929 12.8807 4 11.5 4H4.5ZM14 8.74998L17 6.49998V13.5L14 11.25V8.74998Z" />
        <path d="M10 14.5C10 16.9853 7.98528 19 5.5 19C3.01472 19 1 16.9853 1 14.5C1 12.0147 3.01472 10 5.5 10C7.98528 10 10 12.0147 10 14.5ZM3.5 11.5C3.22386 11.5 3 11.7239 3 12V13.5C3 13.7761 3.22386 14 3.5 14H5C5.27614 14 5.5 13.7761 5.5 13.5C5.5 13.2239 5.27614 13 5 13H4.53179C4.58213 12.9722 4.63372 12.9464 4.68645 12.923C4.93176 12.8137 5.19656 12.755 5.46505 12.7503C5.73354 12.7456 6.00023 12.795 6.24921 12.8956C6.4982 12.9962 6.72437 13.1459 6.91425 13.3358C7.10952 13.531 7.4261 13.531 7.62136 13.3358C7.81662 13.1405 7.81662 12.8239 7.62136 12.6287C7.33654 12.3439 6.99727 12.1193 6.6238 11.9684C6.25033 11.8175 5.85029 11.7434 5.44755 11.7505C5.04482 11.7575 4.64762 11.8456 4.27966 12.0094C4.18383 12.0521 4.09049 12.0997 4 12.1519V12C4 11.7239 3.77614 11.5 3.5 11.5ZM4.3762 17.0316C4.74967 17.1825 5.14971 17.2566 5.55245 17.2495C5.95518 17.2425 6.35238 17.1544 6.72034 16.9906C6.81617 16.9479 6.90951 16.9003 7 16.8481V17C7 17.2761 7.22386 17.5 7.5 17.5C7.77614 17.5 8 17.2761 8 17V15.5C8 15.2239 7.77614 15 7.5 15H6C5.72386 15 5.5 15.2239 5.5 15.5C5.5 15.7761 5.72386 16 6 16H6.46821C6.41787 16.0278 6.36628 16.0536 6.31355 16.077C6.06824 16.1863 5.80344 16.245 5.53495 16.2497C5.26646 16.2544 4.99977 16.205 4.75079 16.1044C4.5018 16.0038 4.27563 15.8541 4.08575 15.6642C3.89049 15.469 3.5739 15.469 3.37864 15.6642C3.18338 15.8595 3.18338 16.1761 3.37864 16.3713C3.66346 16.6561 4.00273 16.8807 4.3762 17.0316Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M10.5 4C11.8807 4 13 5.11929 13 6.5V13.5C13 14.7799 12.0382 15.8352 10.7979 15.9824C10.9296 15.5108 11 15.0136 11 14.5C11 11.4624 8.53757 9 5.5 9C4.17037 9 2.95094 9.47182 2 10.2572V6.5C2 5.11929 3.11929 4 4.5 4H10.5Z" />
        <path d="M14 12.0815V7.93082L16.7692 5.61756C17.2575 5.20962 18 5.55685 18 6.19315V13.8606C18 14.4999 17.2512 14.8461 16.7642 14.4319L14 12.0815Z" />
        <path d="M10 14.5C10 16.9853 7.98528 19 5.5 19C3.01472 19 1 16.9853 1 14.5C1 12.0147 3.01472 10 5.5 10C7.98528 10 10 12.0147 10 14.5ZM3.5 11.5C3.22386 11.5 3 11.7239 3 12V13.5C3 13.7761 3.22386 14 3.5 14H5C5.27614 14 5.5 13.7761 5.5 13.5C5.5 13.2239 5.27614 13 5 13H4.53179C4.58213 12.9722 4.63372 12.9464 4.68645 12.923C4.93176 12.8137 5.19656 12.755 5.46505 12.7503C5.73354 12.7456 6.00023 12.795 6.24921 12.8956C6.4982 12.9962 6.72437 13.1459 6.91425 13.3358C7.10952 13.531 7.4261 13.531 7.62136 13.3358C7.81662 13.1405 7.81662 12.8239 7.62136 12.6287C7.33654 12.3439 6.99727 12.1193 6.6238 11.9684C6.25033 11.8175 5.85029 11.7434 5.44755 11.7505C5.04482 11.7575 4.64762 11.8456 4.27966 12.0094C4.18383 12.0521 4.09049 12.0997 4 12.1519V12C4 11.7239 3.77614 11.5 3.5 11.5ZM4.3762 17.0316C4.74967 17.1825 5.14971 17.2566 5.55245 17.2495C5.95518 17.2425 6.35238 17.1544 6.72034 16.9906C6.81617 16.9479 6.90951 16.9003 7 16.8481V17C7 17.2761 7.22386 17.5 7.5 17.5C7.77614 17.5 8 17.2761 8 17V15.5C8 15.2239 7.77614 15 7.5 15H6C5.72386 15 5.5 15.2239 5.5 15.5C5.5 15.7761 5.72386 16 6 16H6.46821C6.41787 16.0278 6.36628 16.0536 6.31355 16.077C6.06824 16.1863 5.80344 16.245 5.53495 16.2497C5.26646 16.2544 4.99977 16.205 4.75079 16.1044C4.5018 16.0038 4.27563 15.8541 4.08575 15.6642C3.89049 15.469 3.5739 15.469 3.37864 15.6642C3.18338 15.8595 3.18338 16.1761 3.37864 16.3713C3.66346 16.6561 4.00273 16.8807 4.3762 17.0316Z" />
      </g>
    </svg>
  ),
  displayName: 'VideoLoadingIcon',
});
