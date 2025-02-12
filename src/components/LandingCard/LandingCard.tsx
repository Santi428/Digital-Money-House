
type LandingCardProps = {
    title: string
    text: string
}

const LandingCard = ({title, text}: LandingCardProps) => {
  return (
    <div className="w-full p-5 bg-white rounded-xl text-black flex flex-col gap-2 md:p-7 md:gap-5 xl:w-[500px]">
        <div>
            <h3 className="pb-2 font-bold text-xl border-b-2 border-primary md:text-2xl xl:text-3xl">{title}</h3>
        </div>
        <div className="w-full border-b-4 border-color3"></div>
        <div className="text-sm md:text-base xl:text-lg text-balance">
            <h4>{text}</h4>
        </div>
    </div>
  )
}

export default LandingCard