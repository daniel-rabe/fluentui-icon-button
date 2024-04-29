import * as React from 'react';
import { createSvgIcon } from '../utils/createSvgIcon';

export const CustomerHubIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg
      style={{ overflow: 'visible' }}
      role="presentation"
      focusable="false"
      viewBox="2 2 16 16"
      className={classes.svg}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 13.9291C7.6734 13.9758 7.33952 14 7 14V16C7 17.1046 7.89543 18 9 18H16C17.1046 18 18 17.1046 18 16V11C18 9.89543 17.1046 9 16 9H13.7101C13.6074 9.34525 13.4787 9.67933 13.3264 10H16C16.5523 10 17 10.4477 17 11V11.6909L12.5 13.9409L10.6124 12.9971C10.2542 13.2133 9.87513 13.3983 9.47887 13.5484L12.2764 14.9472C12.4171 15.0175 12.5828 15.0175 12.7236 14.9472L17 12.809V16C17 16.5523 16.5523 17 16 17H9C8.44772 17 8 16.5523 8 16V13.9291Z"
      />
      <path d="M5 6C5 5.72386 5.22386 5.5 5.5 5.5H8.5C8.77614 5.5 9 5.72386 9 6C9 6.27614 8.77614 6.5 8.5 6.5H5.5C5.22386 6.5 5 6.27614 5 6Z" />
      <path d="M5.5 7.5C5.22386 7.5 5 7.72386 5 8C5 8.27614 5.22386 8.5 5.5 8.5H7.5C7.77614 8.5 8 8.27614 8 8C8 7.72386 7.77614 7.5 7.5 7.5H5.5Z" />
      <path d="M1.00001 7C1.00001 3.68629 3.68631 1 7.00001 1C10.3137 1 13 3.68629 13 7C13 10.3137 10.3137 13 7.00001 13C5.90639 13 4.87989 12.707 3.99618 12.195L1.65813 12.9743C1.48217 13.033 1.2882 12.9894 1.15422 12.8612C1.02025 12.7329 0.968297 12.541 1.01925 12.3626L1.73086 9.87202C1.2648 9.01862 1.00001 8.03957 1.00001 7ZM7.00001 2C4.23859 2 2.00001 4.23858 2.00001 7C2.00001 7.93308 2.25513 8.80506 2.69913 9.55165C2.76952 9.67002 2.78797 9.81217 2.75014 9.94458L2.24119 11.7259L3.89938 11.1732C4.04199 11.1256 4.19843 11.1448 4.32536 11.2253C5.09854 11.7159 6.01533 12 7.00001 12C9.76144 12 12 9.76142 12 7C12 4.23858 9.76144 2 7.00001 2Z" />
    </svg>
  ),
  displayName: 'CustomerHubIcon',
});
