# P2_EV_Chargers
Project 2 EV Chargers Across the US

Welcome to The Future Is Electric
A visualization of electric charging stations in the US

Instructions:

1. Take a moment and think about the planet and what you are doing to it with your gasoline-powered, carbon-dioxide-producing, global-warming-inducing car.

2. To see where you will be powering your brand-new, zero-emmissions vehicle in the not too distant future:a.Choose where you would like to clone this repo on your    machine. Go there, right-click and open a Git Bash (Windows) or Terminal (Mac).b.Run git clonelink here

3. Next, you will need to install DB Browser for SQLite (if you don’t already have it installed.  
    a.Go to https://sqlitebrowser.org/
    b.Select Download from the menu at top of the page
    c.Click Download and follow the instructions to install
    d.Open DB Browser for SQLite
    e.Select New Database
    f.Call it Project2 and save it in the Repo folder you just cloned.
    g.Exit DB Browser for SQLite before moving to the next step.

4. Select the main folder of the repo
    a.Right-click and open a Git Bash (Windows) or Terminal (Mac).
    b.Run source activate NewPythonData
    c.Run jupyter notebook 
    d.Open ev_chargers.ipynb and run all cells
    e.You will not need an API key as it is already saved in the code. (The code will call the API, create a table within the database you just created, and save it).

5. Go back into DB Browser for SQLite and open the database (Project2.db). The Project2(1) files & schema(1) are the established database files, however these instructions are to remake these same files.
    a.  Go to the Execute SQL tab, type the following code, highlight and run: update EVData SET Facility_Type = ifnull  (Facility_Type, "unknown")
    b.  In the same place, type the following code, highlight and run: update EVData SET EV_Connector_Types = ifnull (EV_Connector_Types, "unknown")
    c.  Now set a column as a primary key. Click on Database Structure tab then right click EVData under the Tables arrow then Modify Table.
    d.  Under the Modify Table menu click on "PK" to set the index column as a Primary Key.  
    e.  Save database and exit.

6. Select the repo folder again. Open a Git Bash (Windows) or Terminal (Mac).
    a. Run source activate NewPythonData
    b. Run python app.py

7. Open http://127.0.0.1:5000/ in a browser

8. Read the text, click on the links, study the graphs
