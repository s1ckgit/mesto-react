function Card( {card, onClick} ) {
    return (
        <div className="element">
            <button type="button" className="element__delete"></button>
            <img src={card.link} alt={card.name} className="element__img" onClick={() => onClick(card)}/>
            <div className="element__block">
                <h3 className="element__name">{card.name}</h3>
                <div className="element__likes">
                <button type="button" className="element__like"></button>
                <p className="element__likes-counter">{card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card