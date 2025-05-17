"use client"

import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SettingsButtonProps {
  onClick: () => void
}

export default function SettingsButton({ onClick }: SettingsButtonProps) {
  return (
    <Button variant="ghost" size="icon" onClick={onClick} aria-label="Settings">
      <Settings className="h-5 w-5" />
    </Button>
  )
}
