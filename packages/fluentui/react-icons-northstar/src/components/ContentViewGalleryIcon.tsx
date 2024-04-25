import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const ContentViewGalleryIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg viewBox="2 2 16 16" role="presentation" focusable="false" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M6 6C5.44772 6 5 6.44772 5 7V9C5 9.55228 5.44772 10 6 10H9C9.55228 10 10 9.55228 10 9V7C10 6.44772 9.55228 6 9 6H6ZM6 7H9V9H6V7ZM5 11.5C5 11.2239 5.22386 11 5.5 11H9.5C9.77614 11 10 11.2239 10 11.5C10 11.7761 9.77614 12 9.5 12H5.5C5.22386 12 5 11.7761 5 11.5ZM5.5 13C5.22386 13 5 13.2239 5 13.5C5 13.7761 5.22386 14 5.5 14H9.5C9.77614 14 10 13.7761 10 13.5C10 13.2239 9.77614 13 9.5 13H5.5ZM3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6ZM11 16V4H6C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H11ZM14 16C15.1046 16 16 15.1046 16 14V13H12V16H14ZM16 7V6C16 4.89543 15.1046 4 14 4H12V7H16ZM16 12V8H12V12H16Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M9 7H6V9H9V7ZM3 6C3 4.34315 4.34315 3 6 3H12V17H6C4.34315 17 3 15.6569 3 14V6ZM5 7V9C5 9.55228 5.44772 10 6 10H9C9.55228 10 10 9.55228 10 9V7C10 6.44772 9.55228 6 9 6H6C5.44772 6 5 6.44772 5 7ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12H9.5C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11H5.5ZM5 13.5C5 13.7761 5.22386 14 5.5 14H9.5C9.77614 14 10 13.7761 10 13.5C10 13.2239 9.77614 13 9.5 13H5.5C5.22386 13 5 13.2239 5 13.5ZM13 17H14C15.6569 17 17 15.6569 17 14V13H13V17ZM17 12V8H13V12H17ZM17 7V6C17 4.34315 15.6569 3 14 3H13V7H17Z"
      />
    </svg>
  ),
  displayName: 'ContentViewGalleryIcon',
});
