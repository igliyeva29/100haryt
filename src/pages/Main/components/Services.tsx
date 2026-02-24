import { Link } from "react-router-dom"
import { service1, service2, service3, service4 } from "../../../assets/images"

function Services() {
  return (
    <div className="container mx-auto">
      <div className="">
        <div className="text-2xl font-semibold text-black pb-5">Hyzmatlar</div>
        <div className="grid grid-cols-4 gap-3">
          <Link to={"#"}>
            <img src={service1} className="rounded-xl overflow-hidden" alt="" />
          </Link>
          <Link to={"#"}>
            <img src={service2} className="rounded-xl overflow-hidden" alt="" />
          </Link>
          <Link to={"#"}>
            <img src={service3} className="rounded-xl overflow-hidden" alt="" />
          </Link>
          <Link to={"#"}>
            <img src={service4} className="rounded-xl overflow-hidden" alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services