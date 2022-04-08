# Fantasy Map with Interactive Story Placeholder 'Geotags'

## Description
This is a <em>Leaflet</em> powered "fantasy map" with geotagged "story data" drawn from a Google Sheet
Live Link: https://pedeli123.github.io/greyhawk

## Purpose
I'm a GameMaster running a Mythras campaign in the world of Greyhawk.  We enjoy immersive storytelling so I wanted to create an interactive "story map" to geotag key encounters "where" they occur on the Flanaess map.  
<br>
This software will catalogue/place/reference/showcase story elements on a fantasy campaign map (in our case, the Flanaess).  You can place "icons" at map coordinates which have corresponding story elements that "display" when the icons are "selected".  All elements are catalogued in a google sheet.  

## Attribution
This silly little project (that I spend way too much time on according to my wife) results from the absolutely amazing work already done by:
- <a href="https://agafonkin.com/">Vladimir Agafonkin</a> [<a href="https://leafletjs.com/">leaflet</a>]
- <a href="http://www.zoomify.com/">Zoomify</a>
- <a href="https://github.com/turban/Leaflet.Zoomify">turban</a> and <a href="https://github.com/cmliders/Leaflet.Zoomify">cmliders</a> [Leaflet.Zoomify]
- <a href="https://handsondataviz.org/">Hands-On Data Visualization</a> (Jack Dougherty & Ilya Ilyankou [<a href="https://github.com/HandsOnDataViz/leaflet-point-map-sidebar">leaflet-point-map-sidebar</a>]
- <a href="https://www.annabmeyer.com/">Anna B Meyer</a> [Greyhawk map]

- - - -

# Steps to re-Create (using your own IMAGE MAP)

### [A] BASE MAP SETUP
1. Select a high density image to use as your BASE MAP
2. Transform your Map (1) into "image tiles" CONTENT using <a href="http://www.zoomify.com/free.htm">Zoomify</a>.  This will output a folder that includes: 
    - several folders of image tiles [Tilegroup(1), Tilegroup(2), etc], and
    - a master file reference [Imageproperties.xml]
3. Upload your Content (2) to a PUBLIC FOLDER on your private Server [public_html →  Folder]
    - Grant READ PERMISSIONS on that Folder [recommend "0755" (=rwxr-xr-x)]
    - Grant FILENAME & DESCRIPTION INDEXING on that Folder [see Cpanel → Advanced → Indexes]
4. Ensure direct access to that Folder is not blocked by .htaccess rlies (or similar)
5. Verify your Folder (3)and its Contents (2) are <em>publicly viewable</em> and <em>indexed</em> at <em>https://url/folder</em>

### [B] GOOGLE SHEET SETUP
1. Make a copy of this <a href="https://docs.google.com/spreadsheets/d/1WFsDxLIlB2HZSsSqijgguo0nEwRFD_7ayn6Ha_THn6w/edit?usp=sharing">Google Sheet</a> to your Google Drive 
2. SHARE the Sheet publicly so that "Anyone on the internet with this link can view" [File  →  Share  →  Share with Others]
3. PUBLISH that Sheet as "Places" in "csv" format [File  →  Share  →  Publish to Web]

### [C] GIT REPOSITORY SETUP
1. Fork this project (to create your MAIN repo)
2. Edit/Customize code elements within the following files:<br><em>[look for <b>"-----**CHANGE**: ..."</b> notes within each file for specific instructions]</em>
    - index.html
    - scripts → script.js
    - scripts → settings.js

### [D] PUBLISH GITHUB PAGE
1. Publish your MAIN branch ROOT folder [Settings →  Pages]

### [E] CUSTOMIZE MAP CONTENT
1. Upload icons in the Media Folder (organize as needed)
2. Edit the Google Sheet (to reference story elements, including those icons)

#### VOILA!  (your map should now be up and running on your published Github page)
<br>

- - - -

# HELPFUL HINTS

### Story Content PLACEHOLDER REFERENCES [either via GOOGLE SHEET or CSV FILE]
- "story placeholder" geotag elements are referenced EITHER in a linked Google Sheet (as I've done) OR in a CSV file (stored in the local "data" folder). 
    - <em>the CSV file method is basically a "less interactive" and more "permanent" solution that doesn't rely on Google (which is why I'm not currently doing it). <br>If you prefer to the csv method, you can learn more about doing that <a href="https://github.com/HandsOnDataViz/leaflet-point-map-sidebar">here</a></em>

### Placeholder ICON (1)
Each "place" can have 1 custom thumbnail photo icon. Upload the icon into your GitHub repo and enter the pathname into the Google Sheets template, such as: `media/icon/castle.png`.

### Placeholder IMAGES (<=5)
Each "place" can have up to 5 images, each referenced by a "path" in the template (Google Sheet or CSV file).  Paths can be a url path (online, like I'm doing) or a Github subfolder path (to your GitHub repo where you uploaded the image).  Each image can have a caption, source, and link (if available).
    - <em>If you are uploading images it is recommended to reduce image sizes to approximately 1200 x 1000 pixels or less to ensure speedy display.</em>

### Placeholder MAP COORDINATES  [Latitude, Longitude]
- Double click on a map position to get Latitude & Longitude (to insert as coordinates into the template)

### Placeholder DESCRIPTIVE FIELDS
- Descriptive fields `(Name, Subtitle, Caption, Description)` can display multiple paragraphs of text for each story location. The text must be consistent with HTML coding. 
    - To create a new paragraph, insert a double line-break (`<br><br>`). 
    - To enter links, use HTML tags to open in a new browser tab, such as `<a href='https://greyhawkonline.com/greyhawkwiki/Main_Page' target='_blank'>Learn</a> about the World of Greyhawk`
    - When working with large amounts of *Description*, you may find it easiest to first use a text editor tool such as [Notepad++](https://notepad-plus-plus.org).  Just create a file named `temporary.html`, and prepare all of your *Description* text there before copying and pasting into the Google Sheet.  (in Google Sheets, use *Format > Text wrapping > Wrap* to view the entire cell as needed, then go back to *Overflow* when done.

### Placeholders having 2 or more THEMES
- If a place needs to belong to two or more Groups (aka Themes), duplicate its row as many times as needed, and each time modifying its *Group* column only.

- - - -
