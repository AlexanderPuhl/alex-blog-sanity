const projectUrl = process.env.SANITY_STUDIO_PROJECT_URL;
const prewviewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET;

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${prewviewSecret}&slug=${document.slug.current}`;
}
