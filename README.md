# react-blurify

Apply blur effect to children components.

### Demo - https://blurify-demo.netlify.app/

### Component Props

**children**.

**on** - boolean // condition to apply blur effect to children components // default false.

**intensity** - number // blur filter value // default 4.

**usePreloader** - boolean // control show/hide preloader over blured component // default true.

**preloaderPrimaryColor** - string // primary border color for preloader // default "#000".

**preloaderSecondaryColor** - string // secondary border color for preloader // default "#999".

**preloaderBorderWidth** - number // preloader border width // default 2.

**preloaderSize** - number // preloader height/width // default 36.

### How to use it

```javascript
  import React form 'react'
  import MyCustomForm from './myCustomForm'
  import Blurify from 'react-blurify'

  function MyComponent() {

  const [loading, setLoading] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    ... submit operation
    setLoading(false)
  }

  return (
      <Blurify on={loading}>
        // apply blur effect to MyCustomForm when loading
        <MyCustomForm onSubmit={handleSubmit}/>
      </Blurify>
    )
  }
```
