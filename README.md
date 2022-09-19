
## Comments on Solution
Originally I tried to use React router to allow the proper change between pages. THis was an absolute nightmare and eve despite using their example code, I wasn't able to get anything to actually display to the screen- Consious of this being only a two hour exercise I decided to drop this approach

I then went for a more simplisticv approach, using conditionals to display the details. Clicking on one of the cards changes the state, only displaying the card selected with the new details and a back button to move back to the feed view. This is potentially an issue- if a user were to use the back button then everything would break. Ironically the way to fix this would be the use of React router to hijack that location change. For a mobile device this might be ok however, as that is an experience less geared around the actual browser buttons

There's a lot more that could be done about the animations when opening/closing a card. I've tried to be time efficient and use bootstrap built in components, but I'm not completely happy with the quality of these transitions, but could easily have spent several hours finetuning animations

All testing has taken place on Firefox using the responsive design mode to test with a mobile site

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

