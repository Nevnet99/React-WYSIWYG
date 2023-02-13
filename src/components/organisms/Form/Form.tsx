import { Grid } from '@atoms/Grid';
import { IComponentInEditor } from '@models/Component';
import { Wrapper } from './Form.styles';

interface Props {
  id: string;
  customProps?: IComponentInEditor['props']['customProps'];
  
}

export const Form = ({ id, customProps, ...rest }: Props) => {
  const { url } = customProps || {};
  const { style } = rest;

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
