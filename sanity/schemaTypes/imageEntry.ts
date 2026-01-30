import { defineField, defineType } from 'sanity'

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
    }),

    defineField({
      name: 'project',
      title: 'Projekt',
      type: 'reference',
      to: [{ type: 'project' }],
    }),

    // ✅ BLEIBT – wichtig für Reihenfolge
    defineField({
      name: 'order',
      title: 'Reihenfolge',
      type: 'number',
      description: 'Kleinere Zahl = weiter oben',
      validation: (Rule) => Rule.required(),
    }),

    // 🔹 Größe
    defineField({
      name: 'size',
      title: 'Größe (1–10)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(10),
      initialValue: 5,
    }),

   defineField({
  name: 'offsetX',
  title: 'Horizontale Position',
  type: 'number',
  description: 'Wert in px (z.B. -300 bis +300)',
  initialValue: 0,
}),

defineField({
  name: 'spacing',
  title: 'Abstand nach unten (5-100)',
  type: 'number',
  description: 'Vertikaler Abstand in px',
  initialValue: 24,
}),

  ],
})
