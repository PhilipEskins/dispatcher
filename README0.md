# _Dispatching Software_

#### _This will be my capstone project for the coursework I did at Epicodus_

#### By _**Philip Eskins**_

## Description

_This project will imitate dispatching software that I've used in the past when I used to work for HVAC companies. This will be an ongoing effort so please check the Process section for future updates._

## Current Features
* No features at this time, still in planning stage.

## MVP Features
* Basic functionality will be to just have a site that connects to Firebase and allows you to create, read, update, and delete the following: customers, work orders, addresses, technicians.
* Include the ability to assign jobs to each technician and to rearrange/reassign as needed.
* Be able to search by customer name and/or address.

## Future features
_Features that would make this an awesome dispatching software. In no particular order._
* Implementing separate logins for dispatcher, technicians, supervisor/admin, and customer.
* Integrate google maps api to provide distance from one job to the next on the technicians schedule.
* Allow customers to login and create new work orders for there business/house/or additional properties they own.
* Start/Stop function for the work orders.
* Alert system that will check in with the tech 15 minutes prior to the estimated completed time has passed to make sure they are running on schedule.
* Inventory system for technicians vans (which would update if they specified they used a part on a job)
* Alerts sent to dispatcher/technician if critical inventory is getting low or has run out.
* Suggested schedule for technicians (based on distance from home/previous job, technicians seniority, technicians skills, and skills needed for the job)
* Parts under warranty listed on the unit page.
* Work orders still under warranty have an extra notification.
* Easier quote generator for needed/recommended repairs.
* Automatic alert to dispatch if customer approves quote and wants the tech to do it same day or to schedule for a future date.
* Automatic work order created when new quote is submitted and alert is sent to the office if approved.
* If customer signs up for a maintenance plan then the maintenance work order will automatically generate and send an email reminder to the customer to call and get it scheduled at the specified interval when the agreement was made and have an alert in the office that the maintenance is due.
* If a recall or alert goes out for a unit be able to effectively search for those units and flag them.
* Implement VoIP calling features, so techs or office workers can click on a number to dial it.
* Centralized area to check what parts are pending for work orders, that way its easy to see if something is due today and if doesn't arrive its easy to catch.
* Additional features as I think of them.

## Setup/Installation Requirements

* _Download repository from https://github.com/PhilipEskins/dispatch/_
* _Type npm install in the dispatch directory in the terminal_
* _Type npm run start and the website will open up in a new browser window_
* _If you'd like to alter or see the code for the project, after downloading open the folder up in your favorite code editor._

## User Personas/Stories
#### Customer:
* Would like to have easy access to information related to the HVAC systems I own or I'm in charge of.
* Be able to edit incorrect/update information that relates to my account.
* Have the ability to submit work requests if my system stops working.
* Get automatic notices of maintenances I've signed up for.
* See past work that has been performed on my system(s).
* See any warranties that I have on my systems(s).

| Scenario | Response |
| ---: | :---|
| Goal:| Have a one stop location for taking care of my HVAC system. |
| Pain points: | HVAC system is down and its either too hot or too cold. |
| Circumstance: | Need information about my HVAC system or to submit a work request. |
| Tech ability: | Basic web browsing knowledge. |
| Devices: | Mobile/Tablet or Laptop/Desktop. |


#### Technician:
* Be able to see which work orders I have for the day.
* When I click on a work order I should be able to see customer information, unit information, past work performed and any access notes.
* See what kind of parts/tools I might need for the day.
* Easier way to make quotes for customers that provide multiple options.
* Be able to let the office know my status quickly.

| Scenario | Response |
| ---: | :---|
| Goal:| Get through the day as efficiently as possible. Easy to use system with nothing to complicated so I can focus on the HVAC work that needs to be done. |
| Pain points: | Calculating invoice totals if extra parts/services were provided. Letting the office know I'm behind while I'm in the middle of a job. |
| Circumstance: | System to log onto to track technicians time and whereabouts. |
| Tech ability: | Basic web browsing knowledge. |
| Devices: | Mobile/Tablet or Laptop |


#### Dispatcher:
* Be able to rearrange work orders quickly.
* Keep track of how the technicians are doing during the day.
* Create new customers, addresses, and work orders.
* Edit or delete customers, addresses, work orders as needed.
* Have easy access to customer information and past history of work performed.
* See a list of needed parts that each technician will need for the day with an indication of if it is on the technicians van or not.

| Scenario | Response |
| ---: | :---|
| Goal:| Keep tabs on the technicians so I can rearrange the work orders if needed to take care of all the customers for the day. Be able to quickly find information  |
| Pain points: | Upset customer on the phone and not able to see needed information quickly. Technicians not calling in to report they are running behind. |
| Circumstance: | System to keep track of work orders and technicians. |
| Tech ability: | Basic web browsing knowledge. |
| Devices: | Desktop |

#### Manager/Admin:
* Add and remove employees and/or access rights.
* Keep track of inventory that is on the technician van's and at the office.
* See a record of the day's activity.
* Need access to everything the technicians and dispatchers see.

| Scenario | Response |
| ---: | :---|
| Goal:| Keep track of all employees to make sure everyone is doing what needs to be done. |
| Pain points: | Seeing if a job is profitable or not. |
| Circumstance: | System to keep track of inventory and employees. |
| Tech ability: | Basic web browsing knowledge. |
| Devices: | Desktop |

## Data structure
```
Work order
  - ID Number
  – Customer
  – Address
  – Issue
  – Additional Info
  – Notes
  – Problem Type
  – Bill to
  – Estimated time
  – Time Slot
  - Date
  - Assigned Technician

Customer
  – Name
  – Phone
  – Email
  – Maintenance (T/F)
  – Address
  – Work orders
  - Preferred technician

Employees
  – Name
  – Address
  – Type
  – Wage/Rate
  – Skills (if technician)
  – Hire Date

Unit
  – Type
  – Brand
  – Model
  – Serial
  – Install date
  – Warranty info
  – Location

Address
  – Home owner/Business Name
  - Main Contact
  – Address
  – Access Notes
  – Units
  – Phone
```

## Process

#### Monday 5/6/2019
_Made some minor fixes to the README._

#### Sunday 5/5/2019
_Realized that my project will probably need a good search component. Added this to the MVP. Also read an article on how to add <a href="https://hackernoon.com/add-keyboard-shortcuts-to-your-web-app-ba358016ff05">Keyboard Shortcuts</a> to your web app, might be useful for creating new customers, work orders, or starting a search with just a few key presses._

#### Saturday 5/4/2019
_Spent some time doing research on Moment.js and css modules. Started thinking about some layout options. Also thought that work orders will need an assigned technician variable and possibly adding a preferred technician variable to the customer data. I'm considering using npx create-react-app for this project, did some research into that._

#### Friday 5/3/2019
_Since this is mostly a planning day the format for this entry will be a little different. I need to account for the time spent hour by hour so my instructors will know what I've been working on._
* 8:00am to 9:00am - Read <a href="https://reactjs.org/docs/thinking-in-react.html">Think in React</a> and started making this README
* 9:00am to 10:00am - Collaborated with a former coworker (who is still doing dispatching at my old company) on some future features that would make this project really awesome if I'm able to figure out how to implement them.
* 10:00am to 11:00am - Small mental break after thinking up future features. Started working on User Stories.
* 11:00am to 12:00pm - Continue working on User Stories.
* 1200pm to 1:00pm - Lunch.
* 1:00pm to 2:00pm - Finish user stories and start planning data structure.
* 2:00pm to 3:00pm - Finish planning data structure, might change after I think about it some more.
* 3:00pm to 4:00pm - Thought up a new future feature and adjusted Work Order data. Started contemplating layout. Brain is getting tired from thinking about this project so much. Will need to take a mental health break. Will put in more time either later today or over the weekend.

## Known Bugs

_No known bugs at this time_

## Support and contact details

_If you have problems or would like to comment about something feel free to contact me at philipeskins@gmail.com_

## Technologies Used

### License

*MIT*

Copyright (c) 2019 **_Philip Eskins_**
