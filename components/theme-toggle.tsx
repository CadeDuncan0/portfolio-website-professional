'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from '@/components/icons'

type Theme = 'dark' | 'light'

function applyTheme(theme: Theme) {
  const root = document.documentElement
  if (theme === 'light') {
    root.dataset.theme = 'light'
  } else {
    delete root.dataset.theme
  }
  try {
    localStorage.setItem('theme', theme)
  } catch {
    /* localStorage unavailable (private mode, etc.) — ignore */
  }
}

export function ThemeToggle() {
  // Deterministic first render (dark) so SSR and hydration match; the actual
  // stored preference is synced in the effect below.
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    applyTheme(next)
    setTheme(next)
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={!isDark}
      className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-cyber-yellow/40 bg-fill text-cyber-yellow shadow-none transition-all duration-200 hover:border-cyber-yellow/75 hover:shadow-[0_0_18px_rgba(252,238,10,0.55)]"
    >
      {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  )
}
