"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import SettingsSidebar from "./settings-sidebar"
import SettingsContent from "./settings-content"
import type { SettingsState } from "./settings-store"

interface SettingsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  settings: SettingsState
}

export default function SettingsDialog({ open, onOpenChange, settings }: SettingsDialogProps) {
  const [activeTab, setActiveTab] = useState("general")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col sm:flex-row h-[500px] sm:h-[400px] overflow-hidden">
          <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <SettingsContent settings={settings} activeTab={activeTab} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
