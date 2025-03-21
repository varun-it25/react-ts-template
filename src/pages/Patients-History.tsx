import { Plus } from "lucide-react"
import { Button } from "../components/ui/button"

const Patients_History = () => {
  return (
    <section className="flex flex-col w-full h-full">
        <header className="border-b-2 p-4 pr-5 flex justify-between items-center">
            <p className="font-bold text-xl">Patients History</p>
            <Button className="cursor-pointer">
                <Plus size={20} />
                Add New Patient
            </Button>
        </header>
        <div className="flex-1 w-full bg-amber-100"></div>
    </section>
  )
}

export default Patients_History