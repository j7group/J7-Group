// components/PortableTextComponents.tsx
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import type { PortableTextComponents } from '@portabletext/react'
import Link from 'next/link'

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }

      return (
        <div className="my-12">
          <div className="relative overflow-hidden">
            <Image
              src={urlFor(value).url()}
              alt={value.alt || 'Blog image'}
              width={1920}
              height={1440}
              className="w-full h-[80vh] object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.caption && (
            <p className="text-sm text-[#51301F]/60 text-center mt-4 italic font-medium">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
    code: ({ value }) => {
      return (
        <div className="my-8">
          <div className="bg-[#51301F] rounded-2xl p-6 shadow-xl">
            <SyntaxHighlighter
              language={value.language || 'javascript'}
              style={tomorrow}
              customStyle={{
                borderRadius: '12px',
                padding: '24px',
                fontSize: '14px',
                background: 'transparent',
              }}
            >
              {value.code}
            </SyntaxHighlighter>
          </div>
        </div>
      )
    },
  },
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-sm sm:text-base text-[#150c07] leading-relaxed font-light">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#51301F] mb-8 mt-12 leading-tight">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#51301F] mb-6 mt-10 leading-tight">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#51301F] mb-6 mt-8">{children}</h3>
    ),

    h4: ({ children }) => (
      <h4 className="text-lg sm:text-xl md:text-2xl text-[#51301F] mb-4 mt-6">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#7A3110] pl-8 py-6 my-8 italic text-base  sm:text-lg md:text-xl text-[#51301F] rounded-r-2xl shadow-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="text-sm sm:text-base list-none pl-0 mb-6 space-y-3">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-none pl-0 mb-6 space-y-3 counter-reset-list">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-[#51301F]/80 leading-relaxed text-sm sm:text-base md:text-lg relative pl-8 before:content-['•'] before:absolute before:left-0 before:text-[#7A3110] before:font-bold before:text-xl">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="text-[#51301F]/80 leading-relaxed text-lg relative pl-8 counter-increment-list before:content-counter(list,decimal) before:absolute before:left-0 before:text-[#7A3110] before:font-bold before:text-lg">
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-[#51301F]">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-[#7A3110]">{children}</em>
    ),
    code: ({ children }) => (
      <code className="bg-[#ECE4D9] px-3 py-1 rounded-lg text-sm font-mono text-[#7A3110] border border-[#51301F]/10">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <Link
        href={value?.href}
        target={value?.blank ? '_blank' : '_self'}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        className="text-[#7A3110] underline hover:text-[#51301F] transition-colors duration-300 font-medium"
      >
        {children}
      </Link>
    ),
  },
}
