import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import dropdownSvg from '@assets/icons/dropdown.svg?raw'
import checkSvg from '@assets/icons/check.svg?raw'
import './Dropdown.scss'

interface DropdownOption {
  value: string
  label: string
}

interface DropdownProps {
  options: DropdownOption[]
  value?: string
  placeholder?: string
  onSelect?: (value: string) => void
  variant?: 'default' | 'compact'
}

const DropdownIcon = ({ isActive }: { isActive: boolean }) => {
  const color = isActive ? '#FAFCFF' : '#5F6166'
  const svgWithColor = dropdownSvg.replace('stroke="#DDE0E6"', `stroke="${color}"`)
  return (
    <span
      className="dropdown__icon-wrapper"
      dangerouslySetInnerHTML={{ __html: svgWithColor }}
    />
  )
}

const CheckIcon = ({ color = '#FAFCFF' }: { color?: string }) => (
  <span
    className="dropdown__check-icon"
    dangerouslySetInnerHTML={{
      __html: checkSvg.replace('fill="#48494D"', `fill="${color}"`),
    }}
  />
)

export const Dropdown = ({
  options,
  value,
  placeholder = 'Выберите...',
  onSelect,
  variant = 'default',
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value)
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number; width: number } | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSelectedValue(value)
  }, [value])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen && dropdownRef.current) {
      document.addEventListener('mousedown', handleClickOutside)
      
      const rect = dropdownRef.current.getBoundingClientRect()
      const menuWidth = 320
      const windowWidth = window.innerWidth
      
      let left = rect.left
      if (left + menuWidth > windowWidth) {
        left = Math.max(10, windowWidth - menuWidth - 10)
      }
      
      setMenuPosition({
        top: rect.bottom + 4,
        left: left,
        width: menuWidth,
      })
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue)
    setIsOpen(false)
    if (onSelect) {
      onSelect(optionValue)
    }
  }

  const selectedOption = options.find((opt) => opt.value === selectedValue)
  const isActive = isOpen

  const menuContent = isOpen && menuPosition && (
    <div 
      className="dropdown__menu" 
      ref={menuRef}
      style={{
        position: 'fixed',
        top: `${menuPosition.top}px`,
        left: `${menuPosition.left}px`,
        width: `${menuPosition.width}px`,
      }}
    >
      {options.map((option) => {
        const isSelected = selectedValue === option.value
        const isHovered = hoveredOption === option.value
        const showCheck = isSelected || isHovered
        
        return (
          <button
            key={option.value}
            className={`dropdown__option ${isSelected ? 'dropdown__option--selected' : ''}`}
            onClick={() => handleSelect(option.value)}
            onMouseEnter={() => setHoveredOption(option.value)}
            onMouseLeave={() => setHoveredOption(null)}
            type="button"
          >
            {showCheck && (
              <CheckIcon color={isSelected ? '#FAFCFF' : '#5F6166'} />
            )}
            {!showCheck && <span className="dropdown__check-placeholder" />}
            <span className="dropdown__option-text">{option.label}</span>
          </button>
        )
      })}
    </div>
  )

  return (
    <>
      <div className={`dropdown dropdown--${variant} ${isActive ? 'dropdown--active' : ''}`} ref={dropdownRef}>
        <button
          className="dropdown__trigger"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <span className="dropdown__value">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <DropdownIcon isActive={isActive} />
        </button>
      </div>
      {menuContent && createPortal(menuContent, document.body)}
    </>
  )
}
