// This is Fluent-style icon
import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const MegaphoneIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M18 4.8016C18 3.81605 17.0658 3.09831 16.1135 3.35225L3.11351 6.81891C2.45688 6.99402 2 7.58869 2 8.26827V10.7792C2 11.4249 2.41315 11.9981 3.02566 12.2023L5 12.8604V13.75C5 15.5449 6.45507 17 8.25 17C9.62112 17 10.7932 16.1513 11.2709 14.9507L16.0257 16.5356C16.997 16.8594 18 16.1364 18 15.1126V4.8016ZM10.32 14.6337C9.97657 15.437 9.17866 16 8.25 16C7.00736 16 6 14.9926 6 13.75V13.1937L10.32 14.6337ZM16.3712 4.31848C16.6886 4.23384 17 4.47309 17 4.8016V15.1126C17 15.4538 16.6657 15.6948 16.3419 15.5869L3.34189 11.2536C3.13771 11.1855 3 10.9944 3 10.7792V8.26827C3 8.04174 3.15229 7.84352 3.37117 7.78515L16.3712 4.31848Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M16.1135 3.35225C17.0658 3.09831 18 3.81605 18 4.8016V15.1126C18 16.1364 16.997 16.8594 16.0257 16.5356L11.2709 14.9507C10.7932 16.1513 9.62112 17 8.25 17C6.45507 17 5 15.5449 5 13.75V12.8604L3.02566 12.2023C2.41315 11.9981 2 11.4249 2 10.7792V8.26827C2 7.58869 2.45688 6.99402 3.11351 6.81891L16.1135 3.35225ZM6 13.1937V13.75C6 14.9926 7.00736 16 8.25 16C9.17866 16 9.97657 15.437 10.32 14.6337L6 13.1937Z"
      />
    </svg>
  ),
  displayName: 'MegaphoneIcon',
});
