import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const EmojiSurprisedIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M7.5 9.5C8.05228 9.5 8.5 9.05228 8.5 8.5C8.5 7.94772 8.05228 7.5 7.5 7.5C6.94772 7.5 6.5 7.94772 6.5 8.5C6.5 9.05228 6.94772 9.5 7.5 9.5ZM11.75 12.5C11.75 13.4665 10.9665 14.25 10 14.25C9.0335 14.25 8.25 13.4665 8.25 12.5C8.25 11.5335 9.0335 10.75 10 10.75C10.9665 10.75 11.75 11.5335 11.75 12.5ZM12.5 9.5C13.0523 9.5 13.5 9.05228 13.5 8.5C13.5 7.94772 13.0523 7.5 12.5 7.5C11.9477 7.5 11.5 7.94772 11.5 8.5C11.5 9.05228 11.9477 9.5 12.5 9.5ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM7.5 9.5C8.05228 9.5 8.5 9.05228 8.5 8.5C8.5 7.94772 8.05228 7.5 7.5 7.5C6.94772 7.5 6.5 7.94772 6.5 8.5C6.5 9.05228 6.94772 9.5 7.5 9.5ZM11.75 12.5C11.75 11.5335 10.9665 10.75 10 10.75C9.0335 10.75 8.25 11.5335 8.25 12.5C8.25 13.4665 9.0335 14.25 10 14.25C10.9665 14.25 11.75 13.4665 11.75 12.5ZM12.5 9.5C13.0523 9.5 13.5 9.05228 13.5 8.5C13.5 7.94772 13.0523 7.5 12.5 7.5C11.9477 7.5 11.5 7.94772 11.5 8.5C11.5 9.05228 11.9477 9.5 12.5 9.5Z"
      />
    </svg>
  ),
  displayName: 'EmojiSurprisedIcon',
});
