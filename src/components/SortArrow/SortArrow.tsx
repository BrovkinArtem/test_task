import { SortDirection } from '../Table/TableHeaderCell'
import './SortArrow.scss'

interface SortArrowProps {
  direction: SortDirection
}

export const SortArrow = ({ direction }: SortArrowProps) => {
  if (!direction) return null

  return (
    <svg
      className={`sort-arrow sort-arrow--${direction}`}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      {direction === 'asc' ? (
        <path
          d="M6 0.75L1.75 5L10.25 5L6 0.75Z"
          fill="#FF4D00"
        />
      ) : (
        <path
          d="M6 11.25L1.75 7L10.25 7L6 11.25Z"
          fill="#FF4D00"
        />
      )}
    </svg>
  )
}
