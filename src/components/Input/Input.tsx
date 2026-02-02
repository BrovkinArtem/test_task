import './Input.scss'

interface InputProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Input = ({
  placeholder,
  value,
  onChange,
  leftIcon,
  rightIcon,
}: InputProps) => {
  return (
    <div className="input">
      {leftIcon && <span className="input__icon input__icon--left">{leftIcon}</span>}
      <input
        className="input__field"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {rightIcon && <span className="input__icon input__icon--right">{rightIcon}</span>}
    </div>
  )
}

