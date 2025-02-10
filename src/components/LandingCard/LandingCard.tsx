
type LandingCardProps = {
    title: string
    text: string
}

const LandingCard = ({title, text}: LandingCardProps) => {
  return (
    <div className="bg-white">
        <div>
            <h2>{title}</h2>
        </div>
        <hr />
        <div>
            <h4>{text}</h4>
        </div>
    </div>
  )
}

export default LandingCard