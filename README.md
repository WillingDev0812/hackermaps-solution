# Angular: HackerMaps

## Environment 

- Angular CLI Version: 10.0.4
- Angular Core Version: 10.0.4
- Node Version: 14(LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/r5HtWF6Z323Jj_Pwc08euQ/hackermap.gif)

## Functionality Requirements

The app has one component: the Navigation view. The list of locations to be displayed is already provided in the app. 

The app should implement the following functionalities:

- The locations should be initially displayed in their respective <li> tags in the same order in which they are provided.

- Each location can have one or two icon buttons depending on its position in the list:

  - The first location should only have the Move Down icon button. 

  - The last location should only have the Move Up icon button.

  - All the other locations should have both the Move Up and the Move Down buttons.

- Clicking on the Move Down button should move the location down by one position in the list.

- Similarly, clicking the Move Up button should move the location up by one position in the list.

- When a location is moved either up or down, it should exchange its position with the location positioned just above (if moving up) or below (if moving down)

- The list of locations is passed as props to the Navigation component.


The locations list is an array of strings, with each item representing a location in the list.


```
Note: Utility function isLast is provided to help with computing if the current location is the last item in the list. Also, the function getClasses is present in the template to aid in rendering. Please do not modify this function. 
```

## Testing Requirements

The following data-test-id/class attributes are required in the component for the tests to pass:

- The parent container of the location list `<ul>` should have the data-test-id attribute 'location-list'.

- Each location item in the list should have the data-test-id attribute 'location-0', 'location-1', 'location-2', and so on.

- Each location name paragraph tag `<p>` should have the data-test-id attribute 'location'.

- Each Move Up button should have the data-test-id attribute 'up-button'.

- Each Move Down button should have the data-test-id attribute 'down-button'.


Please note that the component has the above data-test-id attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them.

## Project Specifications

**Read-Only Files**
- src/tsconfig.spec.json
- src/app/app.module.ts
- src/app/app.component.spec.ts

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```

