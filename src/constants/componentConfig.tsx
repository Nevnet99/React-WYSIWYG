const baseStyles = [
  { style: 'color', type: 'text' },
  { style: 'fontSize', type: 'text' },
  { style: 'fontWeight', type: 'text' },
  { style: 'textAlign', type: 'text' },
  { style: 'marginTop', type: 'text' },
  { style: 'marginBottom', type: 'text' },
  { style: 'marginLeft', type: 'text' },
  { style: 'marginRight', type: 'text' },
  { style: 'paddingTop', type: 'text' },
  { style: 'paddingBottom', type: 'text' },
  { style: 'paddingLeft', type: 'text' },
  { style: 'paddingRight', type: 'text' },
];

const componentConfig = {
  Button: {
    componentType: 'Button',
    children: 'Button',
    props: {
      editableProps: {
        type: 'button',
      },
    },
    styles: [
      ...baseStyles,
      { style: 'borderRadius', type: 'text' },
      { style: 'height', type: 'text' },
      { style: 'width', type: 'text' },
    ],
  },
  Typography: {
    componentType: 'Typography',
    children: 'Example Typography',
    props: {},
    styles: [
      ...baseStyles,
      { style: 'textTransform', type: 'text' },
      { style: 'height', type: 'text' },
      { style: 'width', type: 'text' },
    ],
  },
  Grid: {
    componentType: 'Grid',
    props: {
      customProps: {
        cols: 3,
        rows: 1,
      },
    },
    styles: [
      ...baseStyles,
      { style: 'height', type: 'text' },
      { style: 'width', type: 'text' },
      { style: 'gap', type: 'text' },
    ],
  },
  Input: {
    componentType: 'Input',
    props: {
      editableProps: {
        name: 'input',
        type: 'text',
        label: 'Example label',
      },
    },
    styles: [...baseStyles],
  },
  Form: {
    componentType: 'Form',
    props: {
      editableProps: {},
      customProps: {
        url: 'http://example.com',
        cols: 1,
        rows: 4,
      },
    },
    styles: [
      ...baseStyles,
      {
        style: 'width',
        type: 'text',
      },
    ],
  },
};

export default componentConfig;
