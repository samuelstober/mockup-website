import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projekt',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Projektname',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Beschreibung',
      type: 'text',
    }),

    defineField({
      name: 'pdf',
      title: 'Projekt PDF',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
  ],
})
