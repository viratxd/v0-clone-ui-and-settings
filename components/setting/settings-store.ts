import { create } from "zustand"

export interface SettingsState {
  theme: string
  language: string
  renderMarkdown: boolean
  autoScroll: boolean
  hideRightPanel: boolean
  setTheme: (theme: string) => void
  setLanguage: (language: string) => void
  setRenderMarkdown: (value: boolean) => void
  setAutoScroll: (value: boolean) => void
  setHideRightPanel: (value: boolean) => void
}

export const useSettingsStore = create<SettingsState>((set) => ({
  theme: "light",
  language: "english",
  renderMarkdown: true,
  autoScroll: false,
  hideRightPanel: false,
  setTheme: (theme) => set({ theme }),
  setLanguage: (language) => set({ language }),
  setRenderMarkdown: (renderMarkdown) => set({ renderMarkdown }),
  setAutoScroll: (autoScroll) => set({ autoScroll }),
  setHideRightPanel: (hideRightPanel) => set({ hideRightPanel }),
}))
