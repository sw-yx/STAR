import React from 'react'

export default function Banner() {
  return (
    <div className="bg-indigo py-4 text-lg md:text-xl font-semibold text-white">
      <div className="container lg:max-w-screen-lg mx-auto px-6">
        <span className="block mb-2 md:mb-0 md:inline md:mr-2">
          We just released a book!
        </span>
        <a href="/book" className="font-bold text-white underline">
          Learn more about it here →
        </a>
      </div>
    </div>
  )
}
