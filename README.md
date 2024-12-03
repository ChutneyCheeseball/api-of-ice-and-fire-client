# A client for An API of Ice and Fire

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The [MUI](https://mui.com) component library is used for many visual elements.

Book covers are fetched from the [Open Library Covers API](https://openlibrary.org/dev/docs/api/covers).

## Getting started

In the project directory, after installing the node modules, you can run:

### `npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Please be patient while the API data is fetched on the first load.

## Development methodology

### Saving API data to local storage

Due to the highly recursive nature of the [An API of Ice and Fire](https://anapioficeandfire.com/) data (e.g. a character can link to multiple other characters, houses and books) I decided to fetch all API data on app render.

All books, houses and characters are fetched at once, and then stored in local storage. On subsequent renders they do not need to be fetched from the remote API, but rather read from storage.

This works well because of the static nature of the data. Once everything is loaded, all items can be navigated without any additional API calls.

### UI/UX design woes

I am not a very good UI/UX designer and I struggled for many hours to develop the look and feel of the app. For this reason I used the MUI library to speed up the development time of some of the visual elements.

I am much better at interpreting Figma designs etc. and implementing them, than I am at coming up with my own visual design.
