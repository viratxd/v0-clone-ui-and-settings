"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { Settings, MessageSquare, Beaker, Mic, User } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

type Tab = {
  id: string
  label: string
  icon: React.ReactNode
}

interface SettingsSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function SettingsSidebar({ activeTab, setActiveTab }: SettingsSidebarProps) {
  const isMobile = useMediaQuery("(max-width: 640px)")

  const tabs: Tab[] = [
    { id: "general", label: "General", icon: <Settings className="h-4 w-4" /> },
    { id: "chat", label: "Chat", icon: <MessageSquare className="h-4 w-4" /> },
    { id: "beta", label: "Beta features", icon: <Beaker className="h-4 w-4" /> },
    { id: "speech", label: "Speech", icon: <Mic className="h-4 w-4" /> },
    { id: "account", label: "Account", icon: <User className="h-4 w-4" /> },
  ]

  if (isMobile) {
    return (
      <div className="w-full overflow-x-auto border-b">
        <div className="flex p-2 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center px-4 py-2 text-xs rounded-md mx-1 min-w-[70px]",
                activeTab === tab.id ? "bg-muted font-medium" : "hover:bg-muted/50",
              )}
            >
              {tab.icon}
              <span className="mt-1">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="w-[200px] min-w-[200px] border-r overflow-auto hidden sm:block">
      <nav className="p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center w-full px-3 py-2 text-sm rounded-md text-left",
              activeTab === tab.id ? "bg-muted font-medium" : "hover:bg-muted/50",
            )}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
