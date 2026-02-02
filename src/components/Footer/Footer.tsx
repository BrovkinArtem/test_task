import './Footer.scss'

export const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer-content">
        <div className="app__footer-column">
          <a href="#" className="app__footer-link">Информация</a>
          <a href="#" className="app__footer-link">Поддержка</a>
        </div>
        <div className="app__footer-column">
          <a href="#" className="app__footer-link">Пользователи</a>
          <a href="#" className="app__footer-link">Клиенты</a>
        </div>
        <div className="app__footer-column">
          <a href="#" className="app__footer-link">Реклама</a>
          <a href="#" className="app__footer-link">Настройки Куки</a>
        </div>
        <div className="app__footer-column">
          <a href="#" className="app__footer-link">Условия</a>
          <a href="#" className="app__footer-link">Главная</a>
        </div>
        <div className="app__footer-column">
          <a href="#" className="app__footer-link">Политика Конфиденциальности</a>
        </div>
      </div>
      <div className="app__footer-tag">@test</div>
    </div>
  )
}

