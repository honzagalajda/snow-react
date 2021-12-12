# React Snow
Is react components that creates falling snowflakes on your site.
## Installation
With npm
```
npm i snow-react
```
## Usage
Basic properties how to render snowflakes.
```jsx
import React from 'react'
import Snow from 'snow-react';

function App() {
  return (
    <div>
      <Snow 
        //Set up height (by default its whole body height).
        height='1080'
      />
    </div>
  );
}
export default App;
```

## Configuration
### Set z-index
You can set specific z-index for every snowflakes.
```jsx
<Snow 
    //z-index for whole element
    zIndex='1'
    //z-index for near snowflakes
    zNear='2'
    //z-index for middle snowflakes
    zMid='2'
    //z-index for far snowflakes
    zFar='1'
/>
```
### Set speed
You also can set specific speed for every snowflake (default speed is 10).
```jsx
<Snow 
    //speed for near snowflakes 
    nearSpeed='15'
    //speed for mid snowflakes 
    midSpeed='15'
    //speed for far snowflakes
    farSpeed='15'
/>
```