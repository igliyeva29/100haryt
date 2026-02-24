import Navbar from "./Navbar"
import TopBanner from "./TopBanner"

function Header() {
  return (
    <>
      <header>
        <TopBanner />
      </header>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
    </>
  )
}

export default Header