import { format, isDate, isValid } from 'date-fns';

function isValidDateApp(payload) {
  const date = new Date(payload);
  return isDate(date) && isValid(date);
}
function formatDateApp(payload) {
  if (!isValidDateApp(payload)) {
    return payload;
  }
  return format(new Date(payload), "dd MMMM yyyy");
}
function htmlHasContent(htmlString) {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const textContent = doc.body.textContent?.trim();
    return !!textContent;
  } catch (e) {
    console.error("Something went wrong:", e);
    return false;
  }
}

export { formatDateApp as f, htmlHasContent as h };
//# sourceMappingURL=format-data-D2ElPwyM.mjs.map
