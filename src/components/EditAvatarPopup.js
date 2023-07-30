import cn from 'classnames'
import { useRef } from 'react'

function EditAvatarPopup( {isOpen, onClose, onUpdateAvatar} ) {
  const avatarInput = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    onUpdateAvatar({
      avatar: avatarInput.current.value
    })
  }

  return (
      <div className={cn(`popup popup_avatar`, {
          'popup_opened': isOpen === true
      })}>
        <div className={`popup__container popup__container_avatar`}>
          <button type="button" className={`popup__close popup__close_avatar`} onClick={onClose}/>
          <h2 className={`popup__title popup__title_avatar`}>
            Обновить аватар
          </h2>
          <form
            name={`popupFormAvatar`}
            className={`popup__form popup__form_avatar`}
            id={`popupFormAvatar`}
            noValidate=""
            onSubmit={handleSubmit}
          >
            <fieldset className="popup__fieldset">
              <input
                required=""
                name="avatar"
                id="avatar_link"
                type="url"
                placeholder="Ссылка на аватар"
                className="popup__input popup__input_avatar"
                ref={avatarInput}
              />
              <span className="input-error input-error_avatar_link" />
            </fieldset>
            <button type="submit" className={`popup__button popup__button_avatar`}>
              Сохранить
            </button>
          </form>
        </div>
      </div>
  )
}

export default EditAvatarPopup
