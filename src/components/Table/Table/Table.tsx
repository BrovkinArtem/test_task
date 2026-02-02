import { ReactNode } from 'react'
import './Table.scss'

interface TableProps {
  children: ReactNode
}

export const Table = ({ children }: TableProps) => {
  return (
    <div className="table-wrapper">
      <div className="table-content">{children}</div>
    </div>
  )
}

