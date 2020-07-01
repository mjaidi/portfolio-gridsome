export const projectFields = [
  {
    label: "Title",
    name: "title",
    widget: "string",
    required: true,
  },
  {
    label: "Publié ?",
    name: "published",
    widget: "boolean",
    default: true,
  },
  {
    label: "Language",
    name: "lang",
    widget: "select",
    options: ["fr", "en"],
  },
  {
    label: "Position",
    name: "order",
    widget: "number",
    required: true,
  },
  {
    label: "Tags",
    name: "tags",
    widget: "list",
    required: true,
  },
  {
    label: "Has URL ?",
    name: "caonnonical_url",
    widget: "boolean",
    required: false,
  },
  {
    label: "Website",
    name: "website",
    widget: "string",
    required: false,
  },
  {
    label: "When?",
    name: "date",
    widget: "string",
    required: false,
  },
  {
    label: "Short Description",
    name: "description",
    widget: "string",
    required: false,
  },
  {
    label: "Image de couverture",
    name: "featured_image",
    widget: "image",
    required: false,
  },
  {
    label: "Content",
    name: "content",
    widget: "markdown",
    required: false,
  },
  {
    label: "Images",
    name: "images",
    widget: "list",
    fields: [
      { label: "Image", name: "image", widget: "image", required: true },
      { label: "Name", name: "name", widget: "string", required: false },
    ],
  },
];
