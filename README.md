# MBoutique

## Assignment
> We will be building out the full MBoutique website

> The MBoutique webstite contains 4 seperate pages
  - Welcome
  - Our Macarons
  - Gifts & Parties
  - Contact

## Code Setup Details

#### 1. Fork Repository
> Forking the repository or Repo will give you a copy of this repo under your own GitHub user account. We will be starting with a Learning-Fuze account repo.

> Click the Fork icon in the top right corner if you have not done so already

#### 2. Copy locally (Clone the Repo)
> `git clone https://github.com/[your-user-name]/mboutique.git`

> <b>[your-user-name] should be replaced with your exact github account name</b>

> Cloning a repository is making a copy of the repo that was forked on github.com/[your_account_name]/mboutique (in the step above) and saving it too your computer (Local Machine).

#### 3. Click the Links Below
> Below are the assignment links that will contain further information about creating feature sets (branches) and how to submit your assignments.

> ##### Steps 1 & 2 from above only need to be done once, *DO NOT* Repeat those steps for every assignment 

## Assignment 1
> <a href="https://github.com/Learning-Fuze/mboutique/tree/assignment_1" target="_blank">Click here for assignment 1</a>

## Assignments 2-4
> <a href="https://github.com/Learning-Fuze/mboutique/tree/assignment_2" target="_blank">Click here for assignment 2</a>

> <a href="https://github.com/Learning-Fuze/mboutique/tree/assignment_3" target="_blank">Click here for assignment 3</a>

> <a href="https://github.com/Learning-Fuze/mboutique/tree/assignment_4" target="_blank">Click here for assignment 4</a>

## Assignment 4
We will be building out the Contacts page of the MBoutique website

## Code Setup Details

#####1. Open PHPStorm

> You should be opening phpStorm to your lfz directory for all projects

> Expand the mBoutique folder to view the project files

> Make sure to add all project related files to the proper directory
>	- For this project it should be: `lfz/mboutique`

#####2. Navigate to mBoutique in the terminal

> Insert this command in the terminal tab

> `cd mboutique` & press enter

> - this changes the directory to the mboutique folder
> - If you get an error with the above command its probably because you are already within the correct directory

#####3. Create a feature grouping (*Create feature branch*)

> Insert & execute these command in the terminal tab individually

> `git checkout master` & press enter
> - The command above switches to the default branch

> `git checkout -b assignment_4`
> - If you get an error saying something like  assignment_4 already exists do the following
>	- `git checkout assignment_4`
> - Creating this feature groupings allow users to modify code without causing issues with the current functioning code.
> - Any modifications to these files after <b>branching</b> can be undone
> - "assignment_4" is the branch name.

## Coding Instructions

### Feature Set 1 - Contact Page Mobile Friendly
> - Create the HTML and CSS necessary to reproduce a mobile friendly version of the MBoutique Contact page
	- Use the contact.html file for your HTML
	- Use the style.css file for your CSS
	- The page should match the design dock when displayed on a large screen
	- The page should switch to a mobile version on smaller screens
		- Refer to mobile images below for desired look
> - Don't forget to link your CSS to your HTML 
	- ex: `<link rel="stylesheet" type="text/css" src="style.css">`
> - Use the design images for reference (Found in the assets folder)
> - For testing on a mobile device refer to instructions below
	- For this assignment you will be testing the output for an iPhone 6
> - In the head section of your contact.html page add the following meta tag
	- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
	- Without the above tag, your page will not display properly on a mobile device

#### Screenshot Example

><img src="https://github.com/Learning-Fuze/mboutique/blob/master/assets/mboutique_preview/screenshots/contact-screenshot.png?raw=true" alt="MBoutique Contact Page Screenshot">

#### Design Doc

><img src="https://github.com/Learning-Fuze/mboutique/blob/master/assets/mboutique_preview/_preview_explained/contact_exp.png?raw=true" alt="MBoutique Contact Page Design Doc">

#### Mobile Screenshots

><img src="https://github.com/Learning-Fuze/mboutique/blob/master/assets/assignment_4/mb-mobile-1.png?raw=true" alt="mBoutique mobile screenshot 1">
<img src="https://github.com/Learning-Fuze/mboutique/blob/master/assets/assignment_4/mb-mobile-2.png?raw=true" alt="mBoutique mobile screenshot 1">

#### How to test for mobile

> Don't forget to add the following meta tag in the head section of your page

> `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

#### Open the inspector in chrome
- Locate the mobile phone icon at the top left of the inspector

> ---

><img src="https://github.com/Learning-Fuze/mboutique/blob/master/assets/assignment_4/mobile-icon.png?raw=true" width="800">
 
--- 
 
#### After clicking the phone icon you should see a new tool bar across the top
- In the pull down menu select iPhone 6
	
---	
	
><img src="https://github.com/Learning-Fuze/mboutique/blob/master/assets/assignment_4/choose-device.png?raw=true" width="800">
	
---	
	
#### Refresh the page

After the page refreshes you should see what your page would look like on a mobile device

---

#### Mobile Suggestions

> - Use media quieries for your CSS, like
    - `@media sceen and (max-width: 627px)`
> - For your sizing use percentages, vh and vw
> - Keep mobile in mind when you are building the full size site
    - Use the mobile first approach

#### Suggestions

> - Break the page down into sections and build one section at a time. For example:
	- Header section
	- Body/Main content section
	- Footer section
> - Keep in mind that there are multiple pages
	- Notice the sections that are the same on all pages like the header and footer
	- Design your HTML so that it will be easy to reuse the header and footer sections on all the pages
> - Don't panic
	- If you get stuck or have any issues use google or the LearningFuze forum
> - If you are familiar with them, make use of the chrome developer tools to prototype out your changes.
	- You can find more details on <a href="http://discover-devtools.codeschool.com" target="_blank">CODESCHOOL</a> and other places. 
> - Test each CSS change as you implement it.  It can be difficult to ascertain "what went wrong" if you do many lines of code and then test it.
> - Pay attention to the gross details first, and then make a second pass for fine details. 

## After Coding Details
##### 1. Save files to Git - Add all modified & created files
> Run below command in terminal tab

> `git add .`

> Saving files to Git registers the changed files in Git, allowing them to be grouped together by a message (commit)

##### 2. Package (group) all saved git files with a commit message

> Run below command in terminal tab

> `git commit -m "mboutique Assignment_4 - Eric Johnson"`
> - Eric Johnson should be replaced with your First & Last name
> - Grouping files with a message allows those changes to be seen by others as a specific version of the code

##### 3. Allow others to see your changes by uploading them to the Github website

> Run below command in terminal tab

> `git push origin assignment_4`
> - When running the code above, the Git application will send all commits (<b>groupings of saved files</b>) to the 
remote location (<b>github.com/[your-user-name]/mboutique indicated by origin</b>), specifically to the feature 
branch/group <b>assignment_4</b>

##### 4. See if your feature fits with what everyone else was working on (Pull Request)

> ####Step 4.1 Open your mboutique Repo in the browser
> - The link Should follow this format github.com / [your user name] / mboutique

> ####Step 4.2 Click Pull request tab to open the pull request list

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/1.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/1.jpg?raw=true" width="350"/></a>

> ####Step 4.3 Click "New Pull request" button

> <a href="https://github.com/Learning-Fuze/prototypes/blo b/assets/assets/example/2.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/2.jpg?raw=true" width="800" /></a>

> ####Step 4.4 Comparing Changes

> During this step there are a hand full of highlighted things that need to be taken into consideration.

> ###The image below is just an example. 

> ###Make sure to change the options according to the written directions below

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/4.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/4.jpg?raw=true" width="800" /></a>

> 1. `base fork: Learning-Fuze/mboutique`
> 1. `base: C#_userName`
>   1. Here you will select the option that matches your username
>   1. If you can not locate an option that has your username, contact an instructor
> 1. `head fork: [your_user_name]/mboutique`
>   1. Here you will select the option that matches your username / mboutique
>   1. If you can not locate an option that has your username / mboutique, contact an instructor
> 1. `compare: assignment_4`
>   1. Here you will locate the branch name (or feature name) you created at the beginning of the assignment
> 1. Github.com will let you know if the code can be merged automatically (without needing a manual merge)
>   1. If the text says something other than "able to merge". <b>Contact an instructor</b>
>   1. Sometimes a manual merge is necessary, it just has a couple more steps when completing the request (done by instructors at start)
> 1. Once we have verified #1 - #4 and noted #5, we click the "Create Pull request" button (#5 in the image above)

> ---

> ####Step 4.5 Add details into the pull request
> 1. Give the pull request a title, by default its the name of the last commit (package) message that was saved
>   1. If you set the commit message above you should get get <b>mboutique Assignment_4 - [you name first & last 
name]</b> already pre populated in the Title field
> 1. <b>Don't assign a user.</b> (An Instructor will select who this gets assigned too)
>   1. Further into the cohort we will have students learn to review pull requests
> 1. Click on "Create pull Request"

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/5.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/5.jpg?raw=true" width="800" /></a>

> ---

##### 5. Collaborate on feedback

> Within the Github.com UI another developer or in this case an instructor will review the Pull Request you made - <b>Is your feature working</b>. Collaboration happens through github UI & the notifications are sent through email when comments are added to pull requests

> - Students should make modifications to there code based on the instructors feedback
> - Instructors will be giving an initial assessment based on the pull request. <b>Any additional collaboration after the instructor has been feedback will be on a requested basis only.</b>

##### 6. Pull Request Closed
> - In the LearningFuze workflow the pull requests are closed to indicate assessment has been given to the student and recorded.
