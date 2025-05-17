"use client"

import { Button } from "@/components/ui/button"
import type { SettingsState } from "./settings-store"

// Import tab components
import GeneralSettings from "./general"
import ChatSettings from "./chat"
import BetaSettings from "./beta"
import SpeechSettings from "./speech"
import AccountSettings from "./account"

interface SettingsContentProps {
  settings: SettingsState
  activeTab: string
}

export default function SettingsContent({ settings, activeTab }: SettingsContentProps) {
  // Render the appropriate tab component based on activeTab
  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return <GeneralSettings settings={settings} />
      case "chat":
        return <ChatSettings settings={settings} />
      case "beta":
        return <BetaSettings settings={settings} />
      case "speech":
        return <SpeechSettings settings={settings} />
      case "account":
        return <AccountSettings settings={settings} />
      default:
        return <GeneralSettings settings={settings} />
    }
  }

  return (
    <div className="flex-1 p-4 sm:p-6 overflow-auto">
      {renderTabContent()}

      <div className="mt-6 flex justify-end">
        <Button variant="outline" className="mr-2">
          Cancel
        </Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  )
}
