import { create } from "zustand";
import OpenAI from "openai";

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

interface ChatStore {
  messages: Message[];
  loading: boolean;
  error: string | null;
  sendMessage: (message: string) => Promise<void>;
  clearMessages: () => void;
}

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY!,
  dangerouslyAllowBrowser: true,
});

export const useChatStore = create<ChatStore>((set, get) => ({
  messages: [],
  loading: false, //TODO: set loading in UI store
  error: null,

  sendMessage: async (message: string) => {
    const updatedMessages = [
      ...get().messages,
      { role: "user", content: message } as Message,
    ];

    set({ loading: true, error: null, messages: updatedMessages });

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo",
        messages: updatedMessages,
        temperature: 0.1,
      });

      const aiResponse = response.choices[0]?.message;
      if (aiResponse) {
        set((state) => ({
          messages: [...state.messages, aiResponse as Message],
          loading: false,
        }));
      }
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message, loading: false });
      } else {
        set({ error: "An unknown error occurred", loading: false });
      }
    }
  },

  clearMessages: () => {
    set({ messages: [] });
  },
}));
