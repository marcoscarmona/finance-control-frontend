import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SessionProvider } from '@/lib/session';
export default function Layout() { const [client] = useState(() => new QueryClient()); return <SafeAreaProvider><QueryClientProvider client={client}><SessionProvider><Stack screenOptions={{ headerShown: false }} /></SessionProvider></QueryClientProvider></SafeAreaProvider>; }
