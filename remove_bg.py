from PIL import Image
import numpy as np
import sys

def remove_bg(filepath, outpath, is_black=False):
    img = Image.open(filepath).convert("RGBA")
    data = np.array(img)

    if is_black:
        # Invert everything
        data[:, :, :3] = 255 - data[:, :, :3]
        
        # Now background is white (255,255,255). Make white transparent.
        r, g, b, a = data.T
        white_areas = (r > 200) & (g > 200) & (b > 200)
        data[..., 3][white_areas.T] = 0
    else:
        # For Cosmeako (purple bg). Find bg color from corner
        bg_color = data[0, 0, :3]
        r, g, b, a = data.T
        bg_areas = (abs(r - bg_color[0]) < 20) & (abs(g - bg_color[1]) < 20) & (abs(b - bg_color[2]) < 20)
        
        # Make text black and bg transparent
        data[..., :3][~bg_areas.T] = [0, 0, 0]
        data[..., 3][bg_areas.T] = 0

    new_img = Image.fromarray(data)
    new_img.save(outpath)
    print(f"Saved {outpath}")

try:
    remove_bg('public/logos/108.png', 'public/logos/108_nobg.png', True)
    remove_bg('public/logos/COSMICO logo 1.png', 'public/logos/COSMICO_nobg.png', False)
except Exception as e:
    print("Error:", e)
