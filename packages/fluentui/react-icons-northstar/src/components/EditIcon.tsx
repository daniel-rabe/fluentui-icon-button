import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const EditIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(iconClassNames.outline, classes.outlinePart)}
          d="M13.2452 2.81739C14.332 1.73059 16.0941 1.73059 17.1809 2.81739C18.2224 3.85892 18.2658 5.5206 17.3111 6.6138L17.1809 6.75307L7.57506 16.3589C7.36997 16.564 7.12323 16.7215 6.85236 16.8213L6.68708 16.8742L2.63211 17.9801C2.28552 18.0746 1.96546 17.7861 2.00301 17.4455L2.01817 17.3662L3.12407 13.3112C3.20039 13.0314 3.33646 12.7722 3.52212 12.5511L3.63939 12.4232L13.2452 2.81739ZM12.385 5.09229L4.34649 13.1303C4.2542 13.2226 4.18117 13.3318 4.13111 13.4514L4.08884 13.5743L3.2122 16.785L6.42397 15.9094C6.50791 15.8865 6.58815 15.8529 6.66278 15.8096L6.77028 15.7375L6.86796 15.6518L14.906 7.61329L12.385 5.09229ZM16.4738 3.5245C15.8162 2.8669 14.7727 2.83037 14.0722 3.4149L13.9523 3.5245L13.092 4.38529L15.613 6.90629L16.4738 6.04596C17.1314 5.38836 17.1679 4.34488 16.5834 3.64441L16.4738 3.5245Z"
        />
        <path
          className={cx(iconClassNames.filled, classes.filledPart)}
          d="M11.677 4.38429L15.613 8.32029L7.57506 16.3589C7.36997 16.564 7.12323 16.7215 6.85236 16.8213L6.68708 16.8742L2.63211 17.9801C2.28552 18.0746 1.96546 17.7861 2.00301 17.4455L2.01817 17.3662L3.12407 13.3112C3.20039 13.0314 3.33646 12.7722 3.52212 12.5511L3.63939 12.4232L11.677 4.38429ZM13.2452 2.81739C14.332 1.73059 16.0941 1.73059 17.1809 2.81739C18.2224 3.85892 18.2658 5.5206 17.3111 6.6138L17.1809 6.75307L16.32 7.61329L12.384 3.67729L13.2452 2.81739Z"
        />
      </g>
    </svg>
  ),
  displayName: 'EditIcon',
});
