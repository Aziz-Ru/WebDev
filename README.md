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

# Install Process of MONGODB in Linux

1. Download mongodb server, mongoshell & mongoCampus from mongodb website

   `https://repo.mongodb.org/apt/ubuntu/dists/jammy/mongodb-org/7.0/multiverse/binary-amd64/mongodb-org-server_7.0.4_amd64.deb`
   
   `https://downloads.mongodb.com/compass/mongodb-mongosh_2.1.0_amd64.deb`
   
   `https://downloads.mongodb.com/compass/mongodb-compass_1.40.4_amd64.deb`

2. Change directory where download.

3. To install mongo server `mongodb-org-server_7.0.4_amd64.deb` run this cmd `sudo dpkg -i mongodb-org-server_7.0.4_amd64.deb`

4. To install mongoshell `mongodb-mongosh_2.1.0_amd64.deb` run this cmd `sudo dpkg -i mongodb-mongosh_2.1.0_amd64.deb `

5. To install mongocampus(GUI) `mongodb-compass_1.40.4_amd64.deb` run this cmd `sudo dpkg -i mongodb-compass_1.40.4_amd64.deb `

6. To start run this `sudo service mongod start` or `sudo systemctl start mongod`

7. check the status `sudo systemctl status mongod`

8. Here you see active running

9. After Runing start cmd mongodb not start then

```
sudo chown -R mongodb:mongodb /var/lib/mongodb
sudo chown -R mongodb:mongodb /tmp/mongodb-27017.sock

```
again start your server

   
   


