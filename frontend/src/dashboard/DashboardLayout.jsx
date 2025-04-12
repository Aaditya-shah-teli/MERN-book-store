import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarLayout } from './Sidebar'

export const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row '>
        <SidebarLayout/>
        <Outlet/> </div>
  )
}
