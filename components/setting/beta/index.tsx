import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import type { SettingsState } from "../settings-store"

interface BetaSettingsProps {
  settings: SettingsState
}

export default function BetaSettings({ settings }: BetaSettingsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Label htmlFor="experimental-ui">Experimental UI</Label>
          <Badge variant="outline" className="text-xs">
            Beta
          </Badge>
        </div>
        <Switch id="experimental-ui" aria-label="Enable experimental UI" />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Label htmlFor="advanced-prompting">Advanced Prompting</Label>
          <Badge variant="outline" className="text-xs">
            Beta
          </Badge>
        </div>
        <Switch id="advanced-prompting" aria-label="Enable advanced prompting" />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Label htmlFor="plugins">Third-party plugins</Label>
          <Badge variant="outline" className="text-xs">
            Beta
          </Badge>
        </div>
        <Switch id="plugins" aria-label="Enable third-party plugins" />
      </div>
    </div>
  )
}
