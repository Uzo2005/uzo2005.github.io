// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Cletus Igwe";
export const SITE_DESCRIPTION = "Cletus Igwe's Personal Website and Blog";
export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};