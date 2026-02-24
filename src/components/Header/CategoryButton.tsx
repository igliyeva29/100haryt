import { BiCategory } from "react-icons/bi";

type ButtonType = {
    action?: () => void;
    active?: boolean;
}

function CategoryButton({ action, active }: ButtonType) {

    return (
        <div>
            <button onClick={action} className={"flex items-center text-custom-green "}>
                <BiCategory size={24} className="text-custom-green font-bold mr-3" />
                <span>Kategoriyalar</span>
            </button>
        </div>
    )
}

export default CategoryButton