import * as React from 'react';
import cx from 'classnames';
import { iconClassNames } from '../utils/iconClassNames';
import { createSvgIcon } from '../utils/createSvgIcon';

export const UrgentIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" className={classes.svg} viewBox="2 2 16 16">
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M13.2638 2.07705C13.0284 1.93276 12.7205 2.00666 12.5762 2.24211C12.4319 2.47755 12.5058 2.78539 12.7413 2.92968C14.9987 4.31313 16.86 6.34293 17.0004 10.0191C17.0109 10.295 17.2431 10.5102 17.5191 10.4997C17.795 10.4891 18.0102 10.2569 17.9996 9.98095C17.8431 5.88265 15.722 3.58356 13.2638 2.07705Z" />
        <path d="M12.0856 4.72739C12.2402 4.49856 12.551 4.43835 12.7798 4.59291C14.3874 5.67871 15.4951 7.23091 15.668 9.01738C15.6835 9.17815 15.6914 9.34043 15.6914 9.50399C15.6914 9.78013 15.4676 10.004 15.1914 10.004C14.9153 10.004 14.6914 9.78013 14.6914 9.50399C14.6914 9.37269 14.6851 9.24256 14.6726 9.11369C14.5355 7.69668 13.648 6.38607 12.2201 5.42159C11.9913 5.26703 11.9311 4.95623 12.0856 4.72739Z" />
        <path d="M5.07964 5.43826C2.47719 6.59694 1.30679 9.64594 2.46548 12.2484L3.68939 14.9973L3.77846 17.3173C3.79881 17.8475 4.34823 18.1895 4.83296 17.9736L14.5603 13.6427C15.045 13.4269 15.1585 12.7898 14.7781 12.4199L13.1137 10.8014L11.8898 8.05242C10.7311 5.44997 7.68209 4.27957 5.07964 5.43826ZM3.37902 11.8417C2.44497 9.74374 3.38847 7.28585 5.48638 6.3518C7.58429 5.41775 10.0422 6.36125 10.9762 8.45916L12.2785 11.384L13.8162 12.8794L4.76355 16.9099L4.68126 14.7665L3.37902 11.8417Z" />
        <path d="M10.6783 17.8756C10.003 18.1763 9.2236 17.9339 8.82969 17.3363L11.5145 16.1409C11.695 16.8335 11.3536 17.5749 10.6783 17.8756Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M2.46548 12.2484C1.30679 9.64598 2.47719 6.59698 5.07964 5.4383C7.68209 4.27962 10.7311 5.45002 11.8898 8.05246L13.1137 10.8014L14.7781 12.4199C15.1585 12.7898 15.045 13.427 14.5603 13.6428L4.83296 17.9737C4.34823 18.1895 3.79881 17.8475 3.77846 17.3173L3.68939 14.9974L2.46548 12.2484Z" />
        <path d="M8.8297 17.3363C9.2236 17.9339 10.003 18.1763 10.6783 17.8756C11.3536 17.575 11.695 16.8335 11.5145 16.141L8.8297 17.3363Z" />
        <path d="M12.0856 4.72738C12.2402 4.49854 12.551 4.43834 12.7798 4.5929C14.3874 5.67869 15.4951 7.2309 15.668 9.01736C15.6835 9.17814 15.6914 9.34042 15.6914 9.50398C15.6914 9.78012 15.4676 10.004 15.1914 10.004C14.9153 10.004 14.6914 9.78012 14.6914 9.50398C14.6914 9.37268 14.6851 9.24254 14.6726 9.11368C14.5355 7.69667 13.6481 6.38606 12.2201 5.42158C11.9913 5.26702 11.9311 4.95621 12.0856 4.72738Z" />
        <path d="M12.5762 2.24208C12.7205 2.00663 13.0284 1.93274 13.2638 2.07703C15.722 3.58353 17.8431 5.88263 17.9996 9.98092C18.0102 10.2569 17.795 10.4891 17.5191 10.4996C17.2431 10.5102 17.0109 10.295 17.0004 10.0191C16.86 6.34291 14.9987 4.31311 12.7413 2.92965C12.5058 2.78536 12.4319 2.47753 12.5762 2.24208Z" />
      </g>
    </svg>
  ),
  displayName: 'UrgentIcon',
});
