---
date_publish: 08/23/2020
description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt sit temporibus nisi distinctio.
tags:
  - React
  - Express
  - MongoDB
title: Sample Post
show_post: false
internal_images: 
  - "/v1635041037/Portfolio/blog_thumbnail.jpg"
  - "/v1635041038/Portfolio/blog_samplesnippet.png"
external_images:
  - "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  - "https://i.pinimg.com/474x/5f/4a/14/5f4a142c059f9bb6ef39e81f29d4b0ec.jpg"
---

Lorem ipsum dolor sit amet.

> _This is a_ blockquote. View all posts [here](/blog)

![code snippet](/v1635041037/Portfolio/blog_thumbnail.jpg "sample code snippet")

![code snippet](/v1635041038/Portfolio/blog_samplesnippet.png "sample code snippet")

![code snippet](https://i.pinimg.com/474x/5f/4a/14/5f4a142c059f9bb6ef39e81f29d4b0ec.jpg "sample code snippet")

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti adipisci quia beatae architecto, unde doloremque at nisi pariatur eos eum.

![square bracket](https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)
[Photo](https://unsplash.com/photos/wQLAGv4_OYs) by Lucas Benjamin

```js
function hello() {
  return 'hi';
}
// this is a really really really long line of text that should force an overflow on the x-axis
// next line
    // spaced next line
```

Inline code example: `() => console.log(true)` Fancy.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, placeat. Nulla ratione in enim voluptas voluptatem. Cumque, nobis doloribus molestiae aut at tenetur autem sint iusto quam, consequuntur, quo tempora. 

### TS Code Block

```ts
type Props = {
  children: React.ReactNode;
} 

const str: string = 'string'

const func = (props: Props) => undefined
```

### Typescript Code Block

```typescript
type Props = {
  children: React.ReactNode;
} 

const str: string = 'string'

const func = (props: Props) => undefined
```

### JS Code Block

```js
// string
const str = 'string'

const pluckDeep = (key) => (obj) =>
  key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => (res) =>
  fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}
```

### Javascript Code Block

```javascript
// string
const str = 'string'

const pluckDeep = (key) => (obj) =>
  key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => (res) =>
  fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}
```

Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus laboriosam cum aspernatur ratione.

# Basics of Markdown
Markdown is the most popular markup language that can be used to format documents. It can be used to create *websites*,*ebooks*,*email*,*chats in discussions forums*.


## Topics
1. Paragraphs 

    MD expects a full line space to show texts in a different line else it joins text in the same line.
2.  Text decorations

    MD can write **bold** texts, ~~italiic~~ *italic*  texts
3. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.

    No of #'s represent the type of heading. Github will automatically add id's to headings, so the text will be automatically linked. 
   
    # This is h1
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    ## This is h2
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    ### This is h3
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    #### This is h4
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    ##### This is h5
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    ###### This is h6
    Lorem ipsum dolor sit amet consectetur adipisicing elit.

4. Links

    [My Github](https://github.com/bhupendra1011 "all repos") account. [Bhupendra]() github repo.

5. List Item 5

6. Ordered and Unordered Lists

    Coding Best Practices:

    * Keep code DRY
    * Writing Unit Test cases
    * Checking cross-browser support

    Steps to merge branch:

    1. Create a branch from feature
    1. commit your changes
    1. push your changes
    1. raise a pull request

7. Tables 

Tables can be generated with headings and text alignment option

|Stocks|Price|
|:-----:|:------:|
|TCS|230|
|YES Bank|500|

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

Cool Tips 

* [Grammarly](https://marketplace.visualstudio.com/items?itemName=znck.grammarly) extension can eliminate typo and grammar mistakes
* [ScreenTOGif](https://www.screentogif.com/) to record videos in GIF format
* Upload GIF's to [giphy](https://giphy.com/) to embed them into blog posts.
* [Stackedit](https://stackedit.io/) for Markdown Editing in Browser.
