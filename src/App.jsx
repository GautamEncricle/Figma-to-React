import Navbar from "./component/Navbar"
import Header from "./component/Header"
import ShopBySystem from "./component/ShopBySystem"
import ShopByCase from "./component/ShopByCase"
import Journey from "./component/Journey"
import LoyaltyProgram from "./component/Loyalty"
import SecureSection from "./component/SecureSection"
import AboutUs from "./component/About"
import DentalTrust from "./component/DentalTrust"
import Testimonials from "./component/Testimonials"
import ChatBox from "./component/ChatBox"
import Footer from "./component/Footer"

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <ShopBySystem />
      <ShopByCase />
      <Journey />
      <LoyaltyProgram />
      <SecureSection />
      <DentalTrust />
      <AboutUs />
      <Testimonials />
      <ChatBox />
      <Footer />
    </>
  )
}

export default App
