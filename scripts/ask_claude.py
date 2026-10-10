import json
import urllib.request

prompt_text = """Hi Claude! We are building the Dataguard Cybersecurity web application (inspired by high-end Behance cybersecurity blueprint aesthetics: #2B66FF cobalt blue, technical monospace, 3D halftone isometric meshes).

In our interactive "Security Built For Modern Enterprises" showcase, we redesigned and engineered Module 02: "Real-Time Telemetry & Monitoring". Here is what we have implemented:

1. 3D Isometric Artwork & Normalization:
   - Cleaned Behance raster screenshots by isolating pure cobalt halftone dot matrix vectors and removing all unselectable mock UI buttons and artifacts.
   - Normalized all 4 module graphics (Zero-Trust Shield, Real-Time Radar Dish, Threat Firewall, Quantum Infinity Pipeline) to a consistent 1200x900 transparent canvas.

2. Live Active Moving 3D Overlays (ShowcaseFX):
   - For Real-Time Telemetry & Monitoring: Centered on the 3D isometric satellite dish at (703, 403), tilted on an isometric plane with rotate(-22) scale(1, 0.62).
   - Rotating 360° radar sweep beam with gradient attenuation and a leading scanning line.
   - Dynamic pulsing sensor blips with concentric radar rings and telemetry pings in emerald, cobalt, and amber.

3. Stage Layout, Depth & Aspect Ratio Architecture:
   - Eliminated CSS Grid aspect-ratio width explosion (aspect-16/9 with min-height:640px was forcing 1140px min-width). Replaced with bounded responsive height and min-w-0.
   - Added blueprint gradient background (from-[#F8FAFC] to-white), technical corner ticks, dot grid, and soft floor grounding.
   - Added an interactive pointer constellation canvas: 42 floating digital micro-particles that connect via dynamic laser telemetry lines to the cursor when hovering over the stage, plus a holographic reticle tracking the pointer.

4. Information Architecture & Controls:
   - Balanced left column height using a dedicated "CORE TELEMETRY" card showing cluster health (3/3 nodes), latency (< 4.8ms), encryption standards (FIPS 140-3), and an interactive Pause/Resume auto-cycle toggle.
   - HUD top bar with live status pill, module badge (MODULE 02 / 04), and accessible bidirectional step chevrons with tactile click audio and keyboard arrow support.
   - Docked telemetry ribbon at the bottom of the stage ("Latency: <5ms • 3 Multi-Region Clusters") and high-contrast descriptive footer with an "INSPECT MODULE" CTA.

As our Senior UI/UX & Design Systems Director, please review this implementation for "Real-Time Telemetry & Monitoring":
1. What architectural or aesthetic refinements would you direct us to elevate it further?
2. Are there specific micro-interactions, radar telemetry readouts, or technical polish you recommend to give it an elite, production-grade cybersecurity posture?"""

# Script to insert text into ProseMirror and click send
js_code = f"""
(() => {{
  const editor = document.querySelector('div[contenteditable="true"]');
  if (!editor) return {{ success: false, reason: "No editor found" }};
  
  editor.focus();
  
  // Clear any existing text
  document.execCommand('selectAll', false, null);
  document.execCommand('delete', false, null);
  
  // Insert text
  const success = document.execCommand('insertText', false, {json.dumps(prompt_text)});
  
  // Dispatch input event to notify React/ProseMirror state
  editor.dispatchEvent(new Event('input', {{ bubbles: true }}));
  
  return {{ success: true }};
}})()
"""

req_data = {
    "action": "evaluate",
    "args": {
        "code": js_code
    },
    "session": "claude-review"
}

with open(r"C:\Users\sgarm\AppData\Local\Temp\webbridge-req-type-claude.json", "w", encoding="utf-8") as f:
    json.dump(req_data, f, ensure_ascii=False)

print("Created webbridge-req-type-claude.json successfully")
