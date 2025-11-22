import { create } from "zustand";

interface LeakState {
  leak: {
    clear?: boolean;
    type?: string;
    breaches?: string[];
    pw_count?: number;
  } | null;
  loading: boolean;
  setLeak: (leak: LeakState["leak"]) => void;
  setLoading: (loading: boolean) => void;
  reset: () => void;
}

export const useLeakStore = create<LeakState>((set) => ({
  leak: null,
  loading: false,
  setLeak: (leak) => set({ leak }),
  setLoading: (loading) => set({ loading }),
  reset: () => set({ leak: null, loading: false }),
}));
