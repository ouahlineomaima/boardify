import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";

interface BoradProps{
   title: string;
   id: string 
}
const Board = ({title, id}:BoradProps) => {
    const deleteBoardById = deleteBoard.bind(null, id)
  return (
    <form action={deleteBoardById} className="flex items-center gap-x-2">
        <p>

            Board title: {title}
        </p>
        <Button type="submit" variant="destructive" size="sm">Delete</Button>
          </form>
  )
}

export default Board