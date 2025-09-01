"use client";
import { useEffect } from "react";

export default function ProtectDevTools() {
  useEffect(() => {
    // Block right-click
    const disableContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);

    // Block certain keys
    const disableShortcuts = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "C" || e.key === "J")) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", disableShortcuts);

    // Detect if DevTools is open
    const checkDevTools = setInterval(() => {
      const start = performance.now();
      debugger; // pauses if DevTools is open
      const end = performance.now();

      if (end - start > 100) {
        window.location.href = "about:blank"; // 🚨 kick them out
      }
    }, 1000);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("keydown", disableShortcuts);
      clearInterval(checkDevTools);
    };
  }, []);

  return null; // no UI
}
