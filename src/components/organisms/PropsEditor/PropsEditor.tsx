import { Button } from '@atoms/Button';
import { camelToTitleCase } from '@helpers/camelToTitleCase';
import { useEditor } from '@hooks/useEditor';
import { useEffect, useRef } from 'react';
import { StyledLabel, Wrapper } from './PropsEditor.styles';

export const PropsEditor: Props = () => {
  const { activeBlock, updateBlock } = useEditor();
  const { id } = activeBlock || {};
  const { props } = activeBlock || {};

  const editableProps =
    props?.editableProps && Object.keys(props?.editableProps);
  const customPropsLabels =
    props?.customProps && Object.keys(props?.customProps);

  const formRef = useRef<HTMLFormElement>();

  const handleSubmit = (
    event: FormEventHandler<HTMLFormElement>,
    type: 'editable' | 'custom'
  ) => {
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

    delete fields.content;

    updateBlock(
      id,
      {
        ...activeBlock,
        props: {
          ...activeBlock.props,
          ...(type === 'custom'
            ? { customProps: fields }
            : { editableProps: fields }),
        },
      },
      activeBlock?.gridId
    );
  };

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [activeBlock]);

  return (
    <Wrapper>
      <h2>Props editor</h2>
      <form
        ref={formRef}
        onSubmit={(evt: FormEventHandler<HTMLFormElement>) =>
          handleSubmit(evt, 'editable')
        }
      >
        {editableProps &&
          editableProps.map((label) => {
            const value = props?.editableProps[label];

            return (
              <StyledLabel key={label} htmlFor={label}>
                {label}
                <input name={label} type="text" defaultValue={value || ''} />
              </StyledLabel>
            );
          })}

        <Button type="submit">Update editable props</Button>
      </form>

      <form
        onSubmit={(evt: FormEventHandler<HTMLFormElement>) =>
          handleSubmit(evt, 'custom')
        }
      >
        {customPropsLabels &&
          customPropsLabels.map((label) => {
            const value = props?.customProps[label];

            return (
              <StyledLabel key={label} htmlFor={label}>
                {camelToTitleCase(label)}
                <input name={label} type="text" defaultValue={value || ''} />
              </StyledLabel>
            );
          })}
        <Button type="submit">Update custom props</Button>
      </form>
    </Wrapper>
  );
};
