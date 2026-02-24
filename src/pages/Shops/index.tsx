import { Link } from "react-router-dom"
import { animals, auto, building, cleaning, clothes, electronics, forKids, furniture, garden, gifts, grocery, healthAndBeauty, homeComfort, jewelery, offiseStuff, parfums, pharmacy, sport } from "../../assets/images"

function index() {
    return (
        <div className="container mx-auto py-5">
            <div className="m-10">
                <div className="grid grid-cols-4 gap-3">
                    <Link to={"#"} className="relative">
                        <img src={electronics} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-25 text-black font-semibold text-lg">
                            Elektronika
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={clothes} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-30 text-black font-semibold text-lg">
                            Egin-eshik we aksesuar
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={jewelery} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-50 text-black font-semibold text-lg">
                            Shay-sepler we bujiteriyalar
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={gifts} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-25 text-black font-semibold text-lg">
                            Sowgatlyk harytlar
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={forKids} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-25 text-black font-semibold text-lg">
                            Chagalar dunyasi
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={grocery} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-50 text-black font-semibold text-lg">
                            Azyk harytlar
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={healthAndBeauty} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-25 text-black font-semibold text-lg">
                            Saglyk we gozellik
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={offiseStuff} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-40 text-black font-semibold text-lg">
                            Okuw we ofis esbaplary
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={homeComfort} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-25 text-black font-semibold text-lg">
                           Hojalyk harytlar
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={garden} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-25 text-black font-semibold text-lg">
                           Bagchylyk
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={pharmacy} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-25 text-black font-semibold text-lg">
                           Dermanhana
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={auto} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-50 text-black font-semibold text-lg">
                           Awto harytlar
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={animals} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-40 text-black font-semibold text-lg">
                           Oy haywanlar uchin
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={sport} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-40 text-black font-semibold text-lg">
                            Sport we dynch alysh
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={furniture} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-40 text-black font-semibold text-lg">
                            Mebel we oy bezegleri 
                        </div>
                    </Link>
                    <Link to={"#"} className="relative">
                        <img src={building} className="rounded-2xl overflow-hidden transition-all" alt="" />
                        <div className="absolute top-4 left-4 w-25 text-black font-semibold text-lg">
                            Gurlushyk harytlary
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default index