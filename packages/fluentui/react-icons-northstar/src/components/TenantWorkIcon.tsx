import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const TenantWorkIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg className={classes.svg} viewBox="2 2 16 16" role="presentation" focusable="false">
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4.5V6H4C2.89543 6 2 6.89543 2 8V15C2 16.1046 2.89543 17 4 17H16.0026C17.1071 17 18.0026 16.1046 18.0026 15V8C18.0026 6.89543 17.1071 6 16.0026 6H14V4.5C14 3.67157 13.3284 3 12.5 3H7.5C6.67157 3 6 3.67157 6 4.5ZM7.5 4C7.22386 4 7 4.22386 7 4.5V6H13V4.5C13 4.22386 12.7761 4 12.5 4H7.5ZM4 7C3.44772 7 3 7.44772 3 8V10H6V9.50073C6 9.22459 6.22386 9.00073 6.5 9.00073C6.77614 9.00073 7 9.22459 7 9.50073V10H13L13 9.50074C13 9.22459 13.2239 9.00073 13.5 9.00073C13.7761 9.00073 14 9.22459 14 9.50073L14 10H17.0026V8C17.0026 7.44772 16.5549 7 16.0026 7H4ZM13 11L13 11.5C13 11.7761 13.2239 12 13.5 12C13.7762 12 14 11.7761 14 11.5L14 11H17.0026V15C17.0026 15.5523 16.5549 16 16.0026 16H4C3.44772 16 3 15.5523 3 15V11H6V11.5C6 11.7761 6.22386 12 6.5 12C6.77614 12 7 11.7761 7 11.5V11H13Z"
      />
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 4.5V6H4C2.89543 6 2 6.89543 2 8V10H6V9.50073C6 9.22459 6.22386 9.00073 6.5 9.00073C6.77614 9.00073 7 9.22459 7 9.50073V10H13L13 9.50074C13 9.22459 13.2239 9.00073 13.5 9.00073C13.7761 9.00073 14 9.22459 14 9.50073L14 10H18.0026V8C18.0026 6.89543 17.1071 6 16.0026 6H14V4.5C14 3.67157 13.3284 3 12.5 3H7.5C6.67157 3 6 3.67157 6 4.5ZM7.5 4C7.22386 4 7 4.22386 7 4.5V6H13V4.5C13 4.22386 12.7761 4 12.5 4H7.5Z"
        />
        <path d="M18.0026 11H14L14 11.5C14 11.7761 13.7762 12 13.5 12C13.2239 12 13 11.7761 13 11.5L13 11H7V11.5C7 11.7761 6.77614 12 6.5 12C6.22386 12 6 11.7761 6 11.5V11H2V15C2 16.1046 2.89543 17 4 17H16.0026C17.1071 17 18.0026 16.1046 18.0026 15V11Z" />
      </g>
    </svg>
  ),
  displayName: 'TenantWorkIcon',
});
