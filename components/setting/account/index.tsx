import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { SettingsState } from "../settings-store"

interface AccountSettingsProps {
  settings: SettingsState
}

export default function AccountSettings({ settings }: AccountSettingsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <Button variant="outline" size="sm">
            Change Avatar
          </Button>
          <p className="text-xs text-muted-foreground">JPG, GIF or PNG. 1MB max.</p>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="display-name">Display Name</Label>
        <Input id="display-name" defaultValue="User" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" defaultValue="user@example.com" />
      </div>

      <div className="pt-4 flex justify-between">
        <Button variant="outline">Log Out</Button>
        <Button variant="destructive">Delete Account</Button>
      </div>
    </div>
  )
}
