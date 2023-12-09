# Tailwind insatalltion in project:

Install npm by this `npm init -y`

Install tailwind `npm install -D tailwindcss`

and initialize tailwind `npx tailwindcss init` that create .config file in content "\*"

#### make directory src and create two file input.css & output.css 

add these line code in input.css
``` bash
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";

in package.json file script
```
#### In package.json file script section write this to run the tailwind 

`"build": "tailwindcss -i ./src/input.css -o ./src/output.css --watch"`

Now Run in terminal `npm run build`

## In HTML file link with ./src/output.css
///****\*\*\*\*****/
