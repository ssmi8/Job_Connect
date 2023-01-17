# Job Connect - A social sharing platform for professionals

(insert AmIResponsive image)

# About this wesbite:

Job Connect is a social networking site which links to professionals together in a much more collaboartive way.  Linking existing sites together, such as LinkedIn and Instagram, I wanted to create a platform where professionals could interact, share their experiences in their chosen fields and help one and other in tackling their industries.  It also creates a place to meet and engage with different people who you wouldn't necessarily meet in your day to day life i.e. people working abroad.

# Main Technologies Used:

- Html, CSS, JavaScript
- React.js
- Bootstrap
- Django REST Framework

# Planning Stage

## Strategy

### Site Aims

The app is designed for professionals all industries to connect, socialize and share their experiences.  One of the key aims is for users to be able to reach out to other users, or find an existing post that will help develop their skills as well as look/promote new job opportunites.

The development is a mix between LinkedIn and Instagram, so that users can benefit from the social sharing application, as well as developing as professionals.


### Brainstorming

I wanted to develop an application that was social as well beneficial to users from a professional point of view.  I use most social apps, but felt that a more specific site which focuses on both the social and professional development was a niche area that I could explore.

### Scope

When developing this site, there was a need to ensure that the following requirements were met:-

- Add/Edit and Delete functionality
- Easy and effortless navigation between pages
- User feedback such as error messages

## Structure

Agile Development Process

I used the Agile Process for development of this web application. The user stories are detailed below. I used the Kanban board on Github to track progress.

To help me visualize a typical user journey around the site, I used Lucidspark to help me plan out the various routes a user could take through the site.

(insert wireframes)

User Stories

- Navigation & Authentication
    - Navigation: As a user I can view a navbar from every page so that I can navigate easily between pages
    - Routing: As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh
    - Authentication - Sign up: As a user I can create a new account so that I can access all the features for signed up users
    - Authentication - Sign in: As a user I can sign in to the app so that I can access functionality for logged in users
    - Authentication - Logged in Status: As a user I can tell if I am logged in or not so that I can log in if I need to
    - Authentication - Refreshing access tokens: As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised
    - Navigation: Conditional rendering - As a logged out user I can see sign in and sign up options so   that I can sign in/sign up
    - Avatar: As a user I can view user's avatars so that I can easily identify users of the application

- Adding & Liking Posts

    - Create posts: As a logged in user I can create posts so that I can share my images with the world!
    - View a post: As a user I can view the details of a single post so that I can learn more about it
    - Like a post: As a logged in user I can like a post so that I can show my support for the posts that interest me

- The Posts Page
    - View most recent posts: As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content
    - As a user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in.
    - View liked posts: As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most
    - View posts of followed users: As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about
    - Infinite scroll: As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page" etc    

- The Post Page

    - Post page: As a user I can view the posts page so that I can read the comments about the post
    - Edit post: As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created
    - Create a comment: As a logged in user I can add comments to a post so that I can share my thoughts about the post
    - Comment date: As a user I can see how long ago a comment was made so that I know how old a comment is
    - View comments: As a user I can read comments on posts so that I can read what other users think about the posts
    - Delete comments: As an owner of a comment I can delete my comment so that I can control removal of my comment from the application
    - Edit a comment: As an owner of a comment I can edit my comment so that I can fix or update my existing comment

- The Profile Page

    - Profile page: As a user I can view other users profiles so that I can see their posts and learn more about them
     - Most followed profiles: As a user I can see a list of the most followed profiles so that I can see which profiles are popular
     - User profile - user stats: As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them
    - Follow/Unfollow a user: As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed
    - View all posts by a specific user: As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them
    - Edit profile: As a logged in user I can edit my profile so that I can change my profile picture and bio
    - Update username and password: As a logged in user I can update my username and password so that I can change my display name and keep my profile secure

- The Skills Page

- The Jobs Page


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
