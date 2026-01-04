import React from 'react'
import { createRoot } from 'react-dom/client'
import AppClean from './AppClean'
import ErrorBoundary from './ErrorBoundary'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppClean />
    </ErrorBoundary>
  </React.StrictMode>
)
