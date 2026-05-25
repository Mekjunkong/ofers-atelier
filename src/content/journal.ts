export type JournalPost = {
  slug: string;
  title: string;
  date: string;       // Display: "25 May 2026"
  dateISO: string;    // For sorting: "2026-05-25"
  category: string;   // "Field Notes" | "From the Market" | "Technique" | "This Week" | "Fire & Wood"
  image: string;
  imageAlt: string;
  body: string;       // 100-200 words, plain text
};

// ─────────────────────────────────────────────────────────────────────────────
// To add a new story: prepend a new object at the TOP of this array.
// That's it. The site will automatically show it as the latest entry.
// ─────────────────────────────────────────────────────────────────────────────
export const journalPosts: JournalPost[] = [
  {
    slug: "smoking-wood-test",
    title: "Wood, heat and a quiet test over the fire",
    date: "25 May 2026",
    dateISO: "2026-05-25",
    category: "Fire & Wood",
    image: "/images/gallery/fire-cooking.jpg",
    imageAlt: "A fire cooking experiment at the atelier",
    body: `A small piece of local wood changed the rhythm of the fire this week. It burned slower than expected, with a softer smoke and a smell that stayed on the hands after cooking. I kept it simple: a few cuts of meat, salt, heat, time, and notes scribbled beside the grill. Nothing was final. That is part of the point. Some weeks the atelier is a meal. Some weeks it is a test. Some weeks it is only a question that smells like smoke.`,
  },
  {
    slug: "market-morning-saraphi",
    title: "Early morning at Saraphi market",
    date: "18 May 2026",
    dateISO: "2026-05-18",
    category: "From the Market",
    image: "/images/gallery/preserving-workshop.jpg",
    imageAlt: "Ingredients from the local market",
    body: `Before seven in the morning the market is already half packed away. The serious vendors arrive first: the woman with the dried chilies in twenty colours, the man with the pork that has been smoked since four. I bought a bunch of galangal that still had soil on the roots and a small jar of something fermented with no label. I do not always know what I am buying here. That is still the right feeling.`,
  },
  {
    slug: "bread-experiment-sourdough",
    title: "The bread that did not rise — and why that was interesting",
    date: "11 May 2026",
    dateISO: "2026-05-11",
    category: "Technique",
    image: "/images/gallery/smoked-pork-ribs.jpg",
    imageAlt: "Bread experiment at the atelier",
    body: `The humidity in Chiang Mai in May is not the same as anywhere I have baked before. The dough moves differently. It ferments faster and rises with less structure. This week the loaf came out dense and a little sour and completely honest. I ate it warm with butter and wrote down what changed. The failure told me more than the successes have in a while. Next week I will try again with a longer cold rest.`,
  },
];

export function getLatestPost(): JournalPost {
  return journalPosts[0];
}

export function getAllPosts(): JournalPost[] {
  return [...journalPosts].sort((a, b) => b.dateISO.localeCompare(a.dateISO));
}
