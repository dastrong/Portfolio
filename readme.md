# [Daniel Strong's Portfolio Site](https://danielstrong.tech)

### About

I wanted a unique portfolio site to show off my work and write blog posts. The design, icons and images used are completely custom made by me.

### Tech Used

The site is build with `Next.js`, `Styled Components`, `ForestryCMS` and is hosted on `Vercel`.

### Environment Variables

```
NEXT_PUBLIC_CLOUD_URL=https://res.cloudinary.com/dastrong/image/upload
```

### Creating Work Mockup

You can read about this [here](https://danielstrong.tech/blog/website-mockups)

### Lighthouse Results

We have excellent lighthouse results across the whole site and part of the reason is because it's so easy to test pages. 

There are two commands to view results.

```bash
# yarn check-lighthouse-mobile 
# yarn check-lighthouse-desktop
```

You need to pass in an additional flag to notify the script which pages to check. The results will automatically open for each tested page. 

```bash
# -s, --sites [sites]  // a comma delimited list of site urls to analyze with Lighthouse
# -f, --file [path]    // an input file with a site url per-line to analyze with Lighthouse

# // example of each in actions

# yarn check-lighthouse-desktop -s https://danielstrong.com
# yarn check-lighthouse-desktop -s https://danielstrong.com,https://danielstrong.com/contact
# yarn check-lighthouse-mobile -f urls.txt
```

<details>
<summary>urls.txt</summary>

```
https://danielstrong.tech
https://danielstrong.tech/about
https://danielstrong.tech/contact
https://danielstrong.tech/tags
```

</details>
<br />

