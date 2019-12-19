# System Design

## Data Structures

- Arrays: for emotions

### Classes

#### Emotion

- Should be able to store name of the emotion and corresponding color it maps to.
- getColor
- getName

#### Entry

    Entry must have:

- list of emotion yoou selected.
- date and time
- list of files you uploaded(images)
- string for notes you typed.

## Frontend

### Common

    Files which are common among all elements.
    Example: a theme: defines overall style of our program.

#### Theme

    - overall styling,
    - font, font size, spacing

#### Assets

    - any icons, images.
    - we need logo.
    - for the app, not entered by the users

### Components

#### AddButtonComponent

- opens a pop-up which is a input form

#### ArrowComponent

- changes date and updates views accordingly
- there is a left arrow and right arrow.
- left arrow should goes to the previous date, right arrow goes following date
- right arrow should

#### CalendarComponent

- show a calendar
- should be a pop
- when you click on a date it should go back to home view and the date component should show the date you clicked

#### DateComponent

- should show today's date by default.
- should show the date passed by props.
- should open the calendar view when clicked

#### FileInputComponent

- allows you to upload the image.
- shows the preview of the image
- when you click, it opens browse file
- once you select file it shows a preview.

#### ListElementComponent

#### MoodInputComponent

#### NotesInputComponent

#### PinWheelComponent

#### SubmitButtonComponent

#### SettingsMenuComponent

#### SliderPickerComponent

#### ChangeThemeComponent

#### ChangeColorMappingComponent

#### ChangeGradientComponent

### Views

#### CalendarView

#### HomeView

#### InputView

#### NotesView

#### WelcomeView

#### SettingsView

#### ChangeColorMappingView

## Backend

### Server

#### GET Request

#### POST Request

#### PUT Request

<!-- # Frontend

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
## Settings Menu Component

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
## YAML database? -->
