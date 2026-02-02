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
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
  ],
})
