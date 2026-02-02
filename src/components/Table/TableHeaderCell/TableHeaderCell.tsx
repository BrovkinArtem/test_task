import arrowSvg from '@assets/icons/arrow.svg?raw'
import './TableHeaderCell.scss'

export type SortDirection = 'asc' | 'desc' | null

interface TableHeaderCellProps {
  title: string
  isSortable?: boolean
  sortDirection?: SortDirection
  hasTooltip?: boolean
  onSort?: () => void
  showArrow?: boolean
  defaultDirection?: 'asc' | 'desc' | null
}

const ArrowIcon = ({ direction, defaultDirection }: { direction: SortDirection; defaultDirection?: 'asc' | 'desc' | null }) => {
  const effectiveDirection = direction !== null ? direction : defaultDirection
  const isRotated = effectiveDirection === 'asc'
  const color = effectiveDirection === 'asc' ? '#FF4D00' : '#5F6166'
  
  return (
    <span
      className={`table-header-cell__arrow ${isRotated ? 'table-header-cell__arrow--rotated' : ''}`}
      dangerouslySetInnerHTML={{
        __html: arrowSvg.replace('fill="#5F6166"', `fill="${color}"`),
      }}
    />
  )
}

export const TableHeaderCell = ({
  title,
  isSortable = false,
  sortDirection = null,
  hasTooltip = false,
  onSort,
  showArrow = false,
  defaultDirection = null,
}: TableHeaderCellProps) => {
  const shouldShowArrow = isSortable && (showArrow || defaultDirection !== null)
  const isEmpty = !title && !shouldShowArrow && !hasTooltip
  
  return (
    <div 
      className={`table-header-cell ${isEmpty ? 'table-header-cell--empty' : ''}`} 
      onClick={isSortable ? onSort : undefined}
    >
      <div className="table-header-cell__container">
        {shouldShowArrow && <ArrowIcon direction={sortDirection} defaultDirection={defaultDirection} />}
        {title && <span className="table-header-cell__title">{title}</span>}
        {hasTooltip && (
          <svg
            className="table-header-cell__tooltip-icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8C13.5 11.0376 11.0376 13.5 8 13.5Z"
              fill="#5F6166"
            />
            <path
              d="M8 5.5C7.58579 5.5 7.25 5.83579 7.25 6.25C7.25 6.66421 7.58579 7 8 7C8.41421 7 8.75 6.66421 8.75 6.25C8.75 5.83579 8.41421 5.5 8 5.5Z"
              fill="#5F6166"
            />
            <path
              d="M8 8.5C7.58579 8.5 7.25 8.83579 7.25 9.25V11.25C7.25 11.6642 7.58579 12 8 12C8.41421 12 8.75 11.6642 8.75 11.25V9.25C8.75 8.83579 8.41421 8.5 8 8.5Z"
              fill="#5F6166"
            />
          </svg>
        )}
      </div>
    </div>
  )
}
