import "./style.css"

import { Text } from "../../atoms/text"
import { Button } from "../../atoms/button"
import { Image } from "../../atoms/images"
import { Tag } from "../../atoms/tags"

export const Card = ({
    card_img,
    card_name,
    card_id,
    card_types,
    card_stats,
}) => {
    const stats = () => {
        let stats = [] 
        card_stats.forEach(stat => {
            stats.push(<Tag variant="stat">{stat.name} = {stat.value}</Tag>)
        });
        return stats
    }
    
    const types = () => {
        let types = []
        card_types.forEach(type => {
            types.push(<Tag variant="type">{type}</Tag>)

        });
        return types
    }

    return (
        <div className="card">
            <Text variant="caption" className="bold">Id = {card_id}</Text>
            <Image variant="card" src={card_img}/>
            <div className="card-info">
                <Text variant="body">{card_name}</Text>
                <div className="types">
                    {types()}
                </div>
                <div className="stats">
                    {stats()}
                </div>
                
            </div>
            <Button size="small"> Detalhar </Button>
        </div>
    )
}