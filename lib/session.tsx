import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '@/lib/api';
import type { User } from '@/lib/types';
type Session = { user: User | null; ready: boolean; signUp: (name: string, email: string) => Promise<void>; signOut: () => Promise<void> };
const Context = createContext<Session | null>(null);
const key = 'finance-control.user-id';
export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null); const [ready, setReady] = useState(false);
  useEffect(() => { AsyncStorage.getItem(key).then(async id => { if (id) setUser(await api.getUser(id).catch(() => null)); setReady(true); }); }, []);
  const signUp = async (name: string, email: string) => { const created = await api.createUser({ name, email }); await AsyncStorage.setItem(key, created.id); setUser(created); };
  const signOut = async () => { await AsyncStorage.removeItem(key); setUser(null); };
  return <Context.Provider value={{ user, ready, signUp, signOut }}>{children}</Context.Provider>;
}
export const useSession = () => { const value = useContext(Context); if (!value) throw new Error('SessionProvider ausente'); return value; };
