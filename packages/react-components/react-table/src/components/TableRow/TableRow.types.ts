import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type TableRowSlots = {
  root: Slot<'tr', 'div'>;
};

/**
 * TableRow Props
 */
export type TableRowProps = ComponentProps<TableRowSlots> & {};

/**
 * State used in rendering TableRow
 */
export type TableRowState = ComponentState<TableRowSlots>;
