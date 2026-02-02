import { ReactNode } from 'react'
import './Button.scss'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  onClick?: () => void
  disabled?: boolean
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'lg',
  leftIcon,
  rightIcon,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`button button--${variant} button--${size} ${disabled ? 'button--disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {leftIcon && <span className="button__icon button__icon--left">{leftIcon}</span>}
      <span className="button__text">{children}</span>
      {rightIcon && <span className="button__icon button__icon--right">{rightIcon}</span>}
    </button>
  )
}

