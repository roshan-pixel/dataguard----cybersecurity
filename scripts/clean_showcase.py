from PIL import Image
import numpy as np
import pathlib

SRC = pathlib.Path("public/assets/showcase")
OUT = pathlib.Path("public/assets/showcase/clean")
OUT.mkdir(parents=True, exist_ok=True)
REF_W = 800
CANVAS = (1200, 900)   # identical for all four
FILL = 0.72            # art's longest side = 72% of canvas height -> equal visual scale

JOBS = {
  "zero_trust": ((180, 140, 675, 455), [(510, 370, 715, 445)]),
  "monitoring": ((160, 100, 590, 400), [(510, 318, 720, 395)]),
  "threat":     ((155, 90, 555, 400), []),
  "encryption": ((175, 135, 540, 395), []),
}

for name, (keep, erase) in JOBS.items():
    src_file = SRC / f"{name}.png"
    im = Image.open(src_file).convert("RGB")
    s = im.width / REF_W
    sc = lambda b: tuple(int(v * s) for v in b)
    cropped = im.crop(sc(keep))
    a = np.asarray(cropped).astype(int).copy()

    kx, ky = sc(keep)[:2]
    for (x1, y1, x2, y2) in erase:
        ex1 = max(0, int(x1 * s) - kx)
        ey1 = max(0, int(y1 * s) - ky)
        ex2 = min(a.shape[1], int(x2 * s) - kx)
        ey2 = min(a.shape[0], int(y2 * s) - ky)
        a[ey1:ey2, ex1:ex2] = 255

    # blue-ink alpha: white -> transparent, brand blue -> opaque (drops grey UI chrome & card borders)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    
    # Calculate blue ink intensity
    diff = b - r
    alpha = np.clip(diff * 2.5, 0, 255).astype(np.uint8)
    alpha[diff < 22] = 0

    rgba = np.zeros((*alpha.shape, 4), np.uint8)
    rgba[..., 0] = 43   # #2B66FF (Site primary brand accent)
    rgba[..., 1] = 102
    rgba[..., 2] = 255
    rgba[..., 3] = alpha

    art = Image.fromarray(rgba, "RGBA")
    bbox = art.getbbox()
    if bbox:
        art = art.crop(bbox) # tight bbox of the drawing only

    # Normalize visual scale so all artworks share the exact same maximum dimension
    target_dim = CANVAS[1] * FILL
    scale_factor = target_dim / max(art.width, art.height)
    new_w = max(1, round(art.width * scale_factor))
    new_h = max(1, round(art.height * scale_factor))
    art = art.resize((new_w, new_h), Image.Resampling.LANCZOS)

    # Center on uniform transparent canvas
    out = Image.new("RGBA", CANVAS, (0, 0, 0, 0))
    paste_x = (CANVAS[0] - art.width) // 2
    paste_y = (CANVAS[1] - art.height) // 2
    out.paste(art, (paste_x, paste_y), art)

    dest_file = OUT / f"{name}.png"
    out.save(dest_file, "PNG", optimize=True)
    print(f"Generated {dest_file.name}: canvas={CANVAS}, artwork_size=({new_w}x{new_h})")

print("All 4 showcase illustrations cleaned, normalized, and saved successfully!")
