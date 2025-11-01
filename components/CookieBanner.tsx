'use client'

import { useEffect, useState } from 'react'
import { getCookieConsent, setCookieConsent } from '@/utils/cookieUtils'
import Button from '@/components/Button'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = getCookieConsent()
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    setCookieConsent('accepted')
    setShowBanner(false)
  }

  const handleReject = () => {
    setCookieConsent('rejected')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="tw:fixed tw:bottom-0 tw:left-0 tw:right-0 tw:z-50 tw:rounded-t-3xl tw:bg-white tw:shadow-lg tw:border-t tw:border-gray-200">
      <div className="tw:mx-auto tw:w-11/12 tw:tablet:w-3/4 tw:py-4 tw:tablet:py-6">
        <div className="tw:flex tw:flex-col tw:gap-4 tw:tablet:flex-row tw:tablet:items-center tw:tablet:justify-between">
          <div className="tw:flex-1">
            <h3 className="tw:font-yk tw:font-semibold tw:text-xl tw:mb-2 tw:tracking-wide">
              We value your privacy
            </h3>
            <p className="tw:text-base tw:text-gray-600">
              We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic. By clicking Accept All, you consent to our use of cookies.{' '}
              <a href="/code-of-conduct" className="tw:text-rose-500 tw:underline hover:tw:text-rose-700">
                Cookie Policy
              </a>
            </p>
          </div>
          <div className="tw:flex tw:gap-3 tw:flex-wrap">
            <Button variant="secondary" onClick={handleReject}>
              Reject All
            </Button>
            <Button variant="default" onClick={handleAccept}>
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}