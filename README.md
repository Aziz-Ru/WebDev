Tailwind insatalltion in project:

npm init -y

npm install -D tailwindcss
npx tailwindcss init
after in content "\*"

mkdir src
touch src/input.css
//add in input css//
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";

in package.json file script

"build": "tailwindcss -i ./src/input.css -o ./output/output.css --watch"
npx tailwindcss -i ./src/input.css -o ./output/output.css --watch

html file link with ./output/output.css
///****\*\*\*\*****/
