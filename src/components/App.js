import Header from './Header'
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';
import { useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false),
        [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false),
        [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false),
        [selectedCard, setSelectedCard] = useState(null)

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
}

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(null)
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main onCardClick={handleCardClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onEditProifle={handleEditProfileClick}/>
        <Footer />
        <PopupWithForm name='profile' title='Редактировать профиль' buttonText='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <fieldset className="popup__fieldset">
            <input
              minLength={2}
              maxLength={40}
              required=""
              name="name"
              id="name"
              type="text"
              placeholder="Имя"
              className="popup__input popup__input_profile"
            />
            <span className="input-error input-error_name" />
          </fieldset>
          <fieldset className="popup__fieldset">
            <input
              minLength={2}
              maxLength={200}
              required=""
              name="about"
              id="about"
              type="text"
              placeholder="О себе"
              className="popup__input popup__input_profile"
            />
            <span className="input-error input-error_about" />
          </fieldset>
        </PopupWithForm>
        <PopupWithForm title='Новое место' name='card' buttonText='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__fieldset">
          <input
            required=""
            minLength={2}
            maxLength={30}
            name="name"
            id="title"
            type="text"
            placeholder="Название"
            className="popup__input popup__input_card"
          />
          <span className="input-error input-error_title" />
        </fieldset>
        <fieldset className="popup__fieldset">
          <input
            required=""
            name="link"
            id="link"
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_card"
          />
          <span className="input-error input-error_link" />
        </fieldset>
        </PopupWithForm>
        <PopupWithForm title='Обновить аватар' name='avatar' buttonText='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <fieldset className="popup__fieldset">
            <input
              required=""
              name="avatar"
              id="avatar_link"
              type="url"
              placeholder="Ссылка на аватар"
              className="popup__input popup__input_avatar"
            />
            <span className="input-error input-error_avatar_link" />
          </fieldset>
        </PopupWithForm>
        <PopupWithForm title='Вы уверены?' name='delete' buttonText='Да'>
        </PopupWithForm>
        <PopupWithImage card={selectedCard} onClose={closeAllPopups}/>
      </div>
    </>

  );
}

export default App;
