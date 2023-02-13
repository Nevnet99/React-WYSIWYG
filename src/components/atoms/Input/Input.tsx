import { StyledInput } from './Input.styles';

export const Input = ({ name, type, label, ...props }) => (
  <label>
    {label}
    <StyledInput name={name} type={type} {...props} />
  </label>
);
