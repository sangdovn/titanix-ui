"use client";

import { create } from "zustand";

interface PreferencesState {
  chatModelId: string | undefined;
  theme: string | undefined;
  setChatModelId: (modelId: string) => void;
  setTheme: (theme: string) => void;
}

export const usePreferencesStore = create<PreferencesState>((set) => ({
  chatModelId: undefined,
  theme: undefined,
  setChatModelId: (modelId) => set({ chatModelId: modelId }),
  setTheme: (theme) => set({ theme }),
}));
