const figmaCaptureScriptId = 'figma-html-to-design-capture';

export function initializeFigmaCapture() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const url = new URL(window.location.href);
  const shouldLoadCaptureScript =
    import.meta.env.DEV || url.searchParams.get('enableFigmaCapture') === '1';

  if (
    !shouldLoadCaptureScript ||
    document.getElementById(figmaCaptureScriptId)
  ) {
    return;
  }

  const script = document.createElement('script');
  script.id = figmaCaptureScriptId;
  script.async = true;
  script.src = 'https://mcp.figma.com/mcp/html-to-design/capture.js';
  document.body.appendChild(script);
}
