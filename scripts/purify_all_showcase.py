from PIL import Image
import numpy as np
import os

assets = ['zero_trust.png', 'monitoring.png', 'threat.png', 'encryption.png']
base_dir = 'public/assets/showcase/clean'

for name in assets:
    path = os.path.join(base_dir, name)
    img = Image.open(path)
    arr = np.array(img, dtype=np.float32)

    r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]

    # Pure cobalt blue detection: Blue must be significantly higher than red and green
    is_blue = (b > r + 24) & (b > g + 16) & (b > 100) & (a > 20)

    clean_arr = np.zeros_like(arr)

    # Standardize to pure brand cobalt #2B66FF
    clean_arr[is_blue, 0] = 43
    clean_arr[is_blue, 1] = 102
    clean_arr[is_blue, 2] = 255

    # Boost alpha curve for crisp 3D volume and punchy contrast
    norm_a = a[is_blue] / 255.0
    boosted_a = np.clip((norm_a ** 0.82) * 1.35, 0.0, 1.0) * 255.0
    clean_arr[is_blue, 3] = boosted_a

    out = Image.fromarray(clean_arr.astype(np.uint8))
    out.save(path, 'PNG')
    print(f'Purified {name}: visible={np.sum(is_blue)} pixels')

print('All 4 showcase graphics purified successfully.')
