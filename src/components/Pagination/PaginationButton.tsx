import './PaginationButton.scss'

interface PaginationButtonProps {
  type: 'previous' | 'next' | 'number' | 'ellipsis'
  page?: number
  isActive?: boolean
  disabled?: boolean
  onClick?: () => void
}

export const PaginationButton = ({
  type,
  page,
  isActive = false,
  disabled = false,
  onClick,
}: PaginationButtonProps) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }

  return (
    <button
      className={`pagination-button ${isActive ? 'pagination-button--active' : ''} ${disabled ? 'pagination-button--disabled' : ''}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {type === 'previous' && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18L9 12L15 6"
            stroke={disabled ? '#787A80' : '#C0C4CC'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {type === 'next' && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18L15 12L9 6"
            stroke={disabled ? '#787A80' : '#C0C4CC'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {type === 'number' && <span>{page}</span>}
      {type === 'ellipsis' && <span>...</span>}
    </button>
  )
}

