import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const GlobeIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" viewBox="2 2 16 16" style={{ overflow: 'visible' }} className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 3C10.6568 3 11.4068 3.59025 12.0218 4.90814C12.2393 5.37419 12.4283 5.90978 12.5806 6.5H7.41936C7.57172 5.90978 7.76073 5.37419 7.97822 4.90814C8.59323 3.59025 9.34315 3 10 3ZM7.07203 4.48526C6.79564 5.07753 6.56498 5.75696 6.38931 6.5H3.93648C4.77295 5.05399 6.11182 3.93497 7.71442 3.38163C7.47297 3.71222 7.25828 4.08617 7.07203 4.48526ZM6.19265 7.5C6.06723 8.28832 6 9.12934 6 10C6 10.8707 6.06723 11.7117 6.19265 12.5H3.45963C3.16268 11.7236 3 10.8808 3 10C3 9.1192 3.16268 8.2764 3.45963 7.5H6.19265ZM6.38931 13.5C6.56498 14.243 6.79564 14.9225 7.07203 15.5147C7.25828 15.9138 7.47297 16.2878 7.71442 16.6184C6.11182 16.065 4.77295 14.946 3.93648 13.5H6.38931ZM7.41936 13.5H12.5806C12.4283 14.0902 12.2393 14.6258 12.0218 15.0919C11.4068 16.4097 10.6568 17 10 17C9.34315 17 8.59323 16.4097 7.97822 15.0919C7.76073 14.6258 7.57172 14.0902 7.41936 13.5ZM12.7938 12.5H7.20617C7.07345 11.7253 7 10.8833 7 10C7 9.11669 7.07345 8.27472 7.20617 7.5H12.7938C12.9266 8.27472 13 9.11669 13 10C13 10.8833 12.9266 11.7253 12.7938 12.5ZM13.6107 13.5H16.0635C15.2271 14.946 13.8882 16.065 12.2856 16.6184C12.527 16.2878 12.7417 15.9138 12.928 15.5147C13.2044 14.9225 13.435 14.243 13.6107 13.5ZM16.5404 12.5H13.8074C13.9328 11.7117 14 10.8707 14 10C14 9.12934 13.9328 8.28832 13.8074 7.5H16.5404C16.8373 8.2764 17 9.1192 17 10C17 10.8808 16.8373 11.7236 16.5404 12.5ZM12.2856 3.38163C13.8882 3.93497 15.2271 5.05399 16.0635 6.5H13.6107C13.435 5.75696 13.2044 5.07753 12.928 4.48526C12.7417 4.08617 12.527 3.71222 12.2856 3.38163Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M7.98747 4.17997C7.71458 4.84269 7.48643 5.62692 7.31842 6.5H12.6816C12.5136 5.62692 12.2854 4.84269 12.0125 4.17997C11.7106 3.44666 11.3637 2.88614 11.0041 2.51675C10.646 2.14894 10.3069 2 10 2C9.69311 2 9.35398 2.14894 8.99591 2.51675C8.6363 2.88614 8.28942 3.44666 7.98747 4.17997ZM7.89053 2.28104C7.57693 2.70725 7.30036 3.22224 7.06279 3.79922C6.74205 4.57814 6.48315 5.49258 6.3012 6.5H2.80423C3.80285 4.45074 5.65108 2.89163 7.89053 2.28104ZM12.1095 2.28105C12.4231 2.70725 12.6996 3.22225 12.9372 3.79922C13.2579 4.57814 13.5169 5.49258 13.6988 6.5H17.1958C16.1972 4.45074 14.3489 2.89163 12.1095 2.28105ZM17.6016 7.5H13.85C13.9479 8.2949 14 9.13416 14 10C14 10.8658 13.9479 11.7051 13.85 12.5H17.6016C17.8601 11.7135 18 10.8731 18 10C18 9.12694 17.8601 8.28655 17.6016 7.5ZM17.1958 13.5H13.6988C13.5169 14.5074 13.2579 15.4219 12.9372 16.2008C12.6996 16.7778 12.4231 17.2928 12.1095 17.719C14.3489 17.1084 16.1972 15.5493 17.1958 13.5ZM10 18C10.3069 18 10.646 17.8511 11.0041 17.4832C11.3637 17.1139 11.7106 16.5533 12.0125 15.82C12.2854 15.1573 12.5136 14.3731 12.6816 13.5H7.31842C7.48643 14.3731 7.71458 15.1573 7.98747 15.82C8.28942 16.5533 8.6363 17.1139 8.99591 17.4832C9.35398 17.8511 9.69311 18 10 18ZM7.89053 17.719C5.65107 17.1084 3.80285 15.5493 2.80423 13.5H6.3012C6.48315 14.5074 6.74205 15.4219 7.06279 16.2008C7.30036 16.7778 7.57693 17.2928 7.89053 17.719ZM2.39838 12.5H6.14996C6.0521 11.7051 6 10.8658 6 10C6 9.13416 6.0521 8.2949 6.14996 7.5H2.39838C2.13985 8.28655 2 9.12694 2 10C2 10.8731 2.13985 11.7135 2.39838 12.5ZM7 10C7 9.1253 7.0557 8.28549 7.15793 7.5H12.8421C12.9443 8.28549 13 9.1253 13 10C13 10.8747 12.9443 11.7145 12.8421 12.5H7.15793C7.0557 11.7145 7 10.8747 7 10Z"
      />
    </svg>
  ),
  displayName: 'GlobeIcon',
});
