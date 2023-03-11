Defective Pixels
----------
A script that adds dead pixels to a webpage every time it's loaded and saves them on the local storage.

![pixels](https://user-images.githubusercontent.com/20107875/224479331-c0dff8af-39b3-46fd-87d3-8081a7c3cbe4.gif)



1. Install the library with: `npm i defective-pixels`.
2. Import it with: 

```
import generatepixels from "defective-pixels"
```

3. Run it by specifying the number of dead pixels to add and the id of the container where to add them: 

```
generatepixels(100, "container_id")
```

4. It is advised to have the container at 100% of the viewport:

```
#container_id {
  height: 100vh;
  width: 100vw;
}
```

### Credits:

This is an update to Domitille's [repo](https://github.com/domitille-f451/defective-pixels).