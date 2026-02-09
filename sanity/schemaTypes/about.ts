import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',

  fields: [
    defineField({
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: { hotspot: true },
    }),
defineField({
  name: 'siteBackgroundColor',
  title: 'Seiten-Hintergrundfarbe (RGB)',
  type: 'string',
  description: 'z. B. rgb(245,245,245) oder #ffffff',
}),

    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
  ],
})
