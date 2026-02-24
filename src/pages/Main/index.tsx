import Banner from "./components/Banner"
import CategoryMain from "./components/CategoryMain"
import Recommended from "./components/Recommended"
import Scan from "./components/Scan"
import Services from "./components/Services"
import categoryProducts from "../../data/categoryWithProduct.json"


function index() {
  return (
    <>
      <Banner />
      <div className="container mx-auto">
        <div className="mx-10">
          <Recommended />
          <Services />
          {
            categoryProducts.map((category, index) => (
              <CategoryMain key={"main-category-" + index} data={category} />
            ))
          }
          <Scan />

        </div>
      </div>
    </>
  )
}

export default index