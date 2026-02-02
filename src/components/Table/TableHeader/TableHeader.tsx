import { ReactNode } from 'react'
import './TableHeader.scss'

interface TableHeaderProps {
  fixed?: ReactNode
  scrollable?: ReactNode
}

export const TableHeader = ({ fixed, scrollable }: TableHeaderProps) => {
  return (
    <div className="table-header">
      {fixed && <div className="table-header__fixed">{fixed}</div>}
      {scrollable && <div className="table-header__scrollable">{scrollable}</div>}
    </div>
  )
}

