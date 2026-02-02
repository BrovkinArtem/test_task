import { ReactNode } from 'react'
import './TableCell.scss'

interface TableCellProps {
  children: ReactNode
}

export const TableCell = ({ children }: TableCellProps) => {
  return <div className="table-cell">{children}</div>
}

