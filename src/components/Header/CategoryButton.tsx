import { BiCategory } from "react-icons/bi";
import { useTranslation } from "react-i18next";

type ButtonType = {
    action?: () => void;
    active?: boolean;
}

function CategoryButton({ action, active }: ButtonType) {
const {t} = useTranslation();

    return (
        <div>
            <button onClick={action} className={"flex items-center text-custom-green "}>
                <BiCategory size={24} className="text-custom-green font-bold mr-3" />
                <span>{(t('categories'))}</span>
            </button>
        </div>
    )
}

export default CategoryButton