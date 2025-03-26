"use client";

import { usePreferencesStore } from "@/lib/stores/preferences-store";
import { useEffect } from "react";

export function PreferencesProvider({
  children,
  defaultPreferences,
}: {
  children: React.ReactNode;
  defaultPreferences: { chatModelId: string; theme: string };
}) {
  const { setChatModelId, setTheme } = usePreferencesStore();
  const { chatModelId, theme } = defaultPreferences;

  useEffect(() => {
    setChatModelId(chatModelId);
    setTheme(theme);
  }, [setChatModelId, setTheme]);

  return <>{children}</>;
}
