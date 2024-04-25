import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const UndoIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svgFlippingInRtl}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M5 2.5C5 2.22386 4.77614 2 4.5 2C4.22386 2 4 2.22386 4 2.5V7.4C4 7.73137 4.26863 8 4.6 8H9.5C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7H5.90603L9.37872 3.98124C11.046 2.53191 13.5725 2.70858 15.0218 4.37584C16.4711 6.0431 16.2945 8.56959 14.6272 10.0189L6.45529 17.1226C6.24688 17.3038 6.2248 17.6196 6.40596 17.828C6.58713 18.0364 6.90294 18.0585 7.11135 17.8774L15.2833 10.7736C17.3673 8.96197 17.5882 5.80385 15.7765 3.71978C13.9648 1.63571 10.8067 1.41487 8.72266 3.22653L5 6.46259V2.5Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M6.8624 6.5H9.25C9.66421 6.5 10 6.83579 10 7.25C10 7.66422 9.66421 8 9.25 8H4.85C4.38056 8 4 7.61945 4 7.15V2.75C4 2.33579 4.33579 2 4.75 2C5.16421 2 5.5 2.33579 5.5 2.75V5.6968L8.55877 3.03785C10.747 1.13561 14.0631 1.36749 15.9653 3.55577C17.8675 5.74405 17.6357 9.06006 15.4474 10.9623L7.27548 18.066C6.96287 18.3378 6.48915 18.3047 6.21741 17.992C5.94566 17.6794 5.97878 17.2057 6.29139 16.934L14.4633 9.83024C16.0264 8.4715 16.192 6.10291 14.8332 4.53986C13.4745 2.9768 11.1059 2.81118 9.54286 4.16992L6.8624 6.5Z"
      />
    </svg>
  ),
  displayName: 'UndoIcon',
});
