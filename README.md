# Sprint Challenge: React - Star Wars

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored ReactJS, Function Components, component state and side effects. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web and style that data nicely on the page.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency with ReactJS Fundamentals and your command of the concepts and techniques in the Functional Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your Team Lead.

## Description

In this challenge, create a web page that presents a styled list of Star Wars characters. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React JS tries to solve the problem of static web pages. React allows you to create elements dynamically, that automatically update with "effect" hooks when we edit their "state". When we're able to create elements dynamically, we can do extra cool things like get a list from some API, and dynamically create an element for each item in the array.

- [ ] What does it mean to _think_ in react?

    I'm not completely sure what this is asking. If it's just asking about how you think while making a react app, I think it's all about taking a second to plan out how you're app is going to be strutured. For example, we want to make a page with a feed of posts. Each post has a profile on it of the user who posted it. We could make a Post component and a child Profile component, etc.

- [ ] Describe state.

    State is the data that an instance of a component has. 

- [ ] Describe props.

    Props are just the arguments that we pass in when we make a new component (<NewComponent exampleProp="example">), that we can use in the component later (console.log(props.exampleProp)). You can even set up effects for when these props change.

- [ ] What are side effects, and how do you sync effects in a React component to state or prop changes?

    Side effects are callbacks that we set up that react calls when the state or prop (that you specify, you can also specify none and it will just run once at the start) is changed. This is super useful (for example, keeping your components displaying up-to-date state on the page like if we changed the component's 'name' state, and then the component on the page updated to show the new name). To sync effects to fire when a specific state or prop changes, you specify the state or prop at the end of the function call arguments (ex. useEffect(callback, stateOrProp))

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [ ] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [ ] Change directories into `./starwars` (`cd starwars`) and run `yarn install` or `npm install` to retrieve all needed dependencies.
- [ ] Once you have installed the _node_modules_, run `yarn start` or `npm start` to get your server up and running.
- [ ] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty... _yet_, your goal is to ensure this project becomes a thing of beauty.
Follow these steps for completing your project.
- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] PM then will count the HW as done by merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Fetch a list of Star Wars characters from the [Star Wars API (or SWAPI)](https://swapi.co/) and render them to the screen. 
- [ ] Follow the documentation to learn how to fetch a list of "people". However, don't spend _too_ long on this. Here is a link for you to follow if you've looked around the docs for about 15 minutes or so and haven't found where to go - [Secret Link to Awesomeness 🤫](https://swapi.co/documentation#people).
- [ ] Set the data you fetch to state.
- [ ] Map over the list and render a component for each character on the page.
- [ ] You must display at least one element for each star wars character in the data set.
- [ ] The elements must be styled with either Reactstrap or styled-components - don't rely on browser default styles.

#### Required best practices:

- [ ] Consistent naming. Examples: variables, functions, Components, and file/folder organization.
- [ ] Consistent spacing. Examples: line breaks, around arguments and before/after functions.
- [ ] Consistent quotation usage.
- [ ] Spell-check.
- [ ] Schedule time to review, refine and reassess your work.


It is better to submit a challenge that meets [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) than one that attempts too much and fails.

## Stretch Problems

- [ ] Add at least one test using a testing tool:
  - [react-testing-library](https://github.com/testing-library/react-testing-library#basic-example)
  - [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)

- [ ] Build a pagination system that will allow you to load the next page of data.
  - `console.log()` the data coming back from the server.
  - Notice that there are `next` and `previous` fields that give you a URL.
  - You can build a function that will get characters called `getCharacters` that you can use dynamically to get the next or previous set of characters. You would need to supply it with the proper fields, and you'll need to set up more state to do this.

<!--
- [ ] Build another app from scratch that looks very similar to this one. Inside of your main `App` component fetch some data in this same fashion from this url `https://dog.ceo/dog-api/#all` you'll have to follow the documentation at that website and figure out how to change up the code you've seen here in this Star Wars app in order to properly fetch the data and store it on Component State.
-->
