export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function changeHeight(textarea: HTMLTextAreaElement) {
  textarea.style.height = 'auto';
  textarea.style.height = (textarea.scrollHeight) + 'px';
}