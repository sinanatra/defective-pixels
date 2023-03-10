Defective Pixels
----------
A script that adds dead pixels to a webpage every time it's loaded and saves them on the local storage.


1. Install the library with: `npm i defective-pixels`.
2. Import it with: 

```
import generatepixels from "defective-pixels"
```

3. Run it by specifying the number of dead pixels to add and the id of the container where to add them: 

```
generatepixels(100, "container_id")
```