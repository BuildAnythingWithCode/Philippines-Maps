# Philippines-Maps

A browser-based application that allows users located in the Philippines to submit, upvote, and downvote local public transportation routes.

Hello! Thank you for visiting the ReadMe of my project. I have decided to make this my first "real" programming project after a few years of on-and-off hobby programming, and observing among local Filipinos (and myself) a frustration with the lack of a centralized, government-backed public transportation information system. In a single sentence, the goal of this project is to build this app with the hope that Filipinos will then build the public transportation routes themselves, by submitting public transportation routes local to their region. This is the most ambitious project that I have ever personally taken on, and at the moment, it seems impossible to me. My goal with it is to eventually turn it into a full-scale web-based browser application, which allows users to do the following:

1. Create an account;
2. Submit any knowledge they have of routes for the following vehicles:
   2.a. Jeepneys,
   2.b. Tricycles,
   2.c. Busses (trains will be omitted, since trains have already had their routes sufficiently mapped out in Google Maps and elsewhere);
3. Delete an account that they have created;
4. Upvote on route(s) provided by other users by clicking an "Upvote" button next to their submission;
5. Downvote on route(s) provided by other users by clicking a "Downvote" button next to their submission;
6. See the following information in a consolidated section of the app:
   6.a. Route information they have submitted;
   6.b. Route submissions they have upvoted;
   6.c. Route submissions they have downvoted;
7. Retract a route submission, upvote, or downvote they have made in the past.

The app will be geo-locked to users in the Philippines, as that is the sole location that this app is based around. It will be free and open sourced, forever and always. The core functionality of the app is as follows:

1. Users can visit the application at any time by visiting the URL of the app in any modern browser, which will be hosted on GitHub Pages.
2. If the geolocation of the user is not based in the Philippines, then an error will be thrown.
3. If the user is based in the Philippines, then they can access the app, where they will be prompted to create a free account using their email address and a password.
4. After creating an account, users can submit their own knowledge of local public transportation routes (for jeepneys, tricycles, or busses), and upvote or downvote other user's public transportation route submissions.
5. JavaScript variables will keep a current running tally of the number of upvotes and downvotes on every route submission. A function will be used to add the total number of upvotes and downvotes, divide that number by the number of upvotes, and then multiply that number by 100 - this value will be the "Confidence Value" percentage of that route submission.
6. The Confidence Value percentage will only show after 5 votes - otherwise, it will simply say "More votes needed - vote now".
7. If a user upvotes a route submission, a popup alert will thank them for their contribution.
8. If a user downvotes a route submission, a popup alert will ask them how the route can be improved, with the following radio buttons:
   8.a. The route is not accurate.
   8.b. The route is no longer in service.
   8.c. The route is longer than what is specified.
   8.d. The route is shorter than what is specified.
   8.e. Other (here, they can add their own notes in a text field).
9. Any information submitted for how a route can be improved after clicking the downvote button will be publicly displayed for that route submission, so that other users can see that that route may not be accurate.

It will be made up of HTML, CSS, and JavaScript, since those are the only languages that I know. I will point out any parts of the code that were written with the use of AI by "commenting out" notes for that section in the code - otherwise, all the code will be hand-written by me.

I will take inspiration from the amazing already-created "Sakay.PH" app, made by the developer "Implication". While that app is already excellent, it only supports Metro Manila, and it does not feature a user-based submission/upvote/downvote system.

I will likely face the following problems and roadblocks associated with this project:

1. Getting Filipinos to find out about this app;
2. Getting Filipinos to sign up for it with an email address (I may remove the need to create an account if this becomes apparent - the reasoning for making account-creation necessary before allowing users to submit, upvote, and downvote on route submissions is due to the following reasons:
   2.a. Preventing spam and bots;
   2.b. Ensuring that user behavior is legitimate and not "frivolously" made;
   2.c. Coding the app itself (since I'm still just a hobbyist));
3. Coding the app itself (since I am still just a novice).

I will re-name this repository & application from the lame & crappy "Philippines Maps" to something better at some point in the future - ChatGPT has already suggested the following flashier names:

1. RutaKo ("My Route" in Tagalog);
2. SakayBayan (“People’s Transit” in Tagalog);
3. LakbayPH (“Travel Philippines” in Tagalog).

Thank you so much for reading my ReadMe! If you'd like to learn more about this project, or get in contact with me personally, please contact me through my GitHub account, BuildAnythingWithCode. Thank you!
