# [Daniel Strong's Portfolio Site](https://danielstrong.tech)

### About

I wanted a unique portfolio site to show off my work and write blog posts. The design, icons and images used are completely custom made by me.

### Tech Used

The site is build with `Next.js`, `Styled Components`, `ForestryCMS` and is hosted on `Vercel`.

### Environment Variables

```
NEXT_PUBLIC_CLOUD_URL=https://res.cloudinary.com/dastrong/image/upload
```

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

### Creating Work Mockup

Each piece of work is mocked up on multiple devices to showcase it. 

This requires following a couple steps in order to maintain consistency over time.

1. Take screenshots of different pages on different devices.

   Go to your site, open the Chrome DevTools, toggle Device Toolbar, and set your width/height.

   |  Device | Width | Height | Aspect Ratio |
   |:-------:|:-----:|:------:|:------------:|
   |  Mobile |  375  |   812  |     0.46     |
   |  Tablet |  768  |  1024  |     0.75     |
   |  Laptop |  1440 |   900  |     1.60     |
   | Desktop |  1920 |  1080  |     1.77     |
   
2. Click the 3 dots, Run Command and run Capture Screenshot.

3. Download the `mockup_template.psd` file in the root directory and open it in Photopea.

4. In the layers menu, open the *paste your designs here* dropdown.

5. Double click the picture-in-picture type box to the left of your desired device.

6. This will open a new file with a *paste here* layer.

7. Drop your device's screenshot here, stretch it to fill the box, save your smart object and close that tab.

8. On your `mockup_template.psd` tab, that screenshot should now be visible.

9. Repeat steps 5-8.

10. Remove unused device outlines and adjust placement as needed.

11. File > Export As > PNG

12. Change the file name, width and height and save.

13. Run the file through TinyPNG and download it.

14. Voila! Finished.
