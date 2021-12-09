# React Snow
React components that creates falling snowflakes on your site.
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
      <Snow />
    </div>
  );
}
export default App;
```

## Configuration
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