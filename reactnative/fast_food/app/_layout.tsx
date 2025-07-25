import useAuthStore from '@/store/auth.store'
import * as Sentry from '@sentry/react-native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import './global.css'

Sentry.init({
  dsn: 'https://703439d5e68250dcc7702f539152ca0d@o4507828963901440.ingest.us.sentry.io/4507828971569152',
  sendDefaultPii: true,
})

export default Sentry.wrap(function RootLayout() {
  const { isLoading, fetchAuthenticatedUser } = useAuthStore()

  const [fontsLoaded, error] = useFonts({
    'QuickSand-Bold': require('../assets/fonts/Quicksand-Bold.ttf'),
    'QuickSand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
    'QuickSand-Regular': require('../assets/fonts/Quicksand-Regular.ttf'),
    'QuickSand-SemiBold': require('../assets/fonts/Quicksand-Bold.ttf'),
    'QuickSand-Light': require('../assets/fonts/Quicksand-Light.ttf'),
  })

  useEffect(() => {
    if (error) throw error
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error])

  useEffect(() => {
    fetchAuthenticatedUser()
  }, [])

  if (!fontsLoaded || isLoading) return null

  return <Stack screenOptions={{ headerShown: false }} />
})
