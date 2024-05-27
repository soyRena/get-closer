'use client'

import { Backdrop, Box, SpeedDial, SpeedDialAction } from '@mui/material'
import { useState } from 'react'
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded'
import RouteIcon from '@mui/icons-material/Route'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'

const actions = [
  {
    name: 'Fazer uma rota',
    icon: <RouteIcon />,
    goTo: '/'
  },
  {
    name: 'Salvar novo endereço',
    icon: <AddLocationAltRoundedIcon />,
    goTo: '/address'
  }
]

export function SpeedDialMenu() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: 'absolute', bottom: 24, right: 24 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{ color: 'primary' }}
      >
        {actions.map(action => (
          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={handleClose} />
        ))}
      </SpeedDial>
    </>
  )
}
