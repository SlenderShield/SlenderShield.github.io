import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../utils/analytics'

/**
 * Hook to track page views on route changes
 * Should be used at the top level of the app (e.g., in App.tsx)
 */
export function usePageTracking() {
  const location = useLocation()

  useEffect(() => {
    // Track page view when route changes
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null;
}
