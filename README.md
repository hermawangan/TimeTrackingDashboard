# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](/public/Desktop_Preview.png)
![](/public/Active.png)
![](/public/Mobile_preview.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- [Tailwindcss](https://tailwindcss.com/)
- [React](https://reactjs.org/) - JS library

### What I learned

```html
   <button
            id="Daily"
            name="daily"
            onClick={clickHandler}
            className={`${
              active === "Daily" ? "active" : null
            }  hover:text-white md:mt-4`}
          >
            Daily
          </button>
```

The Html Code above will implement the active state if the button is clicked. really proud of that code and logic.

```js
<div className=" grid md:col-span-2">
  <div className="grid md:grid-cols-3 md:place-content-center">
    <UserActivities time={name} />
  </div>
</div>
```

This is where the business code begin to start. UserActivities will generate all the activities depends on the button click. if the button clicked is daily then it will generate daily activities and vice-versa.

### Continued development

For next project i will continue focusing on tailwind and react to built future projects. I know that i still lack many things when writing code. but I will certainly improve and not giving up.

### Useful resources

- [resource 1](https://tailwindcss.com/) - This is where i find the solution for style tailwindcss. The documentation itself stated and wrote really clear.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@hermawangan](https://www.frontendmentor.io/profile/hermawangan)
- Twitter - [@hermawangan39](https://twitter.com/hermawangan39)
- LinkedIn - [@hermawangan](https://www.linkedin.com/in/hermawan-gan/)
