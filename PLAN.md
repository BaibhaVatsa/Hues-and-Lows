# Frontend

# Home View
- Maybe it will be better if the components have a parent component just so that the state is accessible to the the date and the pinwheel and the arrows components
- Has the following components:
## Date Component
- Shows the today's date
- When clicked, moves to calendar view
## Arrows Component
- A prev and next arrow
- Next arrow becomes clickable when the date shown is not the current date
- Prev arrow changes the date shown a day back
## Pinwheel Component
- Shows the pinwheel for the date being shown in the date component
- Full grey if no emotions registered?
- When clicked moves to the notes view to show the notes about the day
## Add Button Component
- Moves to the input view to take in input
<!-- ## Settings Menu Component -->

# Notes View
- Has the following components:
## Popup Component?
- Should this be a popup? or like a whole new screen?
## Animation Component
 - This page has animation. No need to create a new file for this.
## ListView Component
 - List showing all the notes for the day with bullet points
 - Maybe can be done better
 - Each note is a list element
### Individual List Element Component
## Cross Component
 - 'x' which when clicked exits the notes view

# Calendar View
- Has the following components:
## Popup Component?
## Arrows Component
## Calendar Component

# Input View
## Popup Component?
## Extra Data Component
## Mood Component
## Submit Button Component
## Cancel Button Component
## Notes Component

# App.js
## React Router
## Theme

# Assets
## Colours
## Emojis
## Fonts
## Icons
## Logo

# Stretch Goals
## Minimal Analytics
## Fluid Animations
## Project Name
## Presentation
## Loading Screen

# Backend

# Data Structures
## User Class
- Today 
- Name
- Password
- HashMap for month to array of 

## Emotion Class
- Description of emotion
- Name
- Colour associated with it 

## Event Class
### Has a notes field
### Array for list of extra items uploaded by user like images
### 

# NodeJS + Express vs Firebase
## Server
## YAML database?
