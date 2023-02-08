import { Button } from '@atoms/Button';
import { camelToTitleCase } from '@helpers/camelToTitleCase';
import { IComponent, IComponentInEditor } from '@models/Component';
import { Dispatch, SetStateAction, useState } from 'react';
import { Wrapper } from './StyleEditor.styles';

interface Props {
  updateCanvas: Dispatch<SetStateAction<IComponentInEditor[]>>;
  activeItem: IComponentInEditor;
}

export const StyleEditor = ({ updateCanvas, activeItem }: Props) => {
  const [newStyles, setNewStyles] = useState<Pick<IComponent, 'styles'>>([]);
  const { id, styles, name } = activeItem || {};

  console.log(activeItem);

  const handleSubmit = (evt: SubmitEvent) => {
    evt.preventDefault();

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
    // find and replace current active item in the previous array

    updateCanvas((prev) => {
      const indexToReplace = prev.findIndex(
        ({ id: storedID }) => storedID === id
      );
      const newArray = [...prev];
      newArray.splice(indexToReplace, 1, {
        ...activeItem,
        props: { ...activeItem.props, style: { ...fields } },
      });

      return newArray;
    });
  };

  return (
    <Wrapper>
      <h2>
        {!activeItem
          ? 'Please select a component to start editing'
          : `Editing: ${name}`}
      </h2>

      <form onSubmit={(evt, values) => handleSubmit(evt, values)}>
        {styles &&
          styles?.map(({ style, type }) => (
            <>
              <label key={style} htmlFor={style}>
                {camelToTitleCase(style)}
              </label>
              <input name={style} id={style} type={type} />
            </>
          ))}
        {activeItem && <Button type="submit">Save</Button>}
      </form>
    </Wrapper>
  );
};
