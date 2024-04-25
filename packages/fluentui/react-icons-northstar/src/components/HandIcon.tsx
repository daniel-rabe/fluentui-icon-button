import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const HandIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M4 12.0198C4 13.0755 4.20666 14.1209 4.60833 15.0972L5.19297 16.5182C5.42166 17.0741 5.83945 17.5312 6.37252 17.8088C6.63864 17.9474 6.93427 18.0198 7.23432 18.0198H9.78C10.5528 18.0198 11.2667 17.6071 11.6524 16.9375C12.1515 16.071 12.6674 15.2341 13.3651 14.5074L14.6934 13.1237C15.1347 12.664 15.6581 12.2757 16.1758 11.8918C16.3759 11.7434 16.5751 11.5956 16.7684 11.4446C16.9146 11.3304 17 11.1553 17 10.9698C17 10.2163 16.4636 9.39514 15.7834 9.17982C14.8731 8.87353 13.9873 8.9671 13.1312 9.39514C13.0864 9.41755 13.0427 9.44115 13 9.46586V4.5C13 3.67157 12.3284 3 11.5 3C11.3049 3 11.1185 3.03726 10.9475 3.10504C10.7741 2.46823 10.1917 2 9.5 2C8.80827 2 8.22589 2.46823 8.05254 3.10504C7.88155 3.03726 7.69512 3 7.5 3C6.67157 3 6 3.67157 6 4.5V4.58535C5.84361 4.53008 5.67532 4.5 5.5 4.5C4.67157 4.5 4 5.17157 4 6V12.0198ZM8 4.5V8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5V3.5C9 3.22386 9.22386 3 9.5 3C9.77614 3 10 3.22386 10 3.5V8.5C10 8.77614 10.2239 9 10.5 9C10.7761 9 11 8.77614 11 8.5V4.5C11 4.22386 11.2239 4 11.5 4C11.7761 4 12 4.22386 12 4.5L12.0004 10.4997C11.995 10.6342 12.0437 10.7706 12.1464 10.8733C12.3417 11.0686 12.6583 11.0686 12.8536 10.8733L12.8618 10.865C13.0816 10.6453 13.2961 10.4307 13.5784 10.2896C14.2748 9.94137 15.8006 9.71523 15.9847 10.7879C15.8088 10.9253 15.6288 11.0602 15.4482 11.1956C14.9335 11.5813 14.4141 11.9706 13.972 12.4311L12.6437 13.8148C11.8897 14.6002 11.3255 15.5015 10.7859 16.4384C10.5787 16.7981 10.1951 17.0198 9.78 17.0198H7.23432C7.0951 17.0198 6.95793 16.9862 6.83446 16.9219C6.51056 16.7532 6.25671 16.4755 6.11776 16.1377L5.53312 14.7167C5.18111 13.8612 5 12.945 5 12.0198V6C5 5.72386 5.22386 5.5 5.5 5.5C5.77614 5.5 6 5.72386 6 6V9.5C6 9.77614 6.22386 10 6.5 10C6.77614 10 7 9.77614 7 9.5V4.5C7 4.22386 7.22386 4 7.5 4C7.77614 4 8 4.22386 8 4.5Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M9 8.5V2.75C9 2.33579 9.33579 2 9.75 2C10.1642 2 10.5 2.33579 10.5 2.75V8.5C10.5 8.77614 10.7239 9 11 9C11.2761 9 11.5 8.77614 11.5 8.5V3.75C11.5 3.33579 11.8358 3 12.25 3C12.6642 3 13 3.33579 13 3.75V10.2498C13.6616 9.82409 14.3919 9.5 15 9.5C15.9711 9.5 16.7874 9.82415 16.9841 10.6155C16.9959 10.6631 17 10.7122 17 10.7611C17 10.9115 16.9292 11.0531 16.8089 11.1433L15.4965 12.1276C14.4341 12.9244 13.4334 13.9933 12.7355 15.1163C12.3578 15.7239 12.0174 16.3529 11.6818 16.9844C11.3217 17.6615 11.0938 18 10 18H6.95452C6 18 5.63707 17.467 5 16C4.36293 14.533 4 13.0556 4 12.5V5.25C4 4.83579 4.33579 4.5 4.75 4.5C5.16421 4.5 5.5 4.83579 5.5 5.25V9C5.5 9.27614 5.72386 9.5 6 9.5C6.27614 9.5 6.5 9.27614 6.5 9V3.75C6.5 3.33579 6.83579 3 7.25 3C7.66421 3 8 3.33579 8 3.75V8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5Z"
      />
    </svg>
  ),
  displayName: 'HandIcon',
});
