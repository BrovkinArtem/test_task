import { useState } from 'react'
import { Table, TableHeader, TableHeaderCell, TableRow, TableCell } from '@components/Table'
import { Dropdown } from '@components/Dropdown'
import { useTableSort } from '@hooks/useTableSort'
import { mockUsers } from '@data/mockUsers'
import { positionOptions } from '@data/positionOptions'
import dotsSvg from '@assets/icons/dots.svg?raw'
import './UsersTable.scss'

const DotsIcon = () => (
  <span dangerouslySetInnerHTML={{ __html: dotsSvg }} />
)

const tableColumns = ['id', 'role', 'name', 'login', 'position', 'contacts', 'email', 'phone', 'city']

export const UsersTable = () => {
  const { handleSort, getSortDirection } = useTableSort(tableColumns)
  const [userPositions, setUserPositions] = useState<Record<number, string>>(() => {
    const positions: Record<number, string> = {}
    mockUsers.forEach((user, index) => {
      const positionOption = positionOptions.find(
        (opt) => opt.label === user.position
      )
      positions[index] = positionOption ? positionOption.value : 'designer'
    })
    return positions
  })

  return (
    <Table>
      <TableHeader
        scrollable={
          <>
            <TableHeaderCell
              title="ID"
              isSortable
              sortDirection={getSortDirection('id')}
              onSort={() => handleSort('id')}
              defaultDirection="asc"
            />
            <TableHeaderCell
              title="Роль"
              isSortable
              hasTooltip
              sortDirection={getSortDirection('role')}
              onSort={() => handleSort('role')}
              defaultDirection="desc"
            />
            <TableHeaderCell
              title="Имя"
              isSortable
              sortDirection={getSortDirection('name')}
              onSort={() => handleSort('name')}
              defaultDirection="desc"
            />
            <TableHeaderCell
              title="Логин"
              isSortable
              sortDirection={getSortDirection('login')}
              onSort={() => handleSort('login')}
              defaultDirection="desc"
            />
            <TableHeaderCell
              title="Должность"
              isSortable
              sortDirection={getSortDirection('position')}
              onSort={() => handleSort('position')}
              defaultDirection="desc"
            />
            <TableHeaderCell
              title="Контакты"
              isSortable
              sortDirection={getSortDirection('contacts')}
              onSort={() => handleSort('contacts')}
              defaultDirection="desc"
            />
            <TableHeaderCell
              title="Почта"
              isSortable
              sortDirection={getSortDirection('email')}
              onSort={() => handleSort('email')}
              defaultDirection="desc"
            />
            <TableHeaderCell
              title="Телефон"
              isSortable
              sortDirection={getSortDirection('phone')}
              onSort={() => handleSort('phone')}
              defaultDirection="desc"
            />
            <TableHeaderCell
              title="Город"
              isSortable
              sortDirection={getSortDirection('city')}
              onSort={() => handleSort('city')}
              defaultDirection="desc"
            />
          </>
        }
      />

      {mockUsers.map((user, index) => (
        <TableRow
          key={index}
          scrollable={
            <>
              <TableCell>
                <div className="table-cell__id-wrapper">
                  <span className="table-cell__text">{user.id}</span>
                  <button className="table-cell__dots-button" type="button">
                    <DotsIcon />
                  </button>
                </div>
              </TableCell>
              <TableCell>
                <span className="table-cell__text">{user.role}</span>
              </TableCell>
              <TableCell>
                <span className="table-cell__text">{user.name}</span>
              </TableCell>
              <TableCell>
                <span className="table-cell__text">{user.login}</span>
              </TableCell>
              <TableCell>
                <Dropdown
                  options={positionOptions}
                  value={userPositions[index]}
                  onSelect={(value) => {
                    setUserPositions((prev) => ({ ...prev, [index]: value }))
                  }}
                  placeholder="Выберите должность"
                  variant="compact"
                />
              </TableCell>
              <TableCell>
                <span className="table-cell__text">{user.contacts}</span>
              </TableCell>
              <TableCell>
                <span className="table-cell__text">{user.email}</span>
              </TableCell>
              <TableCell>
                <span className="table-cell__text">{user.phone}</span>
              </TableCell>
              <TableCell>
                <span className="table-cell__text">{user.city}</span>
              </TableCell>
            </>
          }
        />
      ))}
    </Table>
  )
}

