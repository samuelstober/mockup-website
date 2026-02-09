import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Website Einstellungen',
  type: 'document',

  fields: [
    defineField({
      name: 'backgroundColor',
      title: 'Hintergrundfarbe (HEX)',
      type: 'string',
      description: 'z.B. #ffffff oder #0a0a0a',
    }),
  ],
})
