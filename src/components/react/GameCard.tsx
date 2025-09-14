import './suggention-swiper.css'

interface Props {
  title: string,
  date: string,
  price: number,
  image: string
}

export default function GameCard(props: Props) {
  return (
    <article className="w-62 flex flex-col h-[400px] border border-gray-300 rounded-lg">
      <div className="w-full h-[100%] cursor-pointer overflow-hidden">
        <img src={props.image} alt="Imagen Juego" className="bg-cover object-fill hover:transition hover:scale-110" />
      </div>
      <div className="flex flex-col justify-between h-3/6 text-gray text-balance p-2 mt-6">
        <div className="flex flex-col gap-2">
          <span className="text-xl">{props.title}</span>
          <span className="text-xs font-medium">{props.date}</span>
        </div>

        <span className="text-xl">${props.price}</span>
      </div>
    </article>
  )
}
