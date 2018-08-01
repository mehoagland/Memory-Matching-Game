# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day              | Deliverable                                   |
| ---------------- | --------------------------------------------- |
| Day 1: Tuesday   | Game Idea                                     |
| Day 2: Wednesday | Completed wireframes and prioritized features |
| Day 3: Thursday  | Pseudocode                                    |
| Day 4: Friday    | Basic Clickable Model                         |
| Day 5: Saturday  | Working Prototype                             |
| Day 6: Sunday    | Game Completed / Slides                       |
| Day 7: Monday    | Project Presentations                         |

## Project Description

I am going to be building a memory matching game. For the board game, there will be an 8X8 box grid where you have to find 4 matching colored squares. Once you have found all the color matches the board will shuffle to a new colored box layout and you will be able to play again.

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.

## Quadrant 1

#(Top left - urgent items – items that need to be dealt with immediately).

* Get programming completed for flipped/flipping squares when picked.
* Shuffling the colored square boxes for board replay.
* Make matching logic for squares

##Quadrant 2
#(Top right- Important, but not urgent items. The quadrant that we should focus on for long term achievement of goals)

* Pretty CSS (Typography, Color Schemes)
* Need to stop being so anxious for projects.

##Quadrant 3
#(Bottom left - urgent, but unimportant items – items which should be minimized)

* Obessing over beginning CSS

##Quadrant 4
#(Bottom right - we have unimportant and also not urgent items)

* Ideas that I have to make my game more complicated.

## MVP

#Minimum viable product (MVP) is a product with just enough features to satisfy early customers, and to provide feedback for future product development.

* One level
* Click / flip over color card to make match
* Keep matches flipped over (4 matching colors)
* Shuffled board for replaying

## POST MVP

* Second Level with max error tracker that shuffles board to start again.

## Wireframes

Please see Wireframes-MemoryGame-Components.jpg and Wireframes-MemoryGame-Landing.jpg

## Game Components

Please see Wireframes-MemoryGame-Components.jpg

### Landing Page

Please see Wireframes-MemoryGame-Landing.jpg

What will a player see when they start your game?
Please see Wireframes-MemoryGame-Landing.jpg

### Game Initialization

On the landing page, as seen in Wireframes-MemoryGame-Landing.jpg, I will have a welcome message inviting players to start the game by inputing their name. Once they have entered their name and clicked submit, they will be brought to the next page, Wireframes-MemoryGame-Components.jpg. Which is a blank grid of squares that need to be clicked and matched with pairs.

### Playing The Game

* The user will be expected to click on any square and start finding matches.

### Winning The Game

* The game is won when all the color matches are found. The grid will be showing all the colors.

### Game Reset

* Once all matches are found, a message will show letting player know they have won. There will be a button below the game to ask if player would like to replay, and if so the board will shuffle and player can play again with a new board

## Functional Components

-shuffle function
-flip cards function
-matching pairs function

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions. Does your logic indicate that code could be encapsulated for the purpose of reusablility. Once a function has been defined it can then be incorporated into a class as a method.

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted.

| Component   | Priority | Estimated Time | Time Invetsted | Actual Time |
| ----------- | :------: | :------------: | :------------: | :---------: |
| Component 1 |    H     |     10hrs      |     12hrs      |    12hrs    |

## Helper Functions

Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function   |                    Description                    |
| ---------- | :-----------------------------------------------: |
| Capitalize | This will capitalize the first letter in a string |

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project.

## jQuery Discoveries

Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.

## Issues and Resolutions

Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....

**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier  
**RESOLUTION**: Missing comma after first object in sources {} object
