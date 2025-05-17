"use client"

import { useState } from "react"
import SettingsButton from "./settings-button"
import SettingsDialog from "./settings-dialog"
import { useSettingsStore } from "./settings-store"

export default function Settings() {
  const [open, setOpen] = useState(false)
  const settings = useSettingsStore((state) => state)

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen)
  }

  return (
    <>
      <SettingsButton onClick={() => setOpen(true)} />
      <SettingsDialog open={open} onOpenChange={handleOpenChange} settings={settings} />
    </>
  )
}
