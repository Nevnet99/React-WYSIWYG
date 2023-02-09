import { Button } from '@atoms/Button';
import { camelToTitleCase } from '@helpers/camelToTitleCase';
import { IComponentInEditor } from '@models/Component';
import { ContentEditor } from '@organisms/ContentEditor';
import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useEffect,
  useRef,
} from 'react';
import { Wrapper } from './StyleEditor.styles';

interface Props {
  updateCanvas: Dispatch<SetStateAction<IComponentInEditor[]>>;
  activeItem: IComponentInEditor;
}

export const StyleEditor = ({ updateCanvas, activeItem }: Props) => {
  const { id, styles } = activeItem || {};
  const { props } = activeItem || {};
  const formRef = useRef<HTMLFormElement>();

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

    const { content } = fields;
    delete fields.content;

    updateCanvas((prev) => {
      const indexToReplace = prev.findIndex(
        ({ id: storedID }) => storedID === id
      );
      const newArray = [...prev];
      newArray.splice(indexToReplace, 1, {
        ...activeItem,
        props: { ...activeItem.props, style: { ...fields }, children: content },
      });

      return newArray;
    });
  };

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [activeItem]);

  return (
    <Wrapper>
      <form
        ref={formRef}
        onSubmit={(evt: FormEventHandler<HTMLFormElement>) => handleSubmit(evt)}
      >
        {activeItem && <ContentEditor defaultValue={props?.children} />}
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
                defaultValue={(props.style && props.style[style]) || ''}
              />
            </>
          ))}
        {activeItem && <Button type="submit">Save</Button>}
      </form>
    </Wrapper>
  );
};
