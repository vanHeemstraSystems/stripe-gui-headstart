# 600 - Additional Features - Responsive Design, Searching, Loading Spinners

## 100 - Add Flex Wrap to Brand (here: Group) Cards for Responsive Design. More Styles (Optional).

Now we've got our cards to represent our brand data, but once we go down to a mobile level by making

the windows small, we can see that the cards aren't responsive.

Ideally, we'd like them to.

Wrap one on top of the other when we get down to this mobile size, and we can do that by setting the

Rapke word to our parent box and our brand S..

So this is setting Fleck's wrap to wrap.

And now you can see that once we get to a mobile level, our cards wrap one on top of the other or a

better, more responsive design.

We're going to set this property on the box as well, called dangerously set in blind style.

We're going to set the background color to a custom hex code to give it a value different than the color

press that's available to us.

So we'll give it this light purple color and we'll make the shape rounded.

We'll make our box component rounded on the edges.

And now you can see we need a bit of padding to our.

Individual brands to our cards, so on the box, we can set padding why to four to give it some space

in the wider actions on the top and bottom of the card just to space things out a bit.

But now you can see our images are out of place a bit.

There's an additional property that we can add to the image component to make it cover all of the available

space evenly, and that's the fit to cover property.

And we'll add that on the image.

And you can see our spaces distributed much more evenly now.

## 200 - Add SearchField Component to Search Brands (here: groups) (Optional).

As an additional feature on our homepage would be nice to have a search field up at the top that will

allow us to search through our individual brand cards.

So at the top of our container, we're going to have this brand search field component.

And using Gestalt, you can grab the search field component, so we'll import that from the start.

I'm just going to add this line above it to.

Tell my editor not to format this line.

And so now you can see we save our file, this search field that takes up the entire width of the container,

if we look in our control, we can see that we need to add a few props.

This accessibility label prop, which is required an I.D. which is required as well as an on change.

So we need to add all of those to the search field.

But first, what we'll do is we'll give it a wrapping box component so we can format.

The search field.

And we'll give it a display of flex.

We'll give justified content, Senator.

Margin top of for.

So we don't want it to take up the entire with we just want it to be centered within the container.

Then on the search field will provide the necessary props.

We'll give you an idea that they're equal to the search field.

We'll give it an accessibility label for accessibility purposes, so we'll label this as the brand search

field.

And we need to give it an on change.

And we need to do this when we type into the search field to update state.

I'll just give it a placeholder of search, Brandes.

So let's create a dedicated function to update our state and we want to update a new property called

search term, which will initially set to an empty string.

So we'll create a function called Handal Change.

We'll create it above our render function, and we want handle change to update this search term property

when we type into the search field.

And let's just take a look at this event object that's available to us when we type into the input.

You can see we have a couple of values.

That are available to a slightly different than the normal event that's present within REACT, the search

field gives us both a value and this synthetic event, which gives us information about the event.

And in order to keep this event around, we need to use event dot persist.

But really, in this case, all we need is this first value.

And we can get that by the structuring.

The argument, we can get it by structuring the event.

We just need to call substate and set the search term equal to the value, the destruction value that

we're getting.

If we take a look at the reactive tools.

Go all the way down to.

Our app component.

We see this new entry within state of search term when we type into the search field, we can see that's

being updated.

So the value that we're plucking off of this argument that we're restructuring is now being put into

state.

And then underneath the search field, we want to add another box and we just want to add an icon to

the right hand side of the box.

So we're going to get that once again from the start, and this icon will be a kind of indication as

to whether we have a value typed in the input.

In the search field and on this box, we'll give it a margin of two.

To separate a bit from the search field.

Then we're going to get an icon called Filter that Gastarbeiter makes available to us.

Then we can conditionally show a color based on whether there is a search term, so we'll set up a ternary

we'll say if there's a search term, we're going to use the color orange.

If there's no value typed into the search field, we're going to have a gray color and we'll make this

size 20 and give it an accessibility label, a filter.

That's the icon that we're rendering.

So now you can see this filter icon on the right hand side, which is currently gray, since we're not

we don't have any value within the search field, but if we start typing in it and see it turns orange.

So it's just a nice kind of visual feedback as to.

When we have some values in the input.

We'll just make that margin three just to space it out a bit more.

## 300 - Client-Side Search with .filter() (Optional).

We now have our search field and we want to be able to type within it and match either one or both of

the brands that we have and our UI.

At the moment, all that we're doing with our search field component is we're using the handle change

function to update the search term value within state according to the value that we type into the search

field.

But we're not filtering the brands or we're not changing the brands or according to the value that we

type in.

So we want to create a new function called Filtered Brands, which will do that for us.

It'll filter our brands right according to the search term value within state.

So instead of mapping over brands, we're going to call with the Nomaka filtered brands and pass in

our state, object with this state.

And the benefit of passing an entire state object is now we can structure, we can pluck off exactly

the properties that we need to perform this search operation and we just need search term and brands

for this.

So we'll take our brands right and we'll use the array filter method in order to filter the elements

within it.

So for each brand, for each element, we're going to set up a condition where we only want to return

the brand.

Whose field and we'll use the name field matches the search term value that we typed in.

And to make sure it matches, we will use the includes method will check to see if the name includes

search term and we're calling to lower case on both the name and the search term so we can normalize

the values.

So we'll get matches even if, say, one values, capitalize the others not.

And we want to then return that filtered array.

So now we can type within our search field.

And even when we type in part of one of the brand names, we get a match.

Let's type in Resample Goose Island, and even when we type in just, gee, you can see our array's

immediately.

Filtered, but if we type in a value that's within the description such as Chicago, you can see we

get either of the brands as matching.

So we'll set up another condition we'll check for.

Another field will copy the line that we wrote as a condition, set up this or condition to check to

see if Brandon description includes a search term as well.

So if there's not a match for the brand's name, we'll see if the description is a match.

So now we can type in values that are located in the description of each of the brands and we should

see them within the U.S. still, yeah, we can type in Chicago.

We can even type in a value that's a partial match for one description.

So brewery's part of a word here.

And Bear Paw and breweries, it's it's onward and Goose Island.

And when we type brewery into the search field, I can see neither of the elements are filtered out.

And we can even search for those that are all capitalized since we're using two lowercase.

On both the name and description and finally, if you want to make our search field component a controlled

input, we can use the value prop.

So if we want to use our state as the single source of truth, all we have to do is use the value prop

and pass down our search term value so our search field knows about it.

## 400 - Add Loading State for Brand (here: Group) Data. Create Loader Component (Optional).

When we reload the home page, I can see that our brands area is blank until our request is resolved

for that brand or.

So we will import a Spiner component from Gestalt to represent this floating state to our users and

the very bottom of the container will add a Spiner component.

And Spiner has a couple of props that has this show prop, which will conditionally show or hide the

spinner according to the loading state and this accessability label which will set to loading spinner.

So now to the show.

Probably want to provide a value that will be true when our components loading so pass in this value,

which we'll call loading brands and we want to set it to true when we're waiting for our request to

be resolved.

So we'll add loading brands to our state object and we'll set it initially to true.

And within component did mount when we're setting our brands brand A.

You also set loading brands to false, since we know that our Brands Zarei has been received from the

back end and will also set loading brands to false here where we're catching errors since we know it's

resolved there to.

We can also do structure loading brands from the same object within our render.

Now, we can save that, and if we refresh the page, we can see the small loading spinner up here at

the top.

If you want a different option, want a different style or animation to your loader, you can use this

package, react spinners, which we've already got installed, gives us a number of different options

for different neat loaders that we can make use of.

And I'll be using the grid loader option.

And at this website, David, who is Riak Spinner's?

We have this tool which allows us to modify these different properties for each of the loaders, we

can bump up the size.

For example, we can change the margin between each of the parts of the loading information.

We can also change the color.

So this gives us a nice preview of what our loader will look like with some modified properties.

So I'm going to make a dedicated component within my components folder for this loader, which I'll

call Loader.

And like with any rehab component, I need to import react.

I'll also import the loader that I want, which again was grid loader from react that spinner's.

I'll just create a less functional component, which will immediately return the loader, we'll call

that loader.

And there are a number of props we can add to each of the loaders.

So first of all, we can add the color, which, as we saw, we wanted a dark orange color, we can

specify the size, which is twenty five as we just tested out, and the margin of three pixels, and

then we can just export default.

Loder.

We want to make this available to our app component, so import Loder from bloater.

And at the very bottom, where we had our Spiner, we can comment that out.

Feel free to use it if you like.

We'll bring in our loader.

And we want to conditionally show it only when it's loading brands is set to true, so say loading brands,

double end loader.

So now if we refresh the page.

You can see our loader here on the top left hand corner of our brands area.

And we want to modify the style rules a bit in order to put it in the correct position.

We want to center it within that Brandes area so we'll use the box component from Gestalt in order to

do that.

We're going to wrap reloader with Box.

We're going to set some style properties, unbox the first thing that will set is positioned to fix

so we can set the position property.

We'll also use dangerously set in line style in order to manually add some rules.

We want to set the bottom value to three hundred.

Is that left to 50 percent, we need to make sure that this is a strong 50 percent.

And we'll use Transform.

And set that to translate X.

Negative 50 percent.

And this, in combination with the left rule, will place it the absolute center of our brands area.

In combination with position fixed.

Back in, out, just as we had that show prior to our Spiner.

We can remove where we're.

Interpolating the loading brands and put that as this show prop on our loader itself and then within

loader will d structure the show prop.

And say, show double land and only show the loader when loading Brant's is set to true as a result.

So now if we save both of our files and reload, we can see.

Our loader now in the middle of our brands area, and it's only being displayed when we're waiting for

our brands array to be resolved.
