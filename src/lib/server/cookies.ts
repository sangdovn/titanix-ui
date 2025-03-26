"use server";

import { cookies } from "next/headers";
import { DEFAULT_CHAT_MODEL } from "../ai/models";

// Get preferences from cookies
export async function getServerPreferences() {
  const cookieStore = await cookies();
  return {
    chatModelId: cookieStore.get("chat-model-id")?.value || DEFAULT_CHAT_MODEL,
    theme: cookieStore.get("theme")?.value || "system",
  };
}

// Save preferences to cookies
export async function setServerPreferences({
  chatModelId,
  theme,
}: {
  chatModelId?: string;
  theme?: string;
}) {
  const cookieStore = await cookies();

  if (chatModelId) cookieStore.set("chat-model-id", chatModelId);
  if (theme) cookieStore.set("theme", theme);
}
