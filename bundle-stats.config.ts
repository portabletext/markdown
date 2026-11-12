import {defineConfig} from '@rexxars/bundle-stats/config'

export default defineConfig({
  conditions: ['browser', 'module', 'import', 'default'],
  packages: [
    {
      root: '.',
      scenarios: {
        entries: {
          portableTextToMarkdown: './bundle-tests/portable-text-to-markdown.ts',
        },
      },
    },
  ],
})
