import * as React from 'react';
import {
  TagPicker,
  TagPickerList,
  TagPickerButton,
  TagPickerControl,
  TagPickerProps,
  TagPickerOption,
  TagPickerGroup,
} from '@fluentui/react-tag-picker-preview';
import { Tag, Avatar } from '@fluentui/react-components';

const options = [
  'John Doe',
  'Jane Doe',
  'Max Mustermann',
  'Erika Mustermann',
  'Pierre Dupont',
  'Amelie Dupont',
  'Mario Rossi',
  'Maria Rossi',
];

export const Button = () => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const onOptionSelect: TagPickerProps['onOptionSelect'] = (e, data) => {
    setSelectedOptions(data.selectedOptions);
  };

  return (
    <div style={{ maxWidth: 400 }}>
      <TagPicker onOptionSelect={onOptionSelect} selectedOptions={selectedOptions}>
        <TagPickerControl>
          <TagPickerGroup>
            {selectedOptions.map(option => (
              <Tag
                key={option}
                shape="rounded"
                media={<Avatar aria-hidden name={option} color="colorful" />}
                value={option}
              >
                {option}
              </Tag>
            ))}
          </TagPickerGroup>
          <TagPickerButton aria-label="Select Employees" />
        </TagPickerControl>

        <TagPickerList>
          {options
            .filter(option => selectedOptions.indexOf(option) < 0)
            .map(option => (
              <TagPickerOption
                secondaryContent="Microsoft FTE"
                media={<Avatar aria-hidden name={option} color="colorful" />}
                value={option}
                key={option}
              >
                {option}
              </TagPickerOption>
            ))}
        </TagPickerList>
      </TagPicker>
    </div>
  );
};

Button.parameters = {
  docs: {
    description: {
      story: `
The component \`TagPickerButton\` renders an "invisible" button that can be used instead of \`TagPickerInput\` to opt-out of a text field and to provide something similar to a [\`Dropdown\`](https://react.fluentui.dev/?path=/docs/components-dropdown--default) behavior.
      `,
    },
  },
};
