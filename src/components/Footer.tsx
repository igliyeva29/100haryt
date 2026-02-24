import { Link } from "react-router-dom"
import { app, apple, google, huawei, logo } from "../assets/images"

function Footer() {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto py-10">
          <div className="mx-10">
            <img src={logo} alt="" />
            <div className="grid grid-cols-5 items-start justify-between">
              <div className="flex flex-col">
                <div className="font-semibold text-2xl pt-10 pb-5">
                  Biz barada
                </div>
                <Link to={"/aboutUs"} className="py-1">Biz barada</Link>
                <Link to={"/order"} className="py-1">Sargyt etmek</Link>
                <Link to={"/cancel"} className="py-1">Yzyna gaytarmak</Link>
                <Link to={"/hiring"} className="py-1">Ishe almak</Link>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-2xl pt-10 pb-5">
                  Hyzmatdashlyk
                </div>
                <Link to={"/sellWithUs"} className="py-1">Bizde satyn</Link>
                <Link to={"/deliveryAndPayment"} className="py-1">Eltip bermek we toleg</Link>
                <Link to={"/cooperation"} className="py-1">Hyzmatdashlyk</Link>
                <Link to={"/email"} className="py-1">E-pochtalarymyz</Link>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-2xl pt-10 pb-5 w-40">
                  Komek we goldaw
                </div>
                <Link to={"/customerServices"} className="py-1">Mushderi hyzmatymyz</Link>
                <Link to={"/answerQuestion"} className="py-1">Sorag-jogap</Link>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-2xl pt-10 pb-5">
                  Gizlinlik yorelgesi
                </div>
                <Link to={"/usageRules"} className="py-1">Ulamysh duzgunleri</Link>
                <Link to={"/privacy"} className="py-1">Gizlinlik yorelgeler</Link>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-2xl pt-10 pb-5">
                  Habarlashmak
                </div>
                <Link to={"/phone"} className="py-1">+993 65 724311</Link>
                <Link to={"/mail"} className="py-1">info@100haryt.com</Link>
                <Link to={"/feedback"} className="bg-custom-green/20 mr-20 my-1 rounded-lg py-2 text-center text-custom-green ">Bize hat galdyryn</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-custom-bg">
        <div className="container text-gray-400  mx-auto py-5">
          <div className="mx-10">
            <div className="grid grid-cols-3 items-center">
              <div>
                © Copyright 2016-2026 | 100haryt HJ
              </div>
              <div>
                Made with ❤️ by 100haryt
              </div>
              <div className="flex w-32">
                <img src={apple} alt="" />
                <img className="mx-3" src={google} alt="" />
                <img src={huawei} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer