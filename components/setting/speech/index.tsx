import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import type { SettingsState } from "../settings-store"

interface SpeechSettingsProps {
  settings: SettingsState
}

export default function SpeechSettings({ settings }: SpeechSettingsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Label htmlFor="speech-to-text">Enable Speech-to-Text</Label>
        <Switch id="speech-to-text" aria-label="Enable Speech-to-Text" />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="text-to-speech">Enable Text-to-Speech</Label>
        <Switch id="text-to-speech" aria-label="Enable Text-to-Speech" />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="voice">Voice</Label>
        <Select defaultValue="alloy">
          <SelectTrigger id="voice" className="w-[120px]">
            <SelectValue placeholder="Voice" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="alloy">Alloy</SelectItem>
            <SelectItem value="echo">Echo</SelectItem>
            <SelectItem value="fable">Fable</SelectItem>
            <SelectItem value="onyx">Onyx</SelectItem>
            <SelectItem value="nova">Nova</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="speed">Speech Speed</Label>
          <span className="text-sm text-muted-foreground">1.0x</span>
        </div>
        <Slider id="speed" defaultValue={[1]} min={0.5} max={2} step={0.1} />
      </div>
    </div>
  )
}
