"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import type { SettingsState } from "../settings-store"

interface GeneralSettingsProps {
  settings: SettingsState
}

export default function GeneralSettings({ settings }: GeneralSettingsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Label htmlFor="theme">Theme</Label>
        <Select defaultValue={settings.theme} onValueChange={settings.setTheme}>
          <SelectTrigger id="theme" className="w-[120px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="language">Language</Label>
        <Select defaultValue={settings.language} onValueChange={settings.setLanguage}>
          <SelectTrigger id="language" className="w-[120px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="spanish">Spanish</SelectItem>
            <SelectItem value="french">French</SelectItem>
            <SelectItem value="german">German</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="markdown">Render user messages as markdown</Label>
        <Switch
          id="markdown"
          checked={settings.renderMarkdown}
          onCheckedChange={settings.setRenderMarkdown}
          aria-label="Render user messages as markdown"
        />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="autoscroll">Auto-Scroll to latest message on chat open</Label>
        <Switch
          id="autoscroll"
          checked={settings.autoScroll}
          onCheckedChange={settings.setAutoScroll}
          aria-label="Auto-Scroll to latest message on chat open"
        />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="hidepanel">Hide right-most side panel</Label>
        <Switch
          id="hidepanel"
          checked={settings.hideRightPanel}
          onCheckedChange={settings.setHideRightPanel}
          aria-label="Hide right-most side panel"
        />
      </div>
    </div>
  )
}
