import React from "react"
import api from '../utils/api'
import Card from "./Card"

function Main({ onEditAvatar, onEditProifle, onAddPlace, onCardClick }) {
    const [userAvatar, setUserAvatar] = React.useState(),
          [userName, setUserName] = React.useState(),
          [userDescription, setUserDescription] = React.useState()

    const [cards, setCards] = React.useState([])
    React.useEffect(() => {
      api.getUserInfo()
        .then(userData => {
          setUserName(userData.name)
          setUserDescription(userData.about)
          setUserAvatar(userData.avatar)
        })
      
      api.getInitialCards()
        .then(cardsData => {
          setCards(cardsData)
        })
    }, [])
    return (
        <main>
          <section className="profile">
            <div onClick={onEditAvatar} className="profile__avatar-wrapper">
              <img
                src={userAvatar}
                alt="Аватар"
                className="profile__avatar"
              />
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              <button onClick={onEditProifle} type="button" className="profile__edit" />
              <p className="profile__about">{userDescription}</p>
            </div>
            <button onClick={onAddPlace} type="button" className="profile__add" />
          </section>
          <section className="elements">
            {cards.map(cardData => {
              return (
                <Card onClick={onCardClick} key={cardData._id} card={cardData}/>
              )
            })}
          </section>
        </main>
    )
}

export default Main