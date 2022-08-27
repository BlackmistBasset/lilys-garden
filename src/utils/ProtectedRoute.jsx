import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const ProtectedRoute = () => {
  const auth = useSelector((state) => state.auth)
  console.log(auth)

  if (!auth.user) {
    return <Navigate to="/" replace />
  }
  return <Outlet />
}
