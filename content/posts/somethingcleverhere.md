---
date_publish: 08/23/2020
description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt sit temporibus nisi distinctio.
tags:
  - React
  - Express
  - MongoDB
title: Something clever here
show_post: true
code_snippets:
  - "blog_samplesnippet.png"
  - "blog_samplesnippet2.png"
---

Lorem ipsum dolor sit amet.

> _This is a_ blockquote. View all posts [here](/blog)

<figure>
    <div>
        <img src='https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='alt here' title='title here' height="4480" width="6720" loading="lazy"  />
    </div>
    <figcaption>
        <a href='https://unsplash.com/photos/wQLAGv4_OYs' target='_blank' rel='noopener'>Photo</a> by Lucas Benjamin
    </figcaption>
</figure>

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti adipisci quia beatae architecto, unde doloremque at nisi pariatur eos eum.

<div>

![brackets here](blog_samplesnippet.png "full 767px width example")

```
code example here
next line
    spaced next line
```


</div>

Inline code example: `() => console.log(true)` Fancy.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, placeat. Nulla ratione in enim voluptas voluptatem. Cumque, nobis doloribus molestiae aut at tenetur autem sint iusto quam, consequuntur, quo tempora. 

<div>

![brackets here](blog_samplesnippet2.png "shorter width example")

```
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

</div>

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

Cool Tips 

* [Grammarly](https://marketplace.visualstudio.com/items?itemName=znck.grammarly) extension can eliminate typo and grammar mistakes
* [ScreenTOGif](https://www.screentogif.com/) to record videos in GIF format
* Upload GIF's to [giphy](https://giphy.com/) to embed them into blog posts.
* [Stackedit](https://stackedit.io/) for Markdown Editing in Browser.
