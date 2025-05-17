import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import type { SettingsState } from "../settings-store"

interface ChatSettingsProps {
  settings: SettingsState
}

export default function ChatSettings({ settings }: ChatSettingsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Label htmlFor="model">Chat Model</Label>
        <Select defaultValue="gpt-4o">
          <SelectTrigger id="model" className="w-[120px]">
            <SelectValue placeholder="Model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gpt-4o">GPT-4o</SelectItem>
            <SelectItem value="gpt-4">GPT-4</SelectItem>
            <SelectItem value="gpt-3.5">GPT-3.5</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="temperature">Temperature</Label>
          <span className="text-sm text-muted-foreground">0.7</span>
        </div>
        <Slider id="temperature" defaultValue={[0.7]} max={1} step={0.1} />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="streaming">Enable streaming responses</Label>
        <Switch id="streaming" defaultChecked aria-label="Enable streaming responses" />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="history">Save chat history</Label>
        <Switch id="history" defaultChecked aria-label="Save chat history" />
      </div>
    </div>
  )
}
