# 500 - Query Groups with GraphQL in React App, Display Groups in UI

## 100 - Run Client Script with Server. Add Markup for Brands (here: Groups) Section

Before we execute our brands, query on the client first, let's start up our REACT app while we have

our server script running.

So let's open a new terminal window.

I can do that Invesco by clicking on the plus button.

And within this new window, we're going to see into the client and run the start script for React with

NPM Start.

So this will start up react.

And now within our code editor, we want to go within the client folder, go to source components,

and we're going to improve some of the styles within our app component, which is what we can see on

the home page of our REACT app.

And instead of returning just a basic div, we'll import a few components from Gestalt again or first

import the container component and the container product will be great.

It'll be one used in a number of components that we have in order to make sure that we have some padding

and margin on a large screen sizes.

But when we get down to a tablet or a mobile size, this padding will automatically go away.

And within this container, we're going to first have our brand section.

So this is where we'll list all of the brands, all the brand data in our app.

And we're going to use a box based component.

And this box component will just be used to center some text.

We'll do that along the x axis with display set to flex and just about content center will also give

it some margin.

Bottom of two.

But you can do just like that and then within this box, we'll have our header, our brands header.

So as we used within the number, we'll bring in the head and components for a slightly larger text.

So on the heading component will set the color to midnight, just the same as our now bar, and we'll

give it a medium sized with size head to M.D. and for the text, the text of this heading component

will set that to brew brands.

So that'll be the main title for our app.

Make sure that it compiled successfully.

We can head to localhost three thousand again.

We'll take a look at it and you can see up there at the top are brands heading.

## 200 - Connecting React with GraphQL using Strapi SDK. Fetch Data from Client.

Now, take a look at how we can make requests from our front end to our back end and in particular how

to execute craftwork queries from our REACT app.

So within our Dargis, we want to bring in all of our brands data.

So to make a request for that data, we're first going to bring in the strappy SDK from Satrapy SDK,

JavaScript Build Slash Made.

And this SDK is going to allow us to make a number of different requests.

Then underneath that will create a variable called API URL.

We're going to set this equal to the environment variable API underscore the URL which holds onto our

API endpoint, and if it can't directly reference this variable, we're going to set up this or conditional.

We're going to provide the support of our server, which is, as you can see, localhost 13 thirty seven.

And then we'll use the API URL variable with the strappy import to use the strappy constructor, say

new strappy pass in the API URL and we'll create this trappy variable that we'll use to make requests

within our components.

So above the render will create a new lifecycle method.

The component method will be executed when our component mounts.

And this is where we want to add the logic to make a request to fire off our actual query for our brands

will be using the async await syntax for writing our asynchronous actions.

So prefix component in Mount with async and this async await syntax will allow us to write much shorter,

much more concise promises.

As you'll see, we'll create a variable called response instead of equal to await satrapy request.

We're going to await resolution of this promise, said its return value equal to response.

And then we're going to provide some arguments to our request method or first specify that this will

be a post method that we're executing.

We're going to then say that our request should be made to the SIGGRAPH graphical and point.

And then the last argument will be an object which will contain our query.

So within this object, we're going to have a data property, which itself will be an object, and within

this object will have a query property and to this query property, we'll add our query, just like

we wrote within our graphical playground, so we can go back to our playground and copy our query,

our brands query.

And you can see here in the euro that it's going to be referenced correctly at SIGGRAPH Whewell or making

the request.

And all we need to do to reference our query within our configuration object, just add a set of tactics

or template literals and paste in the query, just like we wrote in our playground.

And that's it.

The response from the request will be stored in our response variable and all we want to do for now

is just log it.

So log that response and it'll await resolution of it.

And so it will be logged only when the response actually comes back.

So we'll go back to our app and we'll open the console.

We can see here within our console an object, so this looks promising if we open this up.

We can see a data property which contains a Brandes object, and this looks exactly like the brand query

that we fired off in our grad school playground, this brand's property has the exact same name as the

query that we fired off.

So within this Brandes array, we have our two entries.

You have our two objects.

So this is a very simple approach to firing off queries and we can add a additional property to our

you are all subfield.

We can see when this request is made and it's on as a result, we can see for each of our objects,

for each of our entries that New York URL subfield added.

## 300 - Catch async / await Errors with try / catch. Put Brand (here: Group) Data in Local State.

Now we're able to successfully make a request to our back and from our REACT reactor to get all of our

brands data using graphical but in component amount, we're not catching any potential errors that might

result from making this request.

It's possible this request could fail.

So since we're using the async await syntax, we're going to set up a try catch block where in the tri

part we're going to try to execute this promise.

And if there are any problems with it, if there are any errors within cache, we're going to pass through

the air and log it using console error.

We'll also change our query a bit to only get the information that we need to remove the created out

field and the name subfield from our image object.

And instead of logging the response, we're going to want to put it within our component and we'll do

that by setting up some local state.

So create a state object within our app class and we'll give it a property of brands which will initialized

to an empty array.

So we're going to update this property and state whenever we get our response from our back end.

So we're going to now, said states, we're going to set the brand's property to the response that we're

getting back.

But instead of just setting response, we need to specify the exact path where we have our brands are,

we can see it's within response that data brands.

So in order just to pass the array of the data set response that ended up around set that equal to the

brands array within our state, we could also structure the data that we're getting back.

And instead of saying in response to data that brands, we could just say data brands if we want to

make that shorter.

But we'll go with response.

We'll stick with response when we make requests.

So we should see when we save our app component.

And our.

Request is made again, we can go to the afterwards and we can drill down to our app component.

And once we're there, we should be able to see our local state with our brands, right.

And you can see we have a couple of elements within it.

And if we open each of these entries up, they contain an object and they have all of the data that

we requested from our back end.

## 400 - Display Brands (here: Groups) on Home Page. Create Brand (here: Group) Card Component.

When our app component loads were firing our brands query to get our brands data, and when that results

were putting the array within our local state, but we're not showing the brands within our UI, so

let's create an area at the bottom of our container element.

I still have a box component as its parent element, and this will be where we'll iterate over all of

our brands within the render function.

We can just pluck off the brands property from our state object by using object restructuring so we

can now reference the brands are just as brands.

And we'll iterate over it with the map method, we'll call each of the elements within the array brand

and they'll have some associated mark-up.

We'll give each brand a parent element of box.

And since we're iterating over this Fox component, we need to give it a Kiprop with a unique identifier,

which will do with the given brands ID.

So brands underscore ID and within this box will have a card component which will get from Gestalt.

So grab that up at the top.

And within cards were first able to add an image so we can add an image up at the very top of this card

by setting the image and we can include some components within it.

We can include some other Gestalt components within it.

And in particular, we're going to need the image prop in order to render our image or image component,

I should say.

So we'll have a box of parent box and then an image within it.

And we're going to need to set the source of the image.

If we take a look at our reactive tools and look at our state, we can see that the euro for a given

brand has this relative path.

We just have to upload slash some string, but we don't have the beginning of the URL.

So to get the beginning of it, we will interpolate api url within template literals and then Brandon

image that you were able to get the rest of the path.

Was that an old property of brand?

And will set the natural height and width to want to set the proportions of this image as one, but

to actually determine the height and pixels of the image will set height equal to two hundred on the

parent box and with equal to 200 as well.

So each of our cards should have now just an image with the proportions of 200 by 200.

Looks like they're stacked on top of each other.

So we can reorder this a bit, put them on the same row by making the parent component, the most parent

box component that we created this display set to flex and justify content to around.

So put it on the same row and give it some space around.

Then within the card tags, so we put all of those props just on the opening tag of our card component

within the card.

We're going to provide some text components, which we'll get again from Gestalt.

So have three card components or have one that will have a size of extra large, the largest size for

text, or will interpolate the name of the brand with brand name, we can just copy this and paste it

again or remove the size for the next one.

And we just want this to be the description which will reference with brand description.

And then finally, we'll keep the size of Excel when we paste the text component one more time and within

it there will be a link and this will be a link to another part of our app.

So import the link component from reactor out or dumb.

So this is going to reference our Bruce Page, it'll show all the related Bruce for a given brand eventually.

So we'll give it the text of Bruce and we'll set the two prop to the path.

Then template literals again, forward slash and then the value brand dot underscore ID.

So we'll create a unique link according to the idea of the brand and save all that.

If we take a look at the text, none of it's centered.

So in order to center all of these components, we'll add a wrapping box.

So wrap these three BTEX components in a box and we want to center the text along both the Y axis and

the X axis in both directions.

So we're going to set display to flex the line items, the center, justify content, the center, and

we're going to set direction to column.

And this will perfectly center all of the text, both vertically and horizontally.

And then we'll add the bold keyword on the brand name and the zebra's link.

So it'll make our top and bottom text bold.

We can see now our images out of place, though our text is now lined up as we want.

So in order to make our cards smaller, in order to put our image in the correct spot, we're just going

to set the most parent box, set its width to 200 pixels and give it a margin of two.

So now I can see of a much more narrow card and we have all of our related data for a given brand.
