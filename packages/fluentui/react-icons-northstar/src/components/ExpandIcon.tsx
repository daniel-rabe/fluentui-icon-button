import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const ExpandIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg viewBox="2 2 16 16" role="presentation" className={classes.svg} focusable="false">
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M10.5 3L16.5428 3.00182L16.6281 3.01661L16.691 3.03779L16.767 3.07719L16.8221 3.11759L16.8824 3.17788L16.9112 3.21534L16.9533 3.2886L16.9834 3.37186L16.9979 3.45421L17 3.5V9.5C17 9.77614 16.7761 10 16.5 10C16.2545 10 16.0504 9.82312 16.0081 9.58988L16 9.5V4.706L4.706 16H9.5C9.74546 16 9.94961 16.1769 9.99194 16.4101L10 16.5C10 16.7455 9.82312 16.9496 9.58988 16.9919L9.5 17L3.47964 16.9996L3.4112 16.9921L3.30896 16.9622L3.23299 16.9228L3.17786 16.8824L3.11758 16.8221L3.08884 16.7847L3.04674 16.7114L3.01661 16.6281L3.01109 16.605C3.00383 16.5713 3 16.5361 3 16.5L3.00546 16.5739L3.00182 16.5428L3 10.5C3 10.2239 3.22386 10 3.5 10C3.74546 10 3.94961 10.1769 3.99194 10.4101L4 10.5V15.292L15.292 4H10.5C10.2545 4 10.0504 3.82312 10.0081 3.58988L10 3.5C10 3.22386 10.2239 3 10.5 3Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M16 3C16.5523 3 17 3.44772 17 4V9.25C17 9.66421 16.6642 10 16.25 10C15.8358 10 15.5 9.66421 15.5 9.25V5.559L5.559 15.5H9.25C9.66421 15.5 10 15.8358 10 16.25C10 16.6642 9.66421 17 9.25 17H4C3.44772 17 3 16.5523 3 16V10.75C3 10.3358 3.33579 10 3.75 10C4.16421 10 4.5 10.3358 4.5 10.75V14.439L14.439 4.5H10.75C10.3358 4.5 10 4.16421 10 3.75C10 3.33579 10.3358 3 10.75 3H16Z"
      />
    </svg>
  ),
  displayName: 'ExpandIcon',
});
