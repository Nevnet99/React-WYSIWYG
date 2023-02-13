import { CustomPropOptions, IComponent } from '@models/Component';
import { Wrapper } from './Image.styles';

interface Props extends IComponent {
  customProps: Partial<CustomPropOptions>;
}

export const Image = ({ customProps, ...props }: Props) => {
  const { src, alt } = customProps || {};

  return <Wrapper src={src} alt={alt} {...props} />;
};
