import Footer from "@/components/Footer/Footer"
import Header from "@/components/header/Header"
import Hero from "@/components/Hero/Hero"
import LandingCard from "@/components/LandingCard/LandingCard"

const info = { 
    card1: "Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como también recibir transferencias y nuclear tu capital en nuestra billetera virtual",
    card2: "Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel"
}

const LandingPage = () => {
  return (
    <>
        <Header />
        <div>
            <Hero />
            <LandingCard title="Transferí dinero" text={info.card1} />
            <LandingCard title="Pago de servicios" text={info.card2} />
        </div>
        <Footer />
    </>
  )
}

export default LandingPage