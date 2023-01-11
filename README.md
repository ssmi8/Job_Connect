# Job Connect - A social sharing platform for professionals

(insert AmIResponsive image)

# About this wesbite:

Job Connect is a social networking site which links to professionals together in a much more collaboartive way.  Linking existing sites together, such as LinkedIn and Instagram, I wanted to create a platform where professionals could interact, share their experiences in their chosen fields and help one and other in tackling their industries.  It also creates a place to meet and engage with different people who you wouldn't necessarily meet in your day to day life i.e. people working abroad.

# Main Technologies Used:

- Html, CSS, JavaScript
- React.js
- Bootstrap
- Django REST Framework

# Agile Methodology

## Concept

## Inception

## Iteration/Construction

## Release

## Production

## Retirement

# Strategy

# Structure

# User Stories

## The Post Page

## The Posts Page

## The Profile Page

# Wireframe

# Deployment to Heroku

In your app
- Add the list of requirements by writing in the terminal "pip3 freeze --local > requirements.txt"
- Git add and git commit the changes made
Log into Heroku
- Log into Heroku or create a new account and log in
- top right-hand corner click "New" and choose the option Create new app if you are a new user, the "Create new app" button will appear in the middle of the screen
- Write the app name - it has to be unique, it cannot be the same as this app
- Choose Region - I am in Europe
- Click "Create App"
The page of your project opens
- Go to Resources Tab, Add-ons, search and add Heroku Postgres
- Choose "settings" from the menu at the top of the page
- Go to the section "Config Vars" and click the button "Reveal Config Vars".
- Add the below variables to the list
Database URL will be added automatically
Secret_key - is the Django secret key that can be generated here.
Go back to your code
- Procfile needs to be created in your app
web: gunicorn PROJ_NAME.wsgi

- In settings in your app add Heroku to ALLOWED_HOSTS
- Add and commit the changes in your code and push them to GitHub
Final step - deployment
- Next, go to "Deploy" in the menu bar at the top
- Go to the section "deployment method", and choose "GitHub"
- A new section will appear "Connect to GitHub" - Search for the repository to connect to
- Type the name of your repository and click "search"
- Once Heroku finds your repository - click "connect"
- Scroll down to the section "Automatic Deploys"
- Click "Enable automatic deploys" or choose "Deploy branch" and manually deploy
- Click "Deploy branch"
Once the program runs: You should see the message "the app was successfully deployed"
- Click the button "View"
The live link can be found here.


Since Heroku stopped its free service the project has been migrated and deployed through
ElephantSQL and Render

# Testing


# Improvements

# References

- Django 3.2: Framework used to add structure to the platform
- Django AllAuth used to provide enhanced user account functionality
- Django templating language used to insert data from the database into the sites pages
- Bootstrap: Framework used to add structure and responsiveness
- Favicon Generator: Used to create favicon used on the website
- GitHub: GitHub respository is used to store the project's code after being pushed from Gitpod
- Google Fonts: Google fonts are used to add fonts for aesthetic and UX purposes
- Git: Gitpod IDE was used for version control by utilizing the Gitpod terminal to commit and Push to - - - GitHub
- AmIResponsive: Used to generate mockup image
- lucid.app: Used to generate wireframes
- Moments Walkthrough project via Code Institute
