"use client";

import { Card } from "@prisma/client";

interface CardItemProps{
    index: number
    data: Card;
}

export const CardItem = ({data, index}: CardItemProps)=>{
    return (
        <div role="button" className="truncate border-2 border-transparent hover:border-black py-2 px-3 ttext-sm bg-white rounded-sm shadow-sm">
            {data.title}
            </div>
    )
}