# Contributing to SpeakEd

Here are the guidelines to contribute to this open source project.

## Prerequisites  
* [Git](https://git-scm.com/downloads)
* [Node](https://nodejs.org/en/download/)

## How to set up the project locally?

### Fork the Repository
Firstly, you need a copy of this repository in your own GitHub account. For forking the repository press **Fork** button to initiate the git forking process.

![Forking](https://i.imgur.com/L0fhRnq.png)

>You will see a copy of this repository in your GitHub account.

### Clone the Repository
After forking the repository you need a copy of it in your local machine.
* To clone the repository, go to your forked repository page in your GitHub account and press the **Code** button.

  ![Clone](https://i.imgur.com/X7ycgh1.png)

* Select the URL option you prefer to clone the repository onto your local machine and click the _copy to clipboard_ icon.

  ![Copy URL](https://i.imgur.com/4JvFfUg.png)

* Once done, open **Git Bash** on your sytem and change your current working directory to the location where you would like to clone your repository. 
* Once navigated to the directory, use this command to clone the repository in your directory: 

   ```sh
   $ git clone https://github.com/Your_Username/SpeakEd.git
   ```
### Adding Upstream Remote
In this stage, you need to set up a new remote to **sync your local repository** with **upstream respository** so that you can grab any changes and bring them into your local repository and push the changes to your remote repository. This avoids [**merge conflicts**](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-merge-conflicts) which most likely happen when working in team environment. 

To add the original repository as an upstream remote:
* Copy the URL of upstream repo by clicking the _copy to clipboard_ icon.
      
  ![Upstream](https://i.imgur.com/S7J2PjZ.png)

* Use the following command in your terminal

  ```sh
  $ git remote add upstream https://github.com/HarshCasper/SpeakEd
  ```
* Use following command to see your current remotes

  ```sh
  $ git remote
  ```
  >You will see the list of your current remotes.  
  >origin- which points to your GitHub fork of the project.  
  >upstream- which points to the original project's GitHub repository.            

### To run the project in development mode
* To install the dependencies, use this command in your terminal:

  ```sh
  npm install
  ```

* After the installation process is completed, use this command to run the app in development mode:

  ```sh
  npm start
  ```          

## Your first Contribution
Unsure where to begin contributing to SpeakEd? 😕<br /> 
Look for issues tagged with [good first issue](https://github.com/HarshCasper/SpeakEd/contribute).

## Create a Branch

When you contribute to a project it's good practice to create a new branch from the `main` branch. The branch name should be short and meaningful and relevant to the work you are intending to do.

To create a new branch, open your terminal or **Git Bash**. 

* To ensure that you're on the `main` branch, use the following command:

  ```sh
  $ git checkout main
  ```

* Then use the following command which will sync your local copy with the upstream project and will sync it to your forked repository.

  ```sh
  $ git pull upstream main && git push origin main
  ```
* To create a branch, use this command: 

  ```sh
  $ git checkout -b <branchname>
  ```
Now you can start working to fix the issue. 🚀

## To Create a Pull Request

To create a PR you need to push your branch to the `origin` remote.

1. To push a new branch: 

   ```sh
   $ git push -u origin <branchname>
   ```
   >This will create the branch on your GitHub project and the -u flag links your local branch with remote branch, and you can just use git push origin when commiting any changes in the local branch.

2. Finally, go to your forked repository in your browser and press the green button `Compare & pull request`.  
   >This will open a page in which you'll be able to further edit the description for your proposed changes.

3. Make sure you follow the Pull Request Template and your PR's description should contain GitHub's special keyword references that automatically close the related issue when the PR is merged. (Check [this](https://github.blog/2013-05-14-closing-issues-via-pull-requests/) for more info)

4. Finally, press the green button labelled as `Create pull request`.

## Learning Resources 📚

* [Git Started with GitHub](https://www.udemy.com/course/git-started-with-github/?LSNPUBID=JVFxdTr9V80&ranEAID=JVFxdTr9V80&ranMID=39197&ranSiteID=JVFxdTr9V80-.eo946O7LA.e_kedPDtXLw&utm_medium=udemyads&utm_source=aff-campaign)
* [Learn Git: Everything You Need To Know](https://www.udemy.com/course/learngit/?ranMID=39197&ranEAID=JVFxdTr9V80&ranSiteID=JVFxdTr9V80-K5pDC6IWSDnHLwh8jTAbEg&LSNPUBID=JVFxdTr9V80&utm_source=aff-campaign&utm_medium=udemyads)
* [The beginner's guide to contribute to a GitHub project](https://akrabat.com/the-beginners-guide-to-contributing-to-a-github-project/)