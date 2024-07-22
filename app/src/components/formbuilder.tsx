'use client'
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import TextInput from './textinput';
import CheckboxInput from './checkbox';
import RadioButton from './radiobutton';
import Dropdown from './dropdown';

const initialElements = [
  { id: '1', type: 'text', label: 'Text Input' },
  { id: '2', type: 'checkbox', label: 'Checkbox' },
  { id: '3', type: 'radio', label: 'Radio Button', options: ['Option 1', 'Option 2'] },
  { id: '4', type: 'dropdown', label: 'Dropdown', options: ['Option 1', 'Option 2'] },
];

const FormBuilder = () => {
  const [elements, setElements] = useState(initialElements);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedElements = Array.from(elements);
    const [removed] = reorderedElements.splice(result.source.index, 1);
    reorderedElements.splice(result.destination.index, 0, removed);

    setElements(reorderedElements);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="form-builder">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-4">
            {elements.map((element, index) => (
              <Draggable key={element.id} draggableId={element.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="p-4 border rounded-md"
                  >
                    {element.type === 'text' && <TextInput label={element.label} />}
                    {element.type === 'checkbox' && <CheckboxInput label={element.label} />}
                    {element.type === 'radio' && <RadioButton label={element.label} options={element.options || []} />}
                    {element.type === 'dropdown' && <Dropdown label={element.label} options={element.options || []} />}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default FormBuilder;