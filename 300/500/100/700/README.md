# 700 - Create Items Data / Items Component

## 100 - Add Brew (here: Item) Content Type.

Now we want to create our Brous data so that for a given brand, we can click on Sciberras and see all

of the Brous that a given brand has.

So back in our admin panel, we're going to go to our content type builder and click on add content

type to add a new piece of data which will call Brew.

And they'll start adding Fields'.

Once again, we'll have a name filled with a type of string.

So add that.

We'll have a TextField, the name of description, and once again in advanced settings, will choose

the Weinswig option so that we have some editing features in our panel.

Choose a media field, the name of image, just like our brand.

Click on Add Field, but there'll be a couple of differences here.

First of all, we'll have a number.

Field for our brew, and this will be the price of the brew.

The amount that it'll cost and we have a choice of no format, we can choose integer float or decimal.

We want to choose the decimal option.

And so be a couple of decimal places for every price that will have to look just like that.

You can add that as a field and finally we'll have a relation, so this relation field describes the

relationship that our previous type of data our brand has with our new type of data, our brew can see

a number of different relations.

We can choose can see that we can specify the brand as having many brews.

A brew is having many brands or.

Where a brew has and belongs to many brands, but we want to choose the option that a brand has many

related brews.

And finally, we can close that close out or add new field modal.

It's a.

And then our content type has been created, so we've got our Broo content type now.

And we just need to refresh the page after our service starts.

And now we're ready to add some related brew data for each of our brands.

## 200 - Seed Brew (here: Item) Data.

We've created our brucke content type.

Now let's see some data, let's add some brew's.

So begin by.

Going to the brands area and I want to add one more brand.

So back in, Branzburg, Jason.

I want to grab this Solara brand, click on Add a new brand, so add the name and the description.

They said in here.

And select its.

Related image in our brands images.

Area, so select that.

You can see here we now have this bruise tab, so we can when we have some bruise data and we're creating

a brand data piece of brand data, we can select a related brew.

I brew that we want to be related to our brand.

So that's a neat option that we have available to us based on the relation that we define within our

group content type and now that we've created our brand, our last brand.

Let's move on to Brous.

So then Brusstar, Jason, I'll paste in the first name and it's description.

We need to include a price for it, you can see we have some related price data on top of the name and

description you need to click, browse and go to our Brous images folder.

And select the corresponding image and here will set up the relation with our brand will choose which

brand we want our brand to belong to.

So that when we click on C, Bruce will be able to see a given brew related to the brand that we choose.

So we have the option for each of the brands.

Well, choose the first one, bear, poor river.

So now we have our first brou.

And we'll move on down the list will grab Christmas ale.

Grab its description.

It's price.

Its image once again and set up a relation with the second brand, Goose Island, to distribute these

kind of evenly will give each of the brands a couple of brews.

So go on down the list and.

Feel free to add.

And whatever or do you, like, add them to whatever brand you choose?

I just want to make things kind of even.

And just check to make sure we have the right image.

And make sure to select a brand relation every time, if you forget to do it, if you make a mistake,

remember that you have the added option available to you by clicking on the pencil icon.

You can also set up some validation to make sure that you can't add a brew unless you provide all of

the specified pieces of data.

So once again, you can do that within your content type builder.

Can modify any content type that we've created previously.

So at my last brew.

At its a subscription price.

And its image make sure I'm getting the right image.

And then select the last round and hit save.

And so now we've ceded some of our brews, we've got some brew data now related to our brands.

So we'll work out in the next sections how to display the brews for a given brand when we click on brews.

## 300 - Query Brew / Brews (here: Group / Groups). Change Permission for Public/Auth Users.

Transcript
In the past, we've taken a look at how to get all of the brands within our app using grap cool, but

how do we query for all of the brews for a given brand?

So back in our graphical playground, we're going to write another query and figure out which query

to execute in order to get all of the brews.

We can take a look at our schema tab.

You can see since we've created our brew content type, we have a couple of automatically generated

queries as brew and brews queries.

So let's use the Brous query.

If we click on that to take a look at its type definition, we see that we have a number of arguments

here, the sort limit start and where arguments, but we don't need to include any of these.

All we need to do is include a selection of subfields for each of the Brous that will get back as an

array so we can grab the idea created at.

Updated at.

You get the name all according to this Broo type.

We'll get the URL of the image and you can see at the very bottom, on top of the price, we can get

the brand itself.

You can get the related brand for a given brew.

So it has a collection of subfields, it's related to the brand type so we can get the ID and the name

of the given brand that Ibru is related to.

And once again, if we try to run that, we get the forbidden air.

So we need to go to our roles and permissions.

We want everybody to be able to query for.

Given Bruce, so since we're getting multiple brews, we also select the find and find one options,

we'll make them right limited.

And then we can hit save, so we are changing the public permissions and we also want to change the

authenticated permission so that even when someone signed in, they can get.

An array of Brous or an individual broom?

Now, we've changed public and authenticated permissions, we should be able to execute this query and

not get a forbidden air anymore, and it looks like we can we get all of the data that we requested

from each of the Bruce.

So we get a full list of all of the brews, not according to any particular brand, and we also get

within the brand subfield the ID and the name of.

The given brand that Ibru was is related to that we set up a relation with.

And now if we want to query a given brew by ID, we can do that as well using the brew query.

Once again, it has just an ID argument that we need to supply.

So from any one of our brews are returned to us, we can grab the ID value that we see here.

And we can choose a number of fields for the given route, just like we did with the previous query.

Then we can hit the play button and we get all the related data to query for an individual brew by its

ID value.

## 400 - Query Brand (here: Group) by Id to Get Associated Brews (here: Items).

We took a look at how to query for individual brew data or to get all of the brews.

But if we go back to our brand query, we'll see that we have this new Bruce subfield, so this is what

will allow us to get for a given brand.

When we queried by ID and we'll grab an ID.

By grabbing the end of the path, when we click on C Bruce, we'll grab an idea for a given brand,

we'll go back to our playground and we want to rerun this brand query.

So now we can get all of the Brous.

All the brews that we set up a relation with for a given brand when we created them in our admin panel.

All right, the name of the query brand will pass in an I.D. to the ID argument, and then we'll specify

the subfields that we want for a given brand, get the ID name description.

Of course, most importantly, we want to get all the related brews according to that ID.

And to see what values we can get back, we'll take a look at this return field and see that getting

back an array of Bruce.

If we look at the brew type, we can choose all of those properties, so we get back for each brew object

within the brews array that's being returned to us.

You can get the ID, the name, the image of the Brout.

You can get the price.

And it looks like we can even get information like the brand, the brand.

That we set up a relationship when we created a given brew.

We can close our schema.

We can test this out.

Well, hit the play button.

It looks like within the brand object we're getting back get all of the.

Brand data requested, but most importantly, we're getting all the related brews as an array.

It looks like that brand field wasn't resolved correctly, that might be a bug.

But we're getting back all of the most important information, all of the related, Bruce, for a given

brand, and this is what we'll use to populate for our Seabrook's page all of the groups that we link

to a given brand.

## 500 - Request Brews (here: Items) by Brand (here: group) Id in Brews (here: Items) Component.

Now, let's execute this brand query.

That we made in our crack you up playground on the client.

So when we click on Seabreeze for a given brand, we'll be able to show all of the Brous related to

that brand.

Let's first create a component for this in our components folder will call this Brew's.

So we'll display all of our brews then this component.

Of course, at the top will import react.

This will be a class based component, so class brews will extend ragtop component.

We'll have our render and return then the return.

For now, we'll just have the text.

Rues the native.

And we'll export the class brews at the very end.

Then within our index, JS file will add a new route within our switch component, the very bottom.

We're going to link it to the Brous component and we're going to make sure that we import it with an

index so it will go to such component size brews or import brews.

And this route will be a bit different than the other routes that we've set up is going to be a dynamic

route.

So for our path, we're going to.

Say forward slash and then use a colon.

This will allow us to use what's called route prams in order to reference a value that will be able

to make use of within our borders components.

So, for example, at this idea, the end of the path will be able to reference this ID as ID or maybe

brand ID, kind of like a variable, so.

That's what these root plans will allow us to do, will allow us to grab the end of the path.

And if we save both of those files when we go to anything forward, slash some string will always have

rendered to us our Brous route.

But as we mentioned, we want to get this path within our rules component so that we can make our query

for a given set of Bruce.

So if we go within our dev tools to the roots component we see within Prass, we have this match object.

Where we have this pro-ams object, which contains our brand ID, the root prem's that we set up with

which we gave a name of brand ID, so we'll use brand ID in order to grab the end of the path here within

our Brous components.

So within component amount we're going to reference.

Grandaddy on the match object by saying this stuff, props that matched up Ram Scott Brand ID.

And if we take a look at our consulate, we can see the end of the path here logged when our component

mounts and if we change it to some other strain, we'll have it there as well.

And now, instead of just logging this value within our component method, we're going to grab the strappy

SDK from APGAR'S and use it to make a request to our back end to execute our.

Query that we wrote in our playground, so we'll make components and mountain async function.

And we'll have a response variable that will set the return value of Shappi, that request to and make

sure we use the key word for it.

This will be a post request to you earlier, SIGGRAPH.

You'll, like all graphical queries, will execute will have our configuration object, which will include

a data property.

Then that will be an object has our query.

Once again, our query, which will grab from our playground, will just.

Modify this a bit or remove the brands, subfield on it, we can remove the description field.

If we take a look at our schema and look at our brew, our type brew, we'll make sure that we're getting

all of the fields that we need.

Can close that can execute our query again to make sure it works, we get all of the things needed,

all of the fields that we want for our Brous.

So we're finding a brand voted in in order to dynamically put in the brand ID, we can remove the idea

that we had and just insert within.

Dollar sign and curly braces that value this type of that matched up Ramsgate branded according to the

route in order to insert the ID for a given brand.

And for now, let's just consider log the response that's stored in the response variable.

And we'll set up try catch in order to catch any errors.

Well, past the air to console air if we have any.

So save our Brous component.

So now when our component mounts, if we correctly go to a branded.

Will refresh, go back to the home page and click on Seabrook's for a given brand, you can see within

the console.

We get a data object.

Which contains a brand object.

Contains all the brand related data and our array of Bruce.

That are related to a given brand.

## 600 - Add Markup to Display Brews (here: Items).

When our Bruce component mounts or successfully making a request for a given brand by ID and getting

its related brews, we want to show this data within the UI.

Once again, the tri part of our component amount, we're going to set the state.

So to do that, we need to first create a state object.

We'll have two properties on our state, will have a bruised property set to it, an empty array initially

and brand set to an empty string.

So first, we want to set Bruce to respond to that data dot brand, the name of the query and Bruce

the array.

And we just have to change this slightly in order to get the brand name so the brand property will hold

the brand name, which will get a response that data.

That brand name.

And now we can start importing some start components to create some markup to display these brews.

Well, grab a box heading text, image card and button.

So instead of returning our d'Hiv, the text of Bruce, we're going to begin by creating a parent box,

a parent element that'll be a box.

We'll give it some margin top to separate it from the now bar of four.

We'll give it a display of flex.

So that justify content to senator.

And we'll set a line items to start.

So we'll have a couple of sections within this box, we'll have a Bruce S..

And the first thing that will include.

There's a box with the display of flags and directions, had to call them.

And the line items set to center.

And then within that, we'll have our heading, which will include the name of the brand that we're

looking at.

So this will have a box at the margin of two, our heading component, the color set to the preset Orckit

and we'll interpolate our brand.

And once again, we can use object destruction to pluck off the brand property from our state objects

within our render.

So we have our heading now.

And underneath that will have all of the brews within our brews or a.

We're going to create a box, we'll have a dangerously set in line style where we can set the background

color to a custom value, so be the next code CD nine.

This will be a light blue color.

We're going to round the corners of the box with sharp rounded.

We use display flex, justify content said to center.

And we'll give it some padding or set padding to for.

And then within.

The box we're going to iterate over the Ruža, we can restructure that as well from state, we'll say

bruised up map.

And for each brew you can go back to our app component and describe all of the markup that we used for

our brands when we iterated over the brand zarei.

So we can just paste that in and modify the markup as necessary and change the key to BRUDDAH.

Underscore undescribed.

Will change the width of that parent box to 210, the box within the image to 200 will change the image

path to broodmare image that will change the Bru name to rudong name.

Ruwart description and broodmare underscore ID.

And we'll wrap.

All of this.

I should say the run came with a box.

We'll give it some margin, in particular, some margin bottom.

We're going to separate the Branom name a bit from the rest of the text and we'll do the same.

With.

The bottom text component.

Give it some margined top.

And we'll also include.

Underneath our description, bruddah.

Price went to show the price of each brew well prepared a dollar sign in front of it.

Listen, it's in dollars, and I'll give it a color orchid.

Now, we can save all that, but we need to change this.

Last text component from a link to a button, we want to have a button here, we'll give it the color

of blue.

The text for it will be add to cart, be able to click on this button to add it to our shopping cart,

if we take a look at our Brous component now, we can see we have a couple of cards here lined up in

our blue box.

But we're not getting our description like we requested.

We're actually not making a request for that subfield within our query.

So let's add that to our graph.

You'll query.

Can save that.

Now we have our description right underneath our name.

And if we make our screen smaller again, we can see that the cards aren't responsive and to make them

overlap one another, you can just add rap to the parent element.

And since each of the cards have it has a defined with the rap one on top of the other when the screen

gets to a mobile size.
