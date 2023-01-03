# HIKERS HUB
A full-stack MERN app for hikers to interact and view hikes from around the western United States


<h3>Link to Github Repo: </h3>
https://github.com/SEIR-Hikers-Hub/Hikers-Hub

<h3>Link to launched app:</h3>
https://hikers-hub.herokuapp.com


<h3>Team Members:</h3> 
David Milton, Erik Scheive, Miguel Darensbourg, Suma Gowrishankar

<h3>Roles: </h3> 
David: Designer and Database mgmt
Erik: Github Mgmt and Database mgmt
Miguel: API mgmt and Documentation
Suma: Scrum master and Documentation 

<h3>Project Idea:</h3> 
Hikers Hub: Choose your trail and hike it too ! Walking the trials and trails of life !!

<h3>What does the site do ?</h3>
We have two personas that can interact with the site - Authenticated Admin to add, edit, remove trails and Users who can browse trails by state or by activity and leave reviews and photos
Hikes are divided by state - CA, OR, WA.
Trails are also activity based - hiking, backpacking, biking, offroading.
Users can check the weather of the area they choose by entering in the location in the search bar.

<h3>Models</h3>
User - username, password, location, admin (yes/no)
Trail - name, images, location, difficulty, description, terrain, length, review (subdocument)
Reviews - title, description, rating 

<h3>MVP:</h3>
<ul>
<li> All trails for CA, WA, OR will show up </li>
<li> Authenticated Admin has full CRUD control (we only have one type of authenticated user for MVP, who is admin by default) </li>
<li> Three models - Trails, Reviews, User with Review being a sub-document (related) to trail </li>
<li> Bootstrap for CSS </li>
<li> Weather API integration </li>
</ul>

<h3>STRETCH:</h3>
We were <b>not</b> able to achieve any of our stretch goals:
<ul>
<li> Reviews will have link to User </li>
<li> Authenticating anyone other than admin </li>
<li> Searching by Activity, State </li>
<li> Displaying weather in separate page </li>
</ul>

 
<h3>User Stories</h3>
<b>Two personas</b>: Admin and Visitor

<b>Login for Admin (MVP)</b>
As an admin I would like to login to the Hiker’s Hub app and be able to view, add, edit and remove trails so that I can manage the app.

<b>CRUD operations - Admin (MVP)</b>
As an admin, once I am logged in, I should be able to Add a new Trail and access it later with the Show Trails option
As an admin, once I am logged in, I should be able to Edit a trail and access the changed information with the Show trails option. 
As an admin, once I am logged in, I should be able to Remove a trail. 

<b>User checks out a trail </b>
As a visitor to the Hiker’s Hub site, I should be able to check the weather of the area in which I want to hike today. (third party API integration of Weather API) 
As a visitor to the Hiker’s Hub site, I should be able to add reviews and photos to any trail so that I can share my experience and be able to recommend hikes to others.

<b>User Search (Stretch - Unable to achieve)</b>
As a visitor to the Hiker’s Hub site, I should be able to search for any trails in CA, OR or WA so that I can choose a trail to hike !
As a visitor to the Hiker’s Hub site, I should be able to browse by activity: hiking, biking, backpacking, offroading


<b>ROUTES :</b> 

| **URL**   | **HTTP Verb** | **REST Action** | **CRUD Action** |
| --------- | ------------- | --------------- | --------------- |
| /hike/    | GET           | index           | read            |
| /hike/:id | GET           | show            | read            |
| /hike/new | GET           | new             | read            |
| /hike     | POST          | create          | create          |
| /hike/:id/edit | GET      | edit            | read            |
| /hike/:id | PATCH/PUT     | update          | update          |
| /hike/:id | DELETE        | destroy         | delete          |
| /user/    | GET           | index           | read            |
| /user/new | GET           | new             | read            |
| /user     | POST          | create          | create          |


Wireframes:



Screenshots:

