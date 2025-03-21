import { Plus } from "lucide-react"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"

const Stocks = () => {
  return (
    <section className="flex flex-col w-full h-full">
        <header className="border-b-2 p-4 pr-5 flex justify-between items-center">
            <p className="font-bold text-xl">Stocks</p>
            <Link to={"/add-stock"}>
              <Button className="cursor-pointer">
                <Plus size={20} />
                Add New Stock
              </Button>
            </Link>
        </header>
        <div className="flex-1 w-full bg-amber-100"></div>
    </section>
  )
}

export default Stocks