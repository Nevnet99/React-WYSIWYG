import { Grid } from '@atoms/Grid';
import { Wrapper } from './Form.styles';

interface Props {}

export const Form: Props = ({ id, customProps, ...rest }) => {
  const { url } = customProps || {};
  const { style } = rest;
  console.log(style, 'STYLE');

  const handleSubmit = (event: FormEventHandler<HTMLFormElement>) => {
    event.preventDefault();
    const fields = Array.prototype.slice
      .call(event.target)
      .filter((el) => el.name)
      .reduce(
        (form, el) => ({
          ...form,
          [el.name]: el.value,
        }),
        {}
      );

    window.alert(
      `example post based on config ${url} ${JSON.stringify(fields, null, 2)}`
    );
  };

  return (
    <Wrapper onSubmit={handleSubmit} style={style}>
      <Grid id={id} customProps={customProps} {...rest} />
    </Wrapper>
  );
};
