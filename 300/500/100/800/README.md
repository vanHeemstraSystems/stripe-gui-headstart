# 800 - Creat User Cart

## 100 - Add Cart Markup in Brews (here: Items) Component.

We're displaying our bruise and our bruise component.

Now we want to create a card area so that users can click on Add to Cart at Ibru to their cart in order

to check out.

So we'll add the mass component from Gestalt and we'll import link from reactor Autodom.

Will add a new property called carte items in our state object, and this will soon hold all of the

items that a user has their cart and will need structure items from the state object and render.

Then at the very bottom of the box component, within our return, I want to add a user cart area.

Creates a markup to display a cart.

We'll begin by adding a box.

We want to set margin top to two to separate from the nav bar and some margin left of eight separate

from our brews that we're displaying.

Then we'll have the mass component that we imported.

This is basically a transparent box which we can set shaped around it and give it a great color with

this key word and within it will have a box.

To order all of the content within our cars will set display to flex directional column and line items

to center as well as give it some padding.

Then we'll add a heading to our cart.

So say user cart heading, we use our heading component.

And note that we can align any heading component or text component by setting a line to center set the

size to medium.

Just give us some text of your heart.

Then underneath the heading will have the text color set degree within our text component and will italicize

it with the italic keyword and here will show the number of items within a user's cart.

So interpolate cart items at length and say there are so many items selected.

Then we'll eventually add in a later section the cart items, the individual properties of each of the

items that are users added to CART.

But underneath that will have a box.

Or will set display the flags, the line items, the center just about content to center, direction

to call them.

So we're centering everything in both the Y and X axis.

And within this box will have another box so we can add some margin.

And here.

Well, once again, use card items that length will check to see if at zero and if it is, we're going

to show a text component.

We're going to show a default text component.

We're all set the color to red and we're going to tell our users to please select some items if they

don't have anything currently in their cart.

And I don't underneath this box will have some more text.

So be size at large, and this is where we'll show the total price of all the items they have in their

cart.

Then finally, we'll have a link which will direct users to the checkout page when they're ready to

check out.

We can save all that, we take a look at our mark-up, we can see our cart now this number of items

selected our default text and price and check out link.

But if we once again make our browser or windows smaller, can see that it's not responsive to make

our cart responsive, to make it wrap when you get to a mobile size or a tablet size.

In our parent box.

We're going to use dangerously set in lifestyle.

We're going to set the Fleck's rent property to.

Rap reverse.

So this is a bit different than normal Fleck's rap.

So allow the two different components that we have in this Ru's component to wrap, you can see, but

our cart is now placed at the bottom.

So to put this back at the top, we're going to go down to our user cart and on that parent box, we're

going to set a line self to end.

This will put our heart back up at the top of the page, but it will allow the cart to be wrapped over

the cards for our Bruce when we get down to a mobile size.

## 200 - Create Function to Add Items to Cart.

We're displaying our cart in our Brous component now we want to click on Add to Cart for a given brew

and see that brew added to our cart component.

So go to our button within our Rookard and unclick event with an inline arrow function.

We'll call the function add to cart, which we haven't created yet, and pass in the brew that we're

iterating over.

So we'll add this add to cart function above our render.

And once again, it will accept the Brout.

We're first going to check to see.

If the brew that we're trying to add to the cart is already in our cart, if it's already in our cart

items, array will create a variable called already in cart.

And we'll iterate over the cart items array using fine index, and we'll provide a condition that will

check to see if each item that we're iterating over is equal to the idea of the brew that we're passing

into this function.

If it is, we'll get a positive value for the index.

But if it can't find it, if there's no brew with that ID already within our cart items index will have

a value of negative one.

So if that's the case, we're going to add this brew that we're passing into our function to the end

of cart items with the concat method.

So we'll spread all of the individual properties of the object within this new object that we're adding

to the end.

And we'll add a property quantity set to one to track the quantity of each of the items in our array.

And then we'll set the stage, we'll set our cart item to our updated items array that we created.

Otherwise, we'll have an updated item's variable where we'll copy the items array.

Then on the cart items, right, we want to select.

The value already in CART, which again contains the index.

Where it has a blue eyed equal to the item idea that's already in court and we're just going to increase

the quantity value by one, meaning, we're adding an item that's already in cart in our cart, and

then we're going to update our state once again with our updated items variable.

So if we save that.

Drill down and react our tools to our Brous component.

We add to CART one of the brews, you can see our cart updates, we have one item selected, we go to

our cart items property.

We see.

All of the related properties, including this quantity that were adding when we concatenate it to our

cart items array, if we add another one, quantity increased to two and then with a different brew,

quantity is added and given a value of one initially.

So now we're able to successfully add items to our cart and we'll go down to our cart items area that

we said we'd touch on later and iterate over this cart items array to provide some markup.

So for each item, we'll have a box we need to provide a key prop.

That two item underscore ID, which is what we'll call each element that we're iterating over an item.

On this, Xbox will set display to flex line items to center.

And within this box, we'll have a tax component.

Or first, we'll interpolate the name with Eitam name, we'll have an X, and so the quantity, the

number of items that we've selected with item quantity and then the dash or will interpolate the calculated

value of item, not quantity times item, not price.

So we're multiplying the price of the brew by its quantity to get the total amount.

And then we're going to call two fixed at the end to set our number to two decimal places like a normal

price.

And up at the top from the start, we're going to grab the icon button component, we're going to add

a little icon button that a user will be able to click on in order to remove a given item from their

cart.

So underneath the tax component, what icon one with an accessibility level of delete item.

Which is what it will do, the icon will be set to cancel icon, which will be an exercise, will be

small and the icon color will be red and will add the unclick handler and a bit.

We should see when we.

Add an item to cart or add a couple of brews, can see each of the items within our cart being updated,

their quantity being updated as well as their price.

## 300 - Create Function to Delete Item from Cart. Calculate Cart Total.

We're able to add items to our cart, but we want to now use this icon button that we created in the

last section to remove a given item.

So an unclick to our icon button component, again, use an inline arrow function.

So we can call this function we haven't created yet, delete item from cart and pass an item, underscore

ID, we'll just need the ID of the item that we're iterating over in order to delete a given item from

our cart.

So once again, we'll add this function above our render and this item idea that we're getting will

receive as the parameter item to delete ID.

And within this function will create a filtered items array, which will take the cart items, use the

filter method.

And once again, we'll use it to remove an item.

We'll go through each of the items, check their IDs and make sure it's not equal to item to delete

ID, and then we'll just set the state or unfiltered items to cart items that remove that one.

Item with the ID that's being passed into the function.

So now, just as easily as we can add an item to CART, we can delete it with our icon button.

But now we want to take care of our price and see our prices not being updated.

So a crate outside of our components folder, this utils folder.

And we'll have this index JS file.

This will hold all of our utility functions, will do use to do various things within our app, so create

a function that will immediately export, we'll say export content and we'll name this function, calculate

price.

So this will calculate the total price of items within our cart.

It will receive our cart item.

So call the parameter items and we'll use the reduced method, the array reduce method in order to go

through all of the items.

All the elements in the array and we can successively add the product of.

The quantity and the price.

To our accumulator, what this does is for each item or a multiplying quantity times the price, adding

it to this accumulated value and will be able to get the sum total of all of the.

Values within our Kaat.

And we're going to interpolate reduce.

Within template, literals will prepend it with a dollar sign and convert it to a decimal with two decimal

points using two fixed.

Set to to passing and the value to then within Brous will import calculate price.

We'll get it from our utils folder we just created.

We don't have to specify the index file, we can just say dot, dot, utils or go all the way down to

our cart where we have our tax component for our total and all we have to do now.

Is interpolate.

Calculate price and Will will execute it.

By passing in our cart items.

Now we can save both of our files.

Can head back now as we add items to the cart.

And had multiple items, you can see our total increasing every time we add it or delete it, it's being

updated accordingly.

Last thing we might want to take care of is making this heading that we have for quite a bit smaller,

since it's the same size as the heading for our Bruce component or our brand that we're showing.

So we might want to make that small.

## 400 - Persist Cart to LocalStorage.

Currently, we can add items to our car.

We can remove items from our cart, but if we refresh the page, everything that's currently in our

cart goes away.

So to resist any changes we might make, go to our utils folder to index that Jass will create a section.

Of khat functions to persist, the data that we add to it.

Our first function will be called Stuttgart, will make sure to export it, and this will accept a value

and a cart key.

Be working with local storage.

So we want to check to make sure first that we have local storage.

And if we do, we're going to use the set item method on it to set a key value pair with the cart key

that we pass in and the value.

And since we're passing in an object as the value, we're going to want to convert it to a string,

local storage, unaccept strings.

So we're going to convert to adjacent string with Jason.

That string ifI.

In order to not lose the card key value, we're going to set it equal to a variable by default.

And we'll set that equal to the string kaat.

Then we'll create a function called Get Cart.

Which won't take a value.

It'll only accept a cart key.

So we want to get.

A value, a value, according to its key, within local storage.

So we'll check to see if there's local storage and if we can get an item in local storage according

to its cart key that we're passing in.

And if we can.

If there's an item in local storage with the key of khat, we're going to want to return it.

And since we are putting items in local storage as a string, we're going to want to convert it back

to an object with Jason that parts it does the opposite of Jason that string a fly.

And if that doesn't work, we're just going to want to return an empty array, just like we have by

default in our local state.

For Kaat items, we will import set cart and get caught from our utils folder within Brew's.

And when we execute that state in our add to cart function.

We're going to want to use the callback of Saturday, so at a comma and an arrow function, we're going

to call that card and pass an updated items.

So this will be executed immediately when set state is resolved since Sunset State is an asynchronous

action.

We're going to.

Run that call back.

Pass an updated items to it to persist our cart items and then also within our component amount, we

want to get the cart data when our component loads so called get cart antithetical to cart items and

we're setting state.

So now if we add some items to our cart and we reload the page.

We can see once it loads, once it mounts are two items are still there, but if we try to delete an

item, it doesn't go away.

Those changes aren't persisted.

So we need to make sure that we add this call back to where we're setting state within our delete item

from cart as well, or call back or inline error function cossette cart and pass filtered items so that

when we delete an item, not only is it changed within local state, but also within our local storage.
