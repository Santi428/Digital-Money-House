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
        <main className="relative w-full p-5 flex flex-col justify-between grow h-screen md:p-20 2xl:bg-[50%_25%]">
            <section className="w-2/3 pt-10 mb-10 md:w-1/2 xl:max-w-[600px]">
                <Hero />
            </section>
            <section className="flex flex-col gap-5 self-center z-20 xl:flex-row">
                <LandingCard title="Transferí dinero" text={info.card1} />
                <LandingCard title="Pago de servicios" text={info.card2} />
            </section>
        </main>
        <div className="absolute bottom-0 left-0 w-full h-2/5 rounded-t-2xl bg-color3 z-10 md:h-1/3 xl:h-1/4"></div>
        <Footer />
    </>

  )
}

export default LandingPage