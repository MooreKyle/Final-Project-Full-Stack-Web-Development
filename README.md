# Web Development Final Project - *HobbyHub - Technology*

Submitted by: **Kyle Moore**

This web app: **This web app allows the user to view a forum regarding the topic of technology, including the latest technology, items, tips, you name it! The web app allows users to create posts and see a feed of them on the home page. It also allows one to edit, delete, or leave comments underneath them for discussions, and give upvotes for posts that they like! The user may also sort posts by created time or upvotes count which will display in descending order. Users will be able to see the time a post was created as well.**

Time spent: **16** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **A create form that allows the user to create posts**
- [x] **Posts have a title and optionally additional textual content and/or an image added as an external image URL**
- [x] **A home feed displaying previously created posts**
- [x] **By default, the time created, title, and number of upvotes for each post is shown on the feed**
- [x] **Clicking on a post shall direct the user to a new page for the selected post**
- [x] **Users can sort posts by either their created time or upvotes count**
- [x] **Users can search for posts by title**
- [x] **A separate post page for each created post, where any additional information is shown is linked whenever a user clicks a post**
- [x] **Users can leave comments underneath a post on the post's separate page**
- [x] **Each post should have an upvote button on the post's page. Each click increases its upvotes count by one and users can upvote any number of times**
- [x] **A previously created post can be edited or deleted from its post page**

The following **optional** features are implemented:

- [ ] Users can only edit and deleted posts or delete comments by entering the secret key, which is set by the user during post creation
- [ ] Upon launching the web app, the user is assigned a random user ID. It will be associated with all posts and comments that they make and displayed on them.
- [ ] Users can repost a previous post by referencing its post ID. On the post page of the new post, the referenced post is displayed and linked, creating a thread
- [ ] Users can customize the interface of the web app
- [ ] Users can share and view web videos
- [ ] Users can set flags while creating a post. Then users can filter posts by flags on the home feed.
- [ ] Users can upload images directly from their local machine as an image file
- [ ] Display a loading animation whenever data is being fetched

No additional features were added beyond the scope of the required and optional features, and are being considered as future enhancements.

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## GIF Walkthrough [UPDATED!] 

Here's a walkthrough of implemented user stories in GIF format:

<img src='https://imgur.com/a/FKzITZM' title='GIF Walkthrough' width='' alt='GIF Walkthrough' /> [UPDATED!]

![Final Project (compressed)](https://github.com/MooreKyle/Final-Project-Full-Stack-Web-Development/assets/49001825/1780abe8-b813-4dbb-81ce-2989b2c65aba)

GIF created with ScreenToGif

## Video Walkthrough & Code Outline [UPDATED!] 

Video File is in this project's root folder and can also be found at the following hosting link below:
    https://drive.google.com/file/d/1d8TBHs8AaegO_r1IvzPkonBRlCIAnwg3/view?usp=sharing

An accompanying picture file is included in this project's root directory explaining the outline of the code with further details.

## Deployed Website [UPDATED!]

Access the live application here: [HobbyHub - Technology](https://techtalkforums.netlify.app/)

## Notes

- **Testing and Debugging:** Extensive testing was conducted to ensure all features and assets functioned correctly. This involved systematic testing during feature implementation to resolve issues promptly and integrate new features effectively.

- **Comments Feature Integration Challenges:**
  - Initial challenges in setting up the comment feature were largely due to integrating with the Supabase backend.
  - The setup required careful handling of data fetching and rendering to ensure comments appeared under posts as intended.
  - Error handling was crucial during comment retrieval and submission, taking substantial time to troubleshoot various issues.
  - Ensured comments were displayed immediately after submission, although real-time updates were not implemented due to the project's scope.
  - Integration of comment deletion raised issues related to user authentication and data consistency, which were systematically addressed to ensure a smooth user experience.

- **Analytical Thinking and Problem Solving:**
  - Throughout this project, I honed my analytical thinking and problem-solving skills significantly. By diagnosing error messages and debugging real-time issues, I learned to identify the underlying causes of bugs effectively. This process involved assessing the integration of various features, understanding how independent components interact within a larger system, and adjusting their interactions for optimal functionality.
  - Specifically, integrating the comment functionality challenged me to manage asynchronous operations and state updates efficiently, providing valuable insights into handling user interactions and data consistency in web applications.
  - This experience has not only improved my technical skills but also enhanced my ability to anticipate potential issues and implement more robust solutions.

This project not only enhanced my technical skills but also improved my ability to debug complex applications and understand user interaction with dynamic web elements.

## License

    Copyright [2024] [Kyle Moore]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
