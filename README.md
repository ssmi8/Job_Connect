# Job Connect - A social sharing platform for professionals

![AmIResponsive](/documentation/amiresponsive.png)

# About this wesbite:

Job Connect is a social networking site which links to professionals together in a much more collaboartive way.  Linking existing sites together, such as LinkedIn and Instagram, I wanted to create a platform where professionals could interact, share their experiences in their chosen fields and help one and other in tackling their industries.  It also creates a place to meet and engage with different people who you wouldn't necessarily meet in your day to day life i.e. people working abroad.

The live link to the deployed Frontend app is [here](https://job-connect.herokuapp.com/).

The live link to the deployed Backend app is [here](https://connect-api-ss.herokuapp.com/).

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

All stories were added to the project section in github, and I put them all into the Todo section, and passed them through development when I began working on specific user stories.  Once these were complete and I was happy with it, I moved it into the completed section.

To help me visualize a typical user journey around the site, I used Lucidspark to help me plan out the various routes a user could take through the site.

![Wireframe](/documentation/wireframe_1.png "Wireframe")


## Features:

### Home Page:

![HomePage](/documentation/HomePage.png "HampePage")

### Nav Bar:

 - During the planning phase I wanted to ensure the NavBar was restricted to three pages, which were the home page, the sign in page and the sign up page.  Non-logged in users would see posts from users, but not able to like or comment on them unless logged in.

![NavBar1](/documentation/NavBar_1.png "NavBar1")

- Once the user is logged in they would be able to comment and like users posts, plus would be able to access extra pages in skill and jobs, where they could find good sources of materials (recommened and posted by other users) to learn or develop their skills.  Also, they would be kept up to date with recent job postings, posted by other users.  User would also be able to access their p

![NavBar2](/documentation/NavBar_2.png "NavBar2")

- During the development stages, I found that the NavBar became too clustered with having three add post links, so I decided to have these in a dropdown menu, which made the page look cleaner and tidier, and have the user a better all round experience.

![NavBar3](/documentation/NavBar_3.png "NavBar3")

### Sign-In Page:

When users come to the sign in page they can enter there username and password, if they are already registered.  If they are not, there is a quick link, underneath, to take them to the sign up page.

![signin_page](/documentation/signin_page.png "signin_page")

### Sign-Up Page:

When users register their accounts, users will be able to choose a username and password, and then confirm their passwords.  Once signed up, they will be taken to the sign in page to log in.

![signup_page](/documentation/signup_page.png "signup_page")

### Add Post Page:

When a user is logged in, they can post an image with a title and content.

![add_post](/documentation/add_post.png "add_post")

### Add Job Page:

When a user is logged in, they can add a job post with a title, job role, location, company and image.

![add_job](/documentation/add_job.png "add_job")

### Add Job Page:

When a user is logged in, they can add a skill pos with a title of the skill to learn/develop, content about the learning material with link, and an image.

![add_skill](/documentation/add_skill.png "add_skill")

### Feed and Liked Pages:

Users can follow other users and like other user posts.  When a user does this, they can access users posts they follow in the Feed page, and they can access posts they have liked in the Liked page.  Also, as well as the Home Page, they can use search bar to find a post.

![searchbar](/documentation/searchbar.png "searchbar")

### Comments and Likes

When a user is logged in they will be ablt to comment on other user posts. They will also have the ability to edit or delete their comments using the dropdown menu.  They can also like or unlike a post.

![comments_likes](/documentation/comments_likes.png "comments_likes")


### Edit Posts

When a logged in user posts an image, skill or job opportunity, they will have the ability to edit or delete said post via a dropdown menu.

![edit_post](/documentation/edit_post.png "edit_post")

## User Stories

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
    - Skill page: As a user I can view the skills page so that I can find new places to learn new skills
    - Edit skill: As a skill post owner I can edit my post title and description so that I can make corrections or update my post after it was created
    - Delete skill: As a skill post owner I can delete my post if I no longer want to share that post

- The Jobs Page
    - Job page: As a user I can view the skills page so that I can find new places to learn new skills
    - Edit job: As a skill post owner I can edit my post title and description so that I can make corrections or update my post after it was created
    - Delete job: As a skill post owner I can delete my post if I no longer want to share that post



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
The live link can be found [here](https://job-connect.herokuapp.com/).


Since Heroku stopped its free service the project has been migrated and deployed through
ElephantSQL and Render




# Components

Several components have been implemented within this project that has been reused throughout this project:

- axiosDefault.js: for ease of communication with the backend API.
- Asset.js: to supplu the loading spinner & user Avatar throughout the site.
- DropdownMenu.js: to allow user users to edit/delete their image posts, skill posts and job posts.
- CurrentUserContext.js: confrm the user logged-in status to determine what functionality is available to that user.
- ProfileDataContext.js: procide follow & unfollow ability to other users across Profile pages.
- useRedirect.js: redirects a user to another page if they are not authorized to be on the page they are trying to access.
- utils.js: supplies functionality to all of the components that utilize the Infinite Scroll.


# Testing

## Manual Testing

Manual testing has been carried throughout this project.

### Manual Testing Resolutions

- When posting a new skill or job, the post was not showing on their respective pages I found that I have included an extra / after the {id} element, which was causing the issues.

- When applying a dropdown menu to the Job page I had not defined the jobPage function in the jobsPage, and thanks to tutor support I found the issue and managed fix it.

CRUD functionalilty has been tested for eachof the following: Posts, Comments, Skills, Jobs and Profiles

- Likes & Follow may only be created & deleted.

- The profile may only be updated.

- All nav links open to the correct page.

- Pages intended for logged-in users only will redirect logged-out users back to the home page.

- Users attempting to edit the content that they did not publish are redirected back to the home page.

- Users are able to create a new account.

- Users with an existing account are able to log in.

- Each user has the ability to log out.

Lighthouse report

Light house testing was performed and found performance to be poor. While this is to be expected with so many images, this could be improved in the future by compressing images before uploading them. Unfortunately, I did not have time to implement this functionality in this iteration.

![lighthouse_report](/documentation/lighthouse_report.png "lighthouse_report")

CSS Validation

All CSS files were individually validated and came back with no errors.

![cssvalidation](/documentation/css_validator.png "cssvalidation")


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
