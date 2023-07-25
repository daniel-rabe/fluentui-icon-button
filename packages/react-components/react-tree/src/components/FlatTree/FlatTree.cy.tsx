import * as React from 'react';
import { mount as mountBase } from '@cypress/react';
import { FluentProvider } from '@fluentui/react-provider';
import { teamsLightTheme } from '@fluentui/react-theme';
import {
  Tree,
  TreeItem,
  TreeItemLayout,
  treeItemLayoutClassNames,
  TreeItemValue,
  FlatTreeProps,
  HeadlessFlatTreeOptions,
  useHeadlessFlatTree_unstable,
  FlatTree,
} from '@fluentui/react-tree';
import { Button } from '@fluentui/react-button';
import { flattenTreeFromElement } from '../../testing/flattenTreeFromElement';

const mount = (element: JSX.Element) => {
  mountBase(<FluentProvider theme={teamsLightTheme}>{element}</FluentProvider>);
};

const TreeTest: React.FC<FlatTreeProps & HeadlessFlatTreeOptions> = props => {
  const flatTree = useHeadlessFlatTree_unstable(
    flattenTreeFromElement(
      props.children ? (
        <>{props.children}</>
      ) : (
        <>
          <TreeItem itemType="branch" value="item1" data-testid="item1">
            <TreeItemLayout>level 1, item 1</TreeItemLayout>
            <Tree>
              <TreeItem itemType="leaf" value="item1__item1" data-testid="item1__item1">
                <TreeItemLayout>level 2, item 1</TreeItemLayout>
              </TreeItem>
              <TreeItem itemType="leaf" value="item1__item2" data-testid="item1__item2">
                <TreeItemLayout>level 2, item 2</TreeItemLayout>
              </TreeItem>
              <TreeItem itemType="leaf" value="item1__item3" data-testid="item1__item3">
                <TreeItemLayout>level 2, item 3</TreeItemLayout>
              </TreeItem>
            </Tree>
          </TreeItem>
          <TreeItem itemType="branch" value="item2" data-testid="item2">
            <TreeItemLayout>level 1, item 2</TreeItemLayout>
            <Tree>
              <TreeItem itemType="branch" value="item2__item1" data-testid="item2__item1">
                <TreeItemLayout>level 2, item 1</TreeItemLayout>
                <Tree>
                  <TreeItem itemType="leaf" value="item2__item1__item1" data-testid="item2__item1__item1">
                    <TreeItemLayout>level 3, item 1</TreeItemLayout>
                  </TreeItem>
                </Tree>
              </TreeItem>
            </Tree>
          </TreeItem>
        </>
      ),
    ),
    props,
  );
  return (
    <FlatTree {...props} {...flatTree.getTreeProps()} id="baseTree" aria-label="Tree">
      {Array.from(flatTree.items(), item => (
        <TreeItem key={item.value} {...item.getTreeItemProps()} />
      ))}
    </FlatTree>
  );
};
TreeTest.displayName = 'FlatTree';

describe(TreeTest.displayName!, () => {
  it('should have all but first level items hidden', () => {
    mount(<TreeTest />);
    cy.get('[data-testid="item1__item1"]').should('not.exist');
    cy.get('[data-testid="item1__item2"]').should('not.exist');
    cy.get('[data-testid="item1__item3"]').should('not.exist');
    cy.get('[data-testid="item2__item1"]').should('not.exist');
    cy.get('[data-testid="item2__item1__item1"]').should('not.exist');
  });

  it('should have all items visible', () => {
    mount(<TreeTest defaultOpenItems={['item1', 'item2', 'item2__item1']} />);
    cy.get('[data-testid="item1__item1"]').should('exist');
    cy.get('[data-testid="item1__item2"]').should('exist');
    cy.get('[data-testid="item1__item3"]').should('exist');
    cy.get('[data-testid="item2__item1"]').should('exist');
    cy.get('[data-testid="item2__item1__item1"]').should('exist');
  });

  describe('Mouse interactions', () => {
    it('should expand/collapse item on layout click', () => {
      mount(<TreeTest />);
      cy.get('[data-testid="item1__item1"]').should('not.exist');
      cy.get(`[data-testid="item1"] .${treeItemLayoutClassNames.root}`).realClick();
      cy.get('[data-testid="item1__item1"]').should('exist');
      cy.get(`[data-testid="item1"] .${treeItemLayoutClassNames.root}`).realClick();
      cy.get('[data-testid="item1__item1"]').should('not.exist');
    });
    it('should expand/collapse item on expandIcon click only', () => {
      const ExpandIconTest = () => {
        const [openItems, setOpenItems] = React.useState<Set<TreeItemValue>>(() => new Set());
        return (
          <TreeTest
            openItems={openItems}
            onOpenChange={(_, data) => {
              if (data.type === 'ExpandIconClick') {
                const newSet = new Set(openItems);
                data.open ? newSet.add(data.value) : newSet.delete(data.value);
                setOpenItems(newSet);
              }
            }}
          />
        );
      };
      mount(<ExpandIconTest />);
      cy.get('[data-testid="item1__item1"]').should('not.exist');
      cy.get(`[data-testid="item1"] .${treeItemLayoutClassNames.expandIcon}`).realClick();
      cy.get('[data-testid="item1__item1"]').should('exist');
      cy.get(`[data-testid="item1"] .${treeItemLayoutClassNames.expandIcon}`).realClick();
      cy.get('[data-testid="item1__item1"]').should('not.exist');

      cy.get(`[data-testid="item1"] .${treeItemLayoutClassNames.root}`).realClick();
      cy.get('[data-testid="item1__item1"]').should('not.exist');
    });
    it('should not expand/collapse item on actions click', () => {
      mount(
        <TreeTest id="baseTree" aria-label="Tree">
          <TreeItem itemType="branch" value="item1" data-testid="item1">
            <TreeItemLayout actions={<Button id="action">action!</Button>}>level 1, item 1</TreeItemLayout>
            <Tree>
              <TreeItem itemType="leaf" value="item1__item1" data-testid="item1__item1">
                <TreeItemLayout>level 2, item 1</TreeItemLayout>
              </TreeItem>
            </Tree>
          </TreeItem>
        </TreeTest>,
      );
      cy.get('[data-testid="item1__item1"]').should('not.exist');
      cy.get('[data-testid="item1"]').focus();
      cy.get(`#action`).realClick();
      cy.get('[data-testid="item1__item1"]').should('not.exist');
    });
  });
  describe('Keyboard interactions', () => {
    it('should expand/collapse item on Enter key', () => {
      mount(<TreeTest />);
      cy.get('[data-testid="item1"]').focus();
      cy.get('[data-testid="item1__item1"]').should('not.exist');
      cy.get(`[data-testid="item1"] .${treeItemLayoutClassNames.root}`).realPress('{enter}');
      cy.get('[data-testid="item1__item1"]').should('exist');
    });
    it('should expand item on Right key', () => {
      mount(<TreeTest />);
      cy.get('[data-testid="item1"]').focus();
      cy.get('[data-testid="item1__item1"]').should('not.exist');
      cy.get(`[data-testid="item1"] .${treeItemLayoutClassNames.root}`).realPress('{rightarrow}');
      cy.get('[data-testid="item1__item1"]').should('exist');
    });
    it('should collapse item on Left key', () => {
      mount(<TreeTest />);
      cy.get('[data-testid="item1"]').focus();
      cy.get('[data-testid="item1__item1"]').should('not.exist');
      cy.get(`[data-testid="item1"] .${treeItemLayoutClassNames.root}`).realPress('{rightarrow}');
      cy.get('[data-testid="item1__item1"]').should('exist');
      cy.get(`[data-testid="item1"] .${treeItemLayoutClassNames.root}`).realPress('{leftarrow}');
      cy.get('[data-testid="item1__item1"]').should('not.exist');
    });
    it('should focus on actions when pressing tab key', () => {
      mount(
        <TreeTest id="baseTree" aria-label="Tree">
          <TreeItem itemType="branch" value="item1" data-testid="item1">
            <TreeItemLayout actions={<Button id="action">action</Button>}>level 1, item 1</TreeItemLayout>
            <Tree>
              <TreeItem itemType="leaf" value="item1__item1" data-testid="item1__item1">
                <TreeItemLayout>level 2, item 1</TreeItemLayout>
              </TreeItem>
            </Tree>
          </TreeItem>
        </TreeTest>,
      );
      cy.focused().should('not.exist');
      cy.document().realPress('Tab');
      cy.get('[data-testid="item1"]').should('be.focused');
      cy.document().realPress('Tab');
      cy.get('#action').should('be.focused');
    });
    it('should not expand/collapse item on actions Enter/Space key', () => {
      mount(
        <TreeTest id="baseTree" aria-label="Tree">
          <TreeItem itemType="branch" value="item1" data-testid="item1">
            <TreeItemLayout actions={<Button id="action">action</Button>}>level 1, item 1</TreeItemLayout>
            <Tree>
              <TreeItem itemType="leaf" value="item1__item1" data-testid="item1__item1">
                <TreeItemLayout>level 2, item 1</TreeItemLayout>
              </TreeItem>
            </Tree>
          </TreeItem>
        </TreeTest>,
      );
      cy.focused().should('not.exist');
      cy.document().realPress('Tab');
      cy.get('[data-testid="item1"]').should('be.focused');
      cy.document().realPress('Tab');
      cy.get('#action').should('be.focused').realPress('{enter}');
      cy.get('[data-testid="item1__item1"]').should('not.exist');
      cy.get('#action').should('be.focused').realPress('Space');
      cy.get('[data-testid="item1__item1"]').should('not.exist');
    });
    it('should focus on first item when pressing tab key', () => {
      mount(<TreeTest />);
      cy.focused().should('not.exist');
      cy.document().realPress('Tab');
      cy.get('[data-testid="item1"]').should('be.focused');
    });
    it('should focus out of baseTree when pressing tab key inside baseTree.', () => {
      mount(<TreeTest />);
      cy.focused().should('not.exist');
      cy.document().realPress('Tab');
      cy.get('[data-testid="item1"]').should('be.focused');
      cy.focused().realPress('Tab');
      cy.focused().should('not.exist');
    });
    describe('Navigation', () => {
      it('should move with Up/Down keys', () => {
        mount(<TreeTest />);
        cy.get('[data-testid="item1"]').focus().realPress('{downarrow}');
        cy.get('[data-testid="item2"]').should('be.focused');
        cy.focused().realPress('Tab').should('not.exist');
      });
      it('should move with Left/Right keys', () => {
        mount(<TreeTest defaultOpenItems={['item2', 'item2__item1']} />);
        cy.get('[data-testid="item1"]').focus().realPress('{downarrow}');
        cy.get('[data-testid="item2"]').should('be.focused').realPress('{rightarrow}');
        cy.get('[data-testid="item2__item1"]').should('be.focused').realPress('{rightarrow}');
        cy.get('[data-testid="item2__item1__item1"]').should('be.focused').realPress('{leftarrow}');
        cy.get('[data-testid="item2__item1"]').should('be.focused').realPress('{leftarrow}').realPress('{leftarrow}');
        cy.get('[data-testid="item2"]').should('be.focused');
      });
      it('should move to last item with End key', () => {
        mount(<TreeTest defaultOpenItems={['item1', 'item2', 'item2__item1']} />);
        cy.get('[data-testid="item1"]').focus().realPress('{end}');
        cy.get('[data-testid="item2__item1__item1"]').should('be.focused');
      });
      it('should move to first item with Home key', () => {
        mount(<TreeTest defaultOpenItems={['item1', 'item2', 'item2__item1']} />);
        cy.get('[data-testid="item1"]').focus().realPress('{end}');
        cy.get('[data-testid="item2__item1__item1"]').should('be.focused').realPress('{home}');
        cy.get('[data-testid="item1"]').should('be.focused');
      });
    });
  });
});
