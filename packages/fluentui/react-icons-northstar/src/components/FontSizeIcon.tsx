import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const FontSizeIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg viewBox="2 2 16 16" role="presentation" focusable="false" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0001 3.5C13.2086 3.5 13.3951 3.62929 13.4683 3.82444L16.4642 11.8136C16.4671 11.8208 16.4698 11.828 16.4724 11.8354L17.9683 15.8244C18.0653 16.083 17.9343 16.3712 17.6757 16.4682C17.4171 16.5651 17.1289 16.4341 17.032 16.1756L15.6536 12.5H10.3466L8.9683 16.1756C8.89581 16.3689 8.71199 16.4977 8.50557 16.5C8.29914 16.5022 8.11256 16.3774 8.03589 16.1857L6.96162 13.5H4.03865L2.96437 16.1857C2.86181 16.4421 2.57083 16.5668 2.31444 16.4642C2.05805 16.3617 1.93334 16.0707 2.03589 15.8143L3.23157 12.8251C3.23426 12.8179 3.2371 12.8108 3.2401 12.8038L5.03589 8.3143C5.11183 8.12448 5.29568 8 5.50013 8C5.70459 8 5.88844 8.12448 5.96437 8.3143L7.76016 12.8038C7.76316 12.8108 7.76601 12.8179 7.7687 12.8251L8.48509 14.6161L9.52787 11.8354C9.53042 11.8281 9.53314 11.8208 9.53602 11.8136L12.532 3.82444C12.6052 3.62929 12.7917 3.5 13.0001 3.5ZM10.7216 11.5H15.2786L13.0001 5.424L10.7216 11.5ZM6.56162 12.5L5.50013 9.84629L4.43865 12.5H6.56162Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.007 3.00003C13.3239 3.0029 13.6049 3.20471 13.7088 3.50417L17.9588 15.7542C18.0945 16.1455 17.8874 16.5728 17.496 16.7086C17.1047 16.8443 16.6774 16.6372 16.5416 16.2458L15.2421 12.5H10.5849L9.20421 16.2586C9.09659 16.5516 8.81878 16.7473 8.50669 16.75C8.19459 16.7527 7.91345 16.5618 7.80078 16.2707L6.92178 14H4.2557L3.45703 16.2508C3.31851 16.6412 2.88976 16.8453 2.4994 16.7068C2.10903 16.5683 1.90487 16.1396 2.04338 15.7492L4.79338 7.99919C4.89826 7.70362 5.17598 7.50452 5.48957 7.50008C5.80317 7.49563 6.08641 7.68678 6.19963 7.97925L8.48183 13.8749L12.2962 3.49139C12.4055 3.19386 12.69 2.99716 13.007 3.00003ZM4.78796 12.5H6.34113L5.53078 10.4066L4.78796 12.5ZM12.98 5.98L14.7217 11H11.1359L12.98 5.98Z"
      />
    </svg>
  ),
  displayName: 'FontSizeIcon',
});
