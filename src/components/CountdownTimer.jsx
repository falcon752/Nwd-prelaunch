import { useState, useEffect } from 'react'

function CountdownTimer() {
  const [countdown, setCountdown] = useState({
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0
  })

  useEffect(() => {
    // Set a target date 3 months from now
    const targetDate = new Date()
    targetDate.setMonth(targetDate.getMonth() + 3)

    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate - now

      if (difference > 0) {
        const totalSeconds = Math.floor(difference / 1000)
        const totalMinutes = Math.floor(totalSeconds / 60)
        const totalHours = Math.floor(totalMinutes / 60)
        const totalDays = Math.floor(totalHours / 24)
        
        const months = Math.floor(totalDays / 30)
        const weeks = Math.floor((totalDays % 30) / 7)
        const days = totalDays % 7
        const hours = totalHours % 24

        setCountdown({ months, weeks, days, hours })
      } else {
        setCountdown({ months: 0, weeks: 0, days: 0, hours: 0 })
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="countdown-display">
      <div className="countdown-item">
        <span className="countdown-number">{countdown.months}</span>
        <span className="countdown-label">Months</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{countdown.weeks}</span>
        <span className="countdown-label">Weeks</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{countdown.days}</span>
        <span className="countdown-label">Days</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{countdown.hours}</span>
        <span className="countdown-label">Hours</span>
      </div>
    </div>
  )
}

export default CountdownTimer
