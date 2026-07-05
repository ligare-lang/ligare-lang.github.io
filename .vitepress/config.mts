import { defineConfig } from 'vitepress'
import type { LanguageRegistration } from 'shiki'
import LigareGrammar from './syntaxes/ligare.tmLanguage.json'

const ligareLanguage = {
  ...LigareGrammar,
  aliases: ['lig']
} satisfies LanguageRegistration

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "The Ligare Programming Language",
  description: "The Ligare Programming Language",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Get Started',
        items: [
          { text: 'Quick Start', link: '/docs/start' },
        ]
      },
      {
        text: 'Installation',
        items: [
          { text: 'Preparations', link: '/docs/installation/preparation' },
          { text: 'The ligare command', link: '/docs/installation/command' }
        ]
      },
      {
        text: 'basics',
        items: [
          { text: 'Terms', link: '/docs/basics/term' },
          { text: 'Data and Functions', link: '/docs/basics/data' },
          { text: 'Structures', link: '/docs/basics/struct' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ligare-lang' }
    ]
  },
  markdown: {
    languages: [ligareLanguage]
  }
})
