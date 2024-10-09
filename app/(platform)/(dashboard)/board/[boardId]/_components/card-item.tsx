"use client";

import { Card } from "@prisma/client";
import { Draggable } from "@hello-pangea/dnd";
import { useCardModal } from "@/hooks/use-card-model";

interface CardItemProps {
  index: number;
  data: Card;
}

export const CardItem = ({ data, index }: CardItemProps) => {
    const cardModal = useCardModal()
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          role="button"
          onClick={() => cardModal.onOpen(data.id)}
          className="truncate border-2 border-transparent hover:border-black py-2 px-3 ttext-sm bg-white rounded-sm shadow-sm"
        >
          {data.title}
        </div>
      )}
    </Draggable>
  );
};
