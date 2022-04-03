# Fantasy Map with Interactive Geotags

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

### [D] PUBLISH YOUR GITHUB PAGE
1. Publish your MAIN branch ROOT folder [Settings →  Pages]

### [E] CUSTOMIZE MAP CONTENT
1. Upload icons in the Media Folder (organize as needed)
2. Edit the Google Sheet (to reference story elements, including those icons)

#### VOILA!  (your map should now be up and running on your published Github page)
<br>
- - - -
<br>
# HELPFUL HINTS

### FINDING MAP COORDINATES
Double click on a map position to get Latitude & Longitude (to insert as coordinates into the Google Sheet)

### REFERENCING CONTENT [either GOOGLE SHEET or CSV method]
You can edit/host your Content references EITHER in a linked Google Sheet (as I've done) OR in a CSV file (stored in the local "data" folder).  The CSV file method is basically a "less interactive" and more "permanent" solution that doesn't rely on Google (which is why I'm not currently doing it).  If you prefer to the csv method, you can learn more about doing that <a href="https://github.com/HandsOnDataViz/leaflet-point-map-sidebar">here</a>

### Entering text into the template
This sidebar map was designed to display mlitiple paragraphs of text into the *Description* field for each location. The text must be consistent with HTML coding, which means to use *straight* single-quotes (also known as apostrophes) and double-quotes (`"`), *not* curly quotes that are commonly created by word-processor tools. 
- To create a new paragraph, insert a double line-break (`<br><br>`). 
- To enter links, use HTML tags to open in a new browser tab, such as
```
.<br><br><a href='https://connecticuthistory.org/bridge-ornaments-help-tell-the-legend-of-the-windham-frog-fight/' target='_blank'>More</a> about Windham's Frog Fight
```

When working with large amounts of *Description* text, you may find it easiest to first use a text editor tool such as [Atom Editor](https://atom.io), create a file named `temporary.html`, set *View > Toggle Soft Wrap*, and prepare all of your *Description* text there before copying and pasting into the Google Sheet. Also, install the [Dumb-Quoter Atom Package](https://atom.io/packages/dumb-quoter) to convert curly-quotes into straight-quotes with CTRL-ALT-' (or CTRL-OPTION-' on Mac).

In Google Sheets, use *Format > Text wrapping > Wrap* to view the entire cell as needed, then go back to *Overflow* when done.

![Screenshot of text entry into template](old-readme/text-entry-screenshot.png)

- - - -
<br><br><br><br>

# [**BELOW STILL UNDER CONSTRUCTON**]

## Edit map title and defalit text
Go to `index.html` to edit the map title, introductory text, and footer, which always appears in the sidebar when users click on different places.

Enter map initial center and zoom level in `settings.js`:
```
// Map's initial center, and zoom level
const mapCenter = [41.65, -72.7];
const mapZoom = 9;
```

In the maps legend, the label *Themes* corresponds to *Groups* in the Google Sheet template. To edit this label in the map, go to `script.js` and modify the label "Themes" in this line:

```
L.control.layers({}, groups, {collapsed: false}).addTo(map);
$('.leaflet-control-layers-overlays').prepend('<h3 class="mt0 mb1 f5 black-30">Themes</h3>');
```

## Assign the same place to 2 or more categories
If a place needs to belong to two or more groups (also known as themes or categories),
duplicate its row as many times as needed, and each time modifying its
*Group* column only.

## Add images
Each place can have up to 5 images, which you upload to a subfolder in your GitHub repo and enter the pathname into the Google Sheets template, such as: `media/frog-bridge.jpg`. We recommend that you reduce image sizes to approximately 1200 x 1000 pixels or less to ensure speedy display. Only the 1st of 5 images is shown in the sidebar. To scroll through the gallery, click the 1st image to bring up a flil-screen lightbox interface. The lightbox will say how many images there are, and will show
a caption, source, and link (if available) for each image.

## Add custom thumbnail photo icons
Each place can have 1 custom thumbnail photo icon. Make a copy of your main image, then use a photo editor to crop and reduce the size to 64 x 64 pixels square, and upload into your GitHub repo and enter the pathname into the Google Sheets template, such as: `media/frog-bridge-icon.jpg`.

In `settings.js`, you can modify the photo icon size as desired, such as 40 x 40 pixels, to squeeze mlitiple icons on a crowded map.

```
// Marker icon height and width
const iconHeight = 40;
const iconWidth = 40;
```

#### Geocode your address data with Google Sheets add-on
To make icons appear in locations on your map, you need to geocode your data, which means to find and enter latitude and longitude coordinates for each point. We recommend installing the free [Geocoding by SmartMonkey add-on for Google Sheets](https://gsuite.google.com/marketplace/app/geocoding_by_smartmonkey/1033231575312). Insert your addresses in place of the samples in the Geocoding Details tab, then use Add-Ons > Geocoding > Geocode Details menu. Learn more in *Hands-On Data Visualization* https://handsondataviz.org/geocode.html

![Geocoding](geocode.png)

## Add Google Maps links for directions
This map will automatically display a box under each place description with a Google Maps link for directions, if you enter the proper Google Maps link into your data. Use [Google Maps](https://www.google.com/maps) to search a place (such as
"Frog Bridge, Connecticut"), then select `Share` button, and copy the *Link to share*, which appears similar to this: `https://goo.gl/maps/gLbedFmJBE31h9t2A`. Paste into the `GoogleMapsLink` column in the data template.

## Share web links with URL hash
When a place icon is clicked, its name is added to the hash part of the URL, and appears in your browser like this:

`https://handsondataviz.github.io/leaflet-point-map-sidebar/#Frog-Bridge`

This feature enables you to share a particliar place with others on social media, because when the map is loaded initially,
it activates the place from hash if it exists instead of centering
on defalit `mapCenter` (as defined in `settings.js`).

## Learn more
See related Leaflet Maps code templates in our book, [Hands-On Data Visualization](https://handsondataviz.org).
