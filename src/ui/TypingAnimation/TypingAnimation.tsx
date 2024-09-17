'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import clx from 'classnames'

type Props = {
  // Optional CSS class to apply to the component
  className?: string
  // Optional CSS class for the blinking cursor element
  cursorClassName?: string
  // Optional delay (in milliseconds) between finishing typing a word and starting to delete it
  deletingDelay?: number
  // Optional deleting speed in characters per second
  deletingSpeed?: number
  // Optional array of words to display
  words?: string[]
  // Optional typing speed in characters per second
  typingSpeed?: number
}

export const TypingAnimation = ({
  className = '',
  cursorClassName = '',
  deletingDelay = 1000,
  deletingSpeed = 6,
  typingSpeed = 3,
  words = [],
}: Props) => {
  const [displayPhrase, setDisplayPhrase] = useState<string>('')
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0)
  const isTypingRef = useRef<boolean>(true)

  const switchWord = useCallback(() => {
    setCurrentWordIndex((i) => {
      return words.length > 0 && i + 1 >= words.length ? 0 : i + 1
    })
  }, [words.length])

  const phraseIncrease = useCallback((word: string) => {
    setDisplayPhrase((phrase) => {
      return word.slice(0, phrase.length + 1)
    })
  }, [])

  const phraseDecrease = useCallback(() => {
    setDisplayPhrase((p) => p.slice(0, p.length - 1))
  }, [])

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const word = words[currentWordIndex]

    // Typing mode
    if (isTypingRef.current === true) {
      // on complete
      if (displayPhrase === currentWord) {
        isTypingRef.current = false
        const timer = setTimeout(() => {
          phraseDecrease()
        }, deletingDelay)

        return () => clearTimeout(timer)
      }

      // type next char
      const timer = setTimeout(() => {
        phraseIncrease(word)
      }, 1000 / typingSpeed)

      return () => clearTimeout(timer)
    }

    // Deleting mode
    if (isTypingRef.current === false) {
      // switch word
      if (displayPhrase === '') {
        isTypingRef.current = true
        switchWord()
      }

      // delete last char
      const timer = setTimeout(() => {
        phraseDecrease()
      }, 1000 / deletingSpeed)

      return () => clearTimeout(timer)
    }
  }, [
    isTypingRef,
    words,
    currentWordIndex,
    displayPhrase,
    deletingDelay,
    phraseDecrease,
    typingSpeed,
    phraseIncrease,
    switchWord,
    deletingSpeed,
  ])

  if (!Array.isArray(words) || words.length < 1) {
    return null
  }

  return (
    <span className={className}>
      {displayPhrase}
      <span className={clx("mx-2px animate-blink border-r-2 border-black", cursorClassName)} />
    </span>
  )
}
