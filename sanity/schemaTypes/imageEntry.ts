import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'imageEntry',
  title: 'Bild',
  type: 'document',

  fields: [
    defineField({
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'project',
      title: 'Projekt',
      type: 'reference',
      to: [{ type: 'project' }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'order',
      title: 'Reihenfolge',
      type: 'number',
      description: 'Kleinere Zahl = weiter oben',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'size',
      title: 'Größe (1–5)',
      type: 'number',
      options: {
        list: [
          { title: '1 – sehr klein', value: 1 },
          { title: '2 – klein', value: 2 },
          { title: '3 – mittel', value: 3 },
          { title: '4 – groß', value: 4 },
          { title: '5 – sehr groß', value: 5 },
        ],
      },
      initialValue: 3,
    }),
  ],
})
