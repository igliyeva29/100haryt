import { BiQrScan } from "react-icons/bi"
import { app, apple, google, huawei } from "../../../assets/images"

function Scan() {
    return (
        <div className="relative container mx-auto bg-linear-to-r from-blue-100/70 to-purple-200/70 my-30 rounded-lg">
            <div className="grid grid-cols-2 items-center px-20 py-5">
                <div className="flex flex-col w-100">
                    <div className="text-3xl font-bold pt-5">
                        Mobil programmasyny telefonyňyza ýükläp alyň
                    </div>
                    <div className="py-1">
                        Gündelik arzanladyşlary we aksiýalary bilen çalt eltip bermek hyzmaty bolan 100haryt.com programmasy smartfonlaryňyzda elýeterlidir. Programmany App Store ýa-da Google Play-den ýükläp bilersiňiz.
                    </div>
                    <div className="flex items-center">
                        <BiQrScan size={100} />
                        <div className="w-70 ml-5 text-sm">Programmany ýüklemek üçin telefonyňyzyň kamerasynyň kömegi bilen QR kody skan ediň</div>
                    </div>
                    <div className="flex py-5">
                        <img src={apple} alt="" />
                        <img className="mx-3" src={google} alt="" />
                        <img src={huawei} alt="" />
                    </div>
                </div>
                <div>
                    <img className="absolute h-130 w-130 -bottom-6" src={app} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Scan