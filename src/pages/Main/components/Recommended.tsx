import { Link } from "react-router-dom"
import { cleaning, electronics, forKids, furniture, healthAndBeauty, homeComfort, offiseStuff, parfums } from "../../../assets/images"
import { useTranslation } from "react-i18next"

function Recommended() {
    const { t } = useTranslation()

    return (
        <div className="container mx-auto py-5">
            <div className="">
                <div className="text-2xl font-semibold text-black pb-5">{t(('recommended'))}</div>
                <div className="grid grid-cols-4 gap-3">
                    <Link to={"#"} className="relative">
                        <img src={healthAndBeauty} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-25 text-black font-semibold text-xl">
                            Saglyk we gozellik
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={forKids} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-25 text-black font-semibold text-xl">
                            Korpelerimiz uchin!
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={furniture} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-25 text-black font-semibold text-xl">
                            Mebeller
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={parfums} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-25 text-black font-semibold text-xl">
                            Parfumeriya
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={offiseStuff} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-50 text-black font-semibold text-xl">
                            Mekdep we ofis harytlary
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={homeComfort} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 text-black font-semibold text-xl">
                            Oyde rahatlyk
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={cleaning} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-25 text-black font-semibold text-xl">
                            Ashhana arassachylygy
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={electronics} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-25 text-black font-semibold text-xl">
                            Elektronika
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Recommended