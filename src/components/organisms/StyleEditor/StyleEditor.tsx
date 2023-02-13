import { Button } from '@atoms/Button';
import { camelToTitleCase } from '@helpers/camelToTitleCase';
import { useEditor } from '@hooks/useEditor';
import { ContentEditor } from '@organisms/ContentEditor';
import { FormEventHandler, useEffect, useRef } from 'react';
import { Wrapper } from './StyleEditor.styles';

export const StyleEditor = () => {
  const { activeBlock, updateBlock, getBlock } = useEditor();
  const { styles, gridId } = activeBlock || {};
  const { props } = activeBlock || {};
  const formRef = useRef<HTMLFormElement>();

  const handleSubmit = (event: FormEventHandler<HTMLFormElement>) => {

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

    const { content } = fields;

    if (content) {
      delete fields.content;
    }

    updateBlock(
      activeBlock.id,
      {
        ...(content && { children: content }),
        props: {
          ...activeBlock.props,
          style: { ...fields },
        },
      },
      gridId
    );
  };

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [activeBlock]);

  return (
    <Wrapper>
      <h2>
        {!activeBlock
          ? 'Please select a component to start editing'
          : `Editing: ${activeBlock?.componentType}`}
      </h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
      >
        {activeBlock && <ContentEditor defaultValue={props?.children} />}
        {styles &&
          styles?.map(({ style, type }) => (
            <>
              <label key={style} htmlFor={style}>
                {camelToTitleCase(style)}
              </label>
              <input
                name={style}
                id={style}
                type={type}
                defaultValue={(props?.style && props.style[style]) || ''}
              />
            </>
          ))}
        {activeBlock && <Button type="submit">Save</Button>}
      </form>
    </Wrapper>
  );
};
