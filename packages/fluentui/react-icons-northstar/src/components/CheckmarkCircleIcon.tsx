// This is Fluent icon. Originally on a 20x20 canvas. No resize, just 'viewBox' update.
import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const CheckmarkCircleIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3ZM13.3584 7.64645C13.532 7.82001 13.5513 8.08944 13.4163 8.28431L13.3584 8.35355L9.35355 12.3584C9.17999 12.532 8.91056 12.5513 8.71569 12.4163L8.64645 12.3584L6.64645 10.3584C6.45118 10.1632 6.45118 9.84658 6.64645 9.65131C6.82001 9.47775 7.08944 9.45846 7.28431 9.59346L7.35355 9.65131L9 11.298L12.6513 7.64645C12.8466 7.45118 13.1632 7.45118 13.3584 7.64645Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM13.3584 7.64645C13.1849 7.47288 12.9154 7.4536 12.7206 7.58859L12.6513 7.64645L9 11.298L7.35355 9.65131L7.28431 9.59346C7.08944 9.45846 6.82001 9.47775 6.64645 9.65131C6.47288 9.82488 6.4536 10.0943 6.58859 10.2892L6.64645 10.3584L8.64645 12.3584L8.71569 12.4163C8.8862 12.5344 9.1138 12.5344 9.28431 12.4163L9.35355 12.3584L13.3584 8.35355L13.4163 8.28431C13.5513 8.08944 13.532 7.82001 13.3584 7.64645Z"
      />
    </svg>
  ),
  displayName: 'CheckmarkCircleIcon',
});
