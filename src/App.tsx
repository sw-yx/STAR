import React from 'react'
import {
  Root,
  // Routes
} from 'react-static'
// import { Link } from '@reach/router'

import './tailwind.css'

function Footer() {
  return (
    <div className="mt-16 text-center py-8 text-grey-dark">
      A project by{' '}
      <a
        href="https://twitter.com/swyx"
        className="text-indigo-dark font-semibold no-underline hover:underline"
      >
        swyx
      </a>{' '}
    </div>
  )
}

function Hero() {
  return (
    <div
      className="bg-center"
      style={{
        backgroundColor: '#27232d',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0C6.716 0 0 6.716 0 15c8.284 0 15-6.716 15-15zM0 15c0 8.284 6.716 15 15 15 0-8.284-6.716-15-15-15zm30 0c0-8.284-6.716-15-15-15 0 8.284 6.716 15 15 15zm0 0c0 8.284-6.716 15-15 15 0-8.284 6.716-15 15-15z' fill='%239C92AC' fill-opacity='0.07' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="container lg:max-w-screen-lg mx-auto px-6 py-8 sm:py-16 md:py-24">
        <div className="mb-6">
          <p className="text-xl sm:text-2xl text-blue-light leading-normal max-w-lg">
            🌟 Design <strong className="text-white font-bold">S</strong>ystems
            {' + '}
            <strong className="text-white font-bold">T</strong>ypeScript{' + '}
            <strong className="text-white font-bold">A</strong>pollo GraphQL
            {' + '}
            <strong className="text-white font-bold">R</strong>eact
          </p>
        </div>
        <div className="mb-12">
          <h1 className="font-display font-semibold text-white text-4xl sm:text-5xl md:text-6xl mb-4 leading-none">
            The New Stack for Iterating and Scaling
          </h1>
          <p className="text-xl sm:text-2xl text-blue-light leading-normal max-w-lg">
            <strong className="text-yellow font-bold">MEAN is dead. </strong>
            <br />
            Explore how{' '}
            <strong className="text-white font-bold">
              leading product engineering teams{' '}
            </strong>
            create{' '}
            <strong className="text-white font-bold">better workflows </strong>
            for working with designers, platform developers, third party APIs,
            and{' '}
            <strong className="text-white font-bold">
              between themselves.
            </strong>
          </p>
        </div>

        <form
          action="https://tinyletter.com/starlabs"
          method="post"
          target="popupwindow"
          onSubmit={() => {
            window.open(
              'https://tinyletter.com/starlabs',
              'popupwindow',
              'scrollbars=yes,width=800,height=600',
            )
            return true
          }}
        >
          <p className="text-lg sm:text-xl text-white font-semibold mb-4">
            Get notified whenever we publish{' '}
            <span className="hidden sm:inline">something new</span>{' '}
            <span className="text-blue-light ml-1">→</span>
          </p>
          <div className="max-w-sm sm:flex">
            <input
              type="email"
              className="focus:outline-none block text-lg sm:text-xl w-full bg-white rounded sm:rounded-r-none px-6 py-3 sm:py-4 mb-2 sm:mb-0"
              name="email"
              placeholder="Enter your email"
              required={true}
            />
            <input type="hidden" value="1" name="embed" />
            <button
              type="submit"
              className="focus:outline-none focus:bg-indigo-light sm:text-lg w-full sm:w-auto bg-indigo hover:bg-indigo-light rounded sm:rounded-l-none uppercase text-white font-bold tracking-wide py-3 px-6 sm:py-4"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function App() {
  return (
    <Root>
      <div className="font-sans text-black antialiased leading-tight bg-grey-lighter">
        {/* <Banner /> */}
        <Hero />
        {/* <div className="container lg:max-w-screen-lg mx-auto px-6 py-10">
          <Routes />
        </div> */}
        <Footer />
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        */}
      </div>
    </Root>
  )
}

export default App

// tslint:disable-next-line:no-implicit-dependencies
