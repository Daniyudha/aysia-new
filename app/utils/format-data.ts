import { format, isDate, isValid } from "date-fns";

export function isValidDateApp(payload: number | string) {
  const date = new Date(payload);
  return isDate(date) && isValid(date);
}

export function formatDateApp(payload: number | string) {
  if (!isValidDateApp(payload)) {
    return payload;
  }
  return format(new Date(payload), "dd MMMM yyyy");
}

export function htmlHasContent(htmlString: string) {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const textContent = doc.body.textContent?.trim();
    return !!textContent;
  }
  catch (e) {
    console.error("Something went wrong:", e);
    return false;
  }
}

export function removeDuplicateOptions(options: {
  label: string;
  value: string;
}[]): {
  label: string;
  value: string;
}[] {
  const uniqueOptionsMap = new Map<string, {
    label: string;
    value: string;
  }>();
  for (const option of options) {
    if (!uniqueOptionsMap.has(option.value)) {
      uniqueOptionsMap.set(option.value, option);
    }
  }

  return Array.from(uniqueOptionsMap.values());
}
