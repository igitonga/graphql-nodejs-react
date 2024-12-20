import { useRouter } from 'next/router'
import Image from 'next/image'
interface PropsType {
    title: string;
    rating: number;
    imageUrl: string;
    description: string;
    id: string;
}

const GameCard = (props: PropsType) => {
    const router = useRouter();

    const handleRedirectToGame = (id: string) => {
        router.push(`/game/${id}`)
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer" onClick={() => handleRedirectToGame(props.id)}>
            <div className='relative' style={{ height: '180px' }}>
                <Image className="object-cover" src={props.imageUrl} fill alt="Game's poster"/>
            </div>
            <div className="px-4 py-2">
                <div className="font-bold text-lg">{props.title}</div>
            </div>
            <div className="px-4 pb-2 flex justify-between">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                    {props.rating ? `${props.rating} stars` : "No Reviews"}
                </span>
            </div>
        </div>
    )
}

export default GameCard