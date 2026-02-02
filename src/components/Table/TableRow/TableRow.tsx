import { ReactNode } from 'react'
import './TableRow.scss'

interface TableRowProps {
  fixed?: ReactNode
  scrollable?: ReactNode
  isSelected?: boolean
}

export const TableRow = ({
  fixed,
  scrollable,
  isSelected = false,
}: TableRowProps) => {
  return (
    <div className={`table-row ${isSelected ? 'table-row--selected' : ''}`}>
      {fixed && <div className="table-row__fixed">{fixed}</div>}
      {scrollable && <div className="table-row__scrollable">{scrollable}</div>}
    </div>
  )
}

