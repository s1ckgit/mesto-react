import cn from 'classnames'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts/CurrentUserContext'

function EditProfilePopup( { isOpen, onClose, onUpdateUser } ) {
  const [name, setName] = useState(''),
        [description, setDescription] = useState('')

  const user = useContext(UserContext)

  useEffect(() => {
    setName(user?.name)
    setDescription(user?.about)
  }, [user])

  function changeName(e) {
    setName(e.target.value)
  }

  function changeDescription(e) {
    setDescription(e.target.value)
  }

  function handleSumbit(e) {
    e.preventDefault()
    onUpdateUser({
      name,
      about: description
    })
  }

  return (
      <div className={cn(`popup popup_profile`, {
          'popup_opened': isOpen === true
      })}>
        <div className={`popup__container popup__container_profile`}>
          <button type="button" className={`popup__close popup__close_profile`} onClick={onClose}/>
          <h2 className={`popup__title popup__title_profile`}>
            Редактировать профиль
          </h2>
          <form
            name={`popupFormProfile`}
            className={`popup__form popup__form_profile`}
            id={`popupFormProfile`}
            noValidate=""
            onSubmit={handleSumbit}
          >
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
                onChange={changeName}
                value={name || ''}
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
                onChange={changeDescription}
                value={description || ''}
              />
              <span className="input-error input-error_about" />
            </fieldset>
            <button type="submit" className={`popup__button popup__button_profile`}>
              Сохранить
            </button>
          </form>
        </div>
      </div>
  )
}

export default EditProfilePopup
