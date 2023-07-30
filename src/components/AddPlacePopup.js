import cn from 'classnames'
import { useRef } from 'react'

function AddPlacePopup( {isOpen, onClose, onAddPlace} ) {
  const linkInput = useRef()
  const nameInput = useRef()
  const form = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    onAddPlace({
      name: nameInput.current.value,
      link: linkInput.current.value
    })
    form.current.reset()
  }

  return (
      <div className={cn(`popup popup_card`, {
          'popup_opened': isOpen === true
      })}>
        <div className={`popup__container popup__container_card`}>
          <button type="button" className={`popup__close popup__close_card`} onClick={onClose}/>
          <h2 className={`popup__title popup__title_card`}>
            Новое место
          </h2>
          <form
            name={`popupFormCard`}
            className={`popup__form popup__form_card`}
            id={`popupFormCard`}
            noValidate=""
            onSubmit={handleSubmit}
            ref={form}
          >
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
                ref={nameInput}
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
                ref={linkInput}
              />
              <span className="input-error input-error_link" />
            </fieldset>
            <button type="submit" className={`popup__button popup__button_card`}>
              Создать
            </button>
          </form>
        </div>
      </div>
  )
}

export default AddPlacePopup
