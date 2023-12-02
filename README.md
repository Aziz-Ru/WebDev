# Tailwind insatalltion in project:

1. To Initialize npm `npm init -y`

2. To install Tailwind Css Developer Mode `npm install -D tailwindcss`
   
3. To Initialize tailwind `npx tailwindcss init`

4. In tailwind.config file change in content "\*"

5. make directory and create file input.css `mkdir src && touch src/input.css`

6. Add in input.css file

```
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";

```
7. In package.json file script section 
`"build": "tailwindcss -i ./src/input.css -o ./output/output.css --watch" `

8. To run `npx tailwindcss -i ./src/input.css -o ./output/output.css --watch`

9. html file link with ./output/output.css
///****\*\*\*\*****/
