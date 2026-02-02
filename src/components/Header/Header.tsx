import { Button } from '@components/Button'
import { Input } from '@components/Input'
import eyeSvg from '@assets/icons/eye.svg?raw'
import settingsSvg from '@assets/icons/settings.svg?raw'
import filterSvg from '@assets/icons/filter.svg?raw'
import './Header.scss'

const EyeIcon = () => (
  <span dangerouslySetInnerHTML={{ __html: eyeSvg }} />
)

const SettingsIcon = () => (
  <span dangerouslySetInnerHTML={{ __html: settingsSvg }} />
)

const FilterIcon = () => (
  <span dangerouslySetInnerHTML={{ __html: filterSvg }} />
)

export const Header = () => {
  return (
    <div className="app__header">
      <div className="app__breadcrumbs">
        <span className="app__breadcrumb-item">Данные</span>
        <span className="app__breadcrumb-divider">/</span>
        <span className="app__breadcrumb-item app__breadcrumb-item--disabled">
          Пользователи
        </span>
      </div>
      <h1 className="app__title">Пользователи</h1>
      <div className="app__actions">
        <div className="app__search-group">
          <Input
            placeholder="Найти пользователя"
            rightIcon={<EyeIcon />}
          />
          <div className="app__divider" />
          <button className="app__icon-button" type="button">
            <SettingsIcon />
          </button>
          <button className="app__icon-button" type="button">
            <FilterIcon />
          </button>
        </div>
        <Button
          leftIcon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5V19M5 12H19"
                stroke="#FAFCFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          Добавить пользователя
        </Button>
      </div>
    </div>
  )
}

