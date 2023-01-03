# HIKERS HUB
A full-stack MERN app for hikers to interact and view hikes from around the western United States


<h3>Link to Github Repo: </h3>
https://github.com/SEIR-Hikers-Hub/Hikers-Hub

<h3>Link to launched app:</h3>
https://hikers-hub.herokuapp.com

<h3>List of technologies used:</h3>
Mongoose (MongoDB), Express, ReactJS, NodeJS, HTML, CSS, Bootstrap for React


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



<h3>Wireframes:</h3>




<h3>Screenshots:</h3>
![Screen Shot 2023-01-02 at 5 13 59 PM]
<img src="https://user-images.githubusercontent.com/115961145/210290895-dd136e65-cc97-47f8-ae55-16dc54f4feea.png" alt="hikers hub screenshot"/>


<h3>Unsolved Problems / Hurdles </h3>
<ul>
<li> Unable to show Edit trail and Delete trail only for authenticated user. We were partially successful in trying to put these in a useEffect but it interfered with the functioning of the EDIT and DELETE routes. </li>
<li> Weather data: We are able to pull the data from a third party API (WeatherAPI from RapidAPI) but unable to render the JSON data on a separate page.</li>
<li> We were unable to link the reviews to the user. </li>
<li> We could not get to our stretch goals of searching by activity. </li>
</ul>

