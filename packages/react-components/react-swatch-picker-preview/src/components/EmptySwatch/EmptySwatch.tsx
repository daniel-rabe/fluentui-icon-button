import * as React from 'react';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { useEmptySwatch_unstable } from './useEmptySwatch';
import { renderEmptySwatch_unstable } from './renderEmptySwatch';
import { useEmptySwatchStyles_unstable } from './useEmptySwatchStyles.styles';
import type { EmptySwatchProps } from './EmptySwatch.types';

/**
 * EmptySwatch component is used for adding new color swatches.
 */
export const EmptySwatch: ForwardRefComponent<EmptySwatchProps> = React.forwardRef((props, ref) => {
  const state = useEmptySwatch_unstable(props, ref);

  useEmptySwatchStyles_unstable(state);
  // TODO update types in packages/react-components/react-shared-contexts/src/CustomStyleHooksContext/CustomStyleHooksContext.ts
  // https://github.com/microsoft/fluentui/blob/master/rfcs/react-components/convergence/custom-styling.md
  // useCustomStyleHook_unstable('useEmptySwatchStyles_unstable')(state);
  return renderEmptySwatch_unstable(state);
});

EmptySwatch.displayName = 'EmptySwatch';
