# Getting Started with Instagram Clone

Instagram Clone is a simple web application that allows you to experience simualation of the real Instagram application. You can view posts, create a post, comment on posts, have access to a profile page and more

## Installation

The backend repository uses Rails and can be found at https://github.com/sgrant0225/instagram-clone-backend After cloning both frontent and backend repositories, it is suggested that you run the backend first with the follwing commands:

```
bundle install
rake db:migrate
rake db:seed
rails s
```

On the frontend repo, run the command:
### `npm install` then run `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/login](http://localhost:3000/login) to view it in your browser.

This will bring up the login page.  If you are new to Instagram Clone and do not have an account please select the sign up link on the login page. Once you have signed up it will bring you to the https://localhost3000/posts this where you can view all post created on this app.  You can like a post, leave a comment on the post, you can select the + plus symbol to create a post, you can select your avatar picture located on the navagation bar to take you to your profile page to see all the post you have created. on you Profile page you can click an image ad modal will appear for to view and delete your posts.  Once you finished using the app you select the exit icon to sign out. 

## Features for future Versions
```
. Edit your profile page
. Edit a Post
. Add videos
. Create a file picker so you can upload files using local computer
. Add Followers
. Send Posts to another follower
```
## Contributing
Bug reports and pull request are welcome on Github at https://github.com/sgrant0225/instagram-clone-frontend. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License
The gem is available as open source under the terms of the MIT License.
