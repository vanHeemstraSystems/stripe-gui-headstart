# 1000 - Checkout Component, Process Payments with Stripe

See also "Section 10: Checkout Component, Process Payments with Stripe" at https://www.udemy.com/course/build-an-online-store-with-react-and-graphql-in-90-minutes/learn/lecture/11669692#overview

## 100 - Make Checkout a Private Route (Optional).

If we sign out of our app, we click on Sign Out and are now bar and go to checkout, we can see our

checkout component.

And this is an issue.

We only want authenticated users to be able to go to checkout and check out their order.

So index charges will add the reader component from reactor Autodom as well as imports, they get Tolkan

function.

From our utils folder, and we'll use both of these to create a private route to make sure that the

checkout route can only be visited if a user is authenticated to create this private route function

and will structure component as well as.

This second parameter of rest used the spread operator and collect rest.

And this is so when we pass anything directly onto the route, this private route that will be adding

just like a normal route will be able to collect all of the props, as well as for the private route

to know which component we want it to render and then within its render function.

We'll set up a ternary again, we will use get Tolkan.

And check to see if it's null, if it's not null, we're going to render the component that we want

since our users authenticated and we're going to pass down any props which we have available within

the render function.

To that component, otherwise, we're going to use the redirect component to redirect to a different

path, and within this two, we can specify that path name and in our case, we want to send them to

our sign in component or sign in route to tell our users to sign in.

Since they're not authenticated, they need to be authenticated to see our checkout route.

And we'll also pass down some state if we need it.

It'll tell that component that we're making our private route where a user is being redirected from.

So we'll change route to private route for our check out component, and that's all we need to do in

order to make this protected, only accessible to authenticated users.

So if we sign in.

And we go to check out.

We can see the check out component.

But if we sign out, we click sign out or immediately kicked out.

To the home page, and if we try to go to checkout or kicked back to Sinon.

## 200 - Add Markup for Checkout Form.

Now, let's move on to building out our Check-Out form so that users can check out their orders.

So go to check out that, James.

And we're going to remove that divide that we had with the text of Check-Out.

And we'll go to our sign up component.

And grab all of the mark-up, the entire container and everything within it, everything within the

return can just copy that and paste it within.

The return of Check-Out.

And we'll just modify the markup as necessary.

We'll grab the import from Gestalt, all of the components of imported from Gestalt within the sign

up.

We'll also grab the toasts message if you have one more important message.

From our components folder, we'll grab a handle change and handle submit.

And paste it within our checkout class.

We can remove where we're restructuring the values from state username, email and password.

We'll grab the form empty function and show Tostes if we added validation and text messages to our sign

up form and now add our state object.

We'll add the toast property set to false and toast message set to an empty string.

Will remove the dangerously set in line style and change the color to dark wash to make it a gray color.

We'll change some of the comments to check out form.

We can change the on submit to handle confirm order.

We'll change Sign-Up formatting to check out formatting, remove the text component again, as well

as the box.

Surrounding the heading area will change the heading text to check out.

And instead of having a username name input, we're going to first have a shipping address and put we're

going to give an idea of address, the name of an address and a placeholder of shipping address.

We'll keep the handle change connected to the on change event.

Then we're going to have a postal code input, so change the ID to postal code and cancel case, change

the type to no name to postal code.

And the placeholder to postal code.

Then don't have a city input where the user will input their city, where they want it to be mailed

to.

So an idea of city name of city placeholder, a city of residents and will copy this city input and

paste it in one more time.

Right afterwards, and this will be our confirmation email address and put the idea to confirmation

email address.

I'll change the type to email this, copy the ID and paste it in as the name.

And for the placeholder.

We'll just provide the same tax confirmation email address.

We can remove the button and instead we'll just use a standard button with button tags, set the ID

to stripe, underscore, underscore button and the button will have a type of segment with the text

in between the tags of submit.

Now, within the render, we need to restructure a few things, we need to restructure, toast and toast

message from St..

If will be using a toast component.

And we'll also add these values that we provided for our inputs and state, so address postal code city.

And confirmation email address, all of these will be initialized to an empty string.

We'll change the is form empty validation function, where will this structure address Postal Code City

as well as confirmation email address?

I'll just copy each of those D structured values and paste them in within the return to check to see

that we have values for each of them.

Make sure to include the operator for each.

Now, we can save all that and take a look at our check out form.

We have all four of our inputs.

We click on submit, we see that our form.

Reloads the page.

So we'll need to set up.

Our handle confirm order.

Function instead of handle submit.

So now if we click on Submit, we get our form validation.

Now, I'll just take a look at the react dev tools just to make sure that when we type into each of

these inputs, if we go down to our check up form, when you type into each of these inputs that they're

being updated properly using our handle change function.

You can see if we type into each of them, get each of the corresponding state values updated.

## 300 - Add Cart to Checkout. Show Default Text if Cart Empty.

We have our check out form, but we also want to display our users card so they can see all the items

that they're going to check out within the check out component.

The first thing we'll add to our state is the card items, property, and we'll update this property

within the component amount method we'll call said State.

We'll update the card items array by using the gift card function that will grab from the utils folder.

So we'll call gift card within our set state to update the card items from local storage.

Then we can structure court items within render from our state object.

The first thing we want to do is bring our heading that we created in the last section above the opening

form tag.

We'll add a couple more properties.

To organize things within our parent box, right within our container, or set a line items to center

and direction to call them, just to align everything on both the one x axis and then underneath the

heading will have our user card will grab all of the flex properties from our parent box and add it

to this user card box within the user card area, and we'll give it some margin tops of two to separate

it from the heading and some margin bottom to separate from the check up form underneath, say, of

six.

And the first thing will include within our cart is the number of items that they have for checkout.

So we'll use a tax component.

We'll set the color to dark gray and we'll italicize it using the italic keyword.

And within it, we'll just interpolate items that length, say, card items that length, so many items

for checkout.

Then underneath that, we will have another box with some padding.

Padding sets it to and within this box, we're going to iterate over our cart items, so we'll use the

map method.

We'll name each of these elements within the array item, and each of these items will be within their

own box components and so we're iterating over it.

We need to add the Kiprop with the unique identifier, which will do with item underscore ID.

And we'll also give each item, give each items, box some padding in between.

Then within, it will have a test component with color set to midnight.

And here, we'll include all of the relevant information for a given item, its name with item name.

An item quantity, then the product of its quantity by.

It's price.

To get the total value for a given item.

And then underneath the box, we're going to have another tax component, which is going to show the

total, the total amount of everything within our cart.

We'll use the calculate price function, which will accept all our cart items in order to calculate

it, so we need to make sure that we're importing calculate price from our utils folder.

Now we can say that.

Now we have a basic shape for our user cars.

So heading back down to our Kaat area, I can just add the text items, we can say so many items for

Check-Out.

And then what we want to do is we can collapse both our user card and our checkout form, and we want

to set up a condition.

We don't want to show either of these if we have no items in our cart.

So we'll use react, fragment and wrap both user card and check out form with it.

This is how we group multiple items without having to use something like a div so we can conditionally

show everything within this fragment.

According to the length of the card items, if it's greater than zero, we're going to show the form

in the card because the user will be able to check out otherwise.

So within.

The second part of our conditional, if it returns false, meaning we have zero items within our cart,

we want to add some markup.

We want to tell our user that they need to add some items to their cart before that, before they can

check out.

So at a set of parentheses, we'll just add a comment here.

Saying this is some default text, if the user has no items in their cart and will put all of this markup

within a box, was that the color of it to dark wash?

The shape will be rounded.

And we'll give it some padding, say, for.

And we'll use the hatting component, which will align to the center of the box or set the color to

watermelon and other preset color.

We'll set size to extra small and we'll just say your car is empty, then we'll have a test.

Component, which will align to center again.

Well, italicize, it will give it a color of green.

And we'll suggest they add some Bruce.

So we currently have some items within our cart, but if we remove them by going to our cart, clicking

on a brand and deleting everything within the cart and head back to checkout, we can see our default

text suggesting that our our user add some Brous.

## 400 - Add Confirmation Modal to Order on Submit.

When our users provide all of their information in order to check out and click on Submit, let's create

a confirmation model that will be shown which will allow them to make any final changes before they

actually submit their order.

So then state will add an order processing properties at the falls and a modal value set to false as

well, which will control the visibility of our model or create a function called handle submit order,

which we won't.

Add any content to just yet, as well as a close mental function where all it will do is it will set

the stage and set the model property to force within states to close the model.

Well, the structure model and order processing those properties that we just added to state within

our render function.

And then we'll head down to the very bottom right above our text message if you added that.

And we'll have our confirmation model area.

So we'll conditionally show this model as a model double and.

And then in parentheses, we will.

Add the mark up for our confirmation moral component.

So right confirmation model as a stateless functional components, and we want to pass down a number

of props to it.

We want to pass down order processing as order processing cart items.

Close model from the function, this close model was the handle submit order function.

And once again, we're passing down all these values to a stateless functional component outside our

Check-Out component, and we can just add each of these props that we just added to our confirmation

model or restructure them from our parameters.

We'll create a model using the Gestalt model component, so we'll grab that from our installed inputs,

will also grab the spinner component.

And so we want to show the loading state when our order is processing.

Back down at the very bottom, in the middle, within the opening tag, we're going to set accessability

close, able to close.

That accessibility model able to confirm your order.

They're heading for the middle, will be the same, confirm your order.

Will add an on dismiss prop of clothes model, which will allow users to dismiss the model.

And we'll have a photo where he can pass a number of components will pass in the box first, the display

flex margin rate of negative one margin left of negative one and justify content to center.

Then we'll have another box or we'll set the padding to one to to provide some padding to everything

within our model, then we'll have, I should say, within the foot of the metal and then we'll have

a button component that size it to large.

The color of it will be red, text will be submit.

This was what will allow us to actually submit our order.

Was that disabled according to the order processing value, whether it's true or false and unclick will

be set equal to handle submit order and we can copy this entire box with the padding of one and it's

button inside and modify it by removing the color prop, setting the text to cancel and saying the unclick

to close model.

So this will be our cancel button or submit and cancel buttons will be located within the footer of

our confirmation model will also set roll to alert dialog.

As well as size to small.

Then underneath that, or I should say between the modal tags, you're going to have our order summary

and we're going to show this conditionally based on whether the order is processing.

We want to make sure the order is not processing.

And if that's the case, we'll display a block box with the display flecks, just about content to center

a line, items to center.

And direction of Collum with some padding of one.

Well, actually, make that two and we'll set color to whitewash to make it a light gray color, and

then we'll iterate over the card items once again so that users will get a last chance to review everything

within their cart before they finally decide to send off their order.

We'll call each element item, it will have its own box again, we'll have a Kiprop so two item on this

Friday.

Give us some padding of one again.

Give it a tax component size, we large color will be red.

And then we'll interpolate all the same values, the items name the quantity, as well as the product

of the quantity and the price.

So make this read, make it very clear to users that this is their last chance to confirm their order

before they send it off and underneath the cart items include another box.

Give it some padding in the Y direction of two and then within will have a tax component size that to

large will be bold and it will show our total, which will do with we calculate price function and we'll

pass in court items once again.

And then we'll have our order processing center, so if the order is processing, we're going to display

a spinner so its show will be set equal to order processing value and its accessibility.

Labor will be order processing spinner.

We'll also include some tax just so the user understands what this means for set a line to center.

We'll set the text to Italic and we'll add some text of submitting order and we'll show this conditionally

once again based on the order processing state.

If it evaluates to true, we'll show it.

We'll save all that.

Take a look at the form of the model, I should say, within our browser.

We'll try to submit our form or hit submit.

We don't see our model because we need to actually set model to true within and will confirm order.

So underneath are is former empty conditional.

We're going to set model to true, we'll fill out a form one more time.

And we'll hit cement and we can see once again a review of our cart and hit cancel if we want.

If a user has second thoughts and will change order processing the truth to see what our spinner looks

like.

So set all the values within our form hit submit and you can see this is what it will look like when

our form is happening and both buttons will be disabled.

## 500 - Sign Up for Stripe and Get API Keys.

Let's head over to strip dotcom so we can process the payments that users will make within our app,

allow users to make payments when they use our checkout form.

So if you don't have an account with them, you click on create account.

It's totally free to set up an account and start working with Stripe.

Now just ask for our email name and password, and once we provide that, we'll be taken to the dashboard.

So give us a lot of information about all of the payments that have recently been processed through

Stripe that will give us this nice looking blue graph for all of the payments that have been processed

recently.

We want to go to this get started with Stripe area and particularly the accept your first payment link.

So click on that will be taken to the card payments.

QuickStart from there we want to click on the development.

QuickStart So give us a QuickStart guide for developers.

And here within step one, we're going to be able to obtain our API keys.

These will be essential to charging users to actually process the money that they've paid in order to

get the items that they've specified within the card.

So we'll hold onto these and we'll make use of them and the following section.

## 600 - Add Stripe to Checkout Page.

Now, let's go through how to actually use tripe within our checkout form in order to process the user's

order.

First thing we'll do, however, is go to aftertax and paste everything in this file that's located

within the access file attached to this lecture.

You can see we have some new styles applied to our button and some space in between our inputs.

These rules will style a number of things that will add to our checkout component here in a second.

At the very top, we want to import a few components from the package, react stripe elements.

We want to grab elements, stripe provider.

Card element and inject stripe.

And we want to get all of these from react stripe elements.

So these are Rack's components created by Stripe in order for reactor applications to be able to process

strike payments, will change the class, first of all, to underscore checkout form.

And we'll see why in a second.

We'll head down to our confirm email address input, and right underneath that, we want to add our

card element.

This is what users will be able to type their card information, their credit card information into

in order to actually make them pay for their order.

We'll do that just by.

Adding a component, the tax card element is like we import it and it'll have an idea of stripe underscore,

underscore input, and it has this already event where if we.

Click on it.

We include this input and return input focus, you get this nice transition.

As you'll soon see when we click into our card element.

So here at the very bottom, underneath our model clothing model, tagging before the export.

We first want to create a seamless, functional component called Check-Out, since we've replaced the

name, we've changed the name from the checkout class to underscore checkout form first thing or will

return is our provider component.

And now we want to go back to Stripe, where we got our API key and grab our publishable key.

This is an API key that we can actually put within our.

React files we don't have to make secret.

And we're going to.

Set the value to the API Kiprop, it's going to make this API key available within all of the children

than all the child components within that will have elements so we can use the card element, for example.

And then within that, we'll have our checkout form and we'll create checkout form right above the checkout

component.

And we want to use the higher order component, inject stripe.

We pass an underscore checkout form so that we can actually create a token that stripe will use in order

to process our payment.

And this is the whole hierarchy of components that we need to add and then check out, and we also need

to add a script above the title.

And we'll add a script tag, which will have an idea of striped dash SJS.

A source of https, Ford says baugus stripe, dotcom slash V three and yes, it is OK to put this within

the head.

We don't have to put this right at the bottom of the body of the index HTML file at the end of the script

so we can save that.

Can head back to our checkout form.

You can see our card elements now where users can type in their credit card information.

It looks like we have no heirs, and if we take a look at the console just to confirm this looks like

everything's working well and we successfully integrated Stip strike with our checkout form.

## 700 - Create Orders Content Type, Add Create Function in Controllers.

See also "Customize API controller and service" at https://www.youtube.com/watch?v=FwscmVq1gcw

See also "Strapi: Customizing Controllers: Extending core controllers" at https://docs.strapi.io/developer-docs/latest/development/backend-customization/controllers.html

Back in our Admon panel, we want to go to our content type builder, plug in and add a new content

type.

We want to add a content type for our orders.

We can call this content type order or orders as you prefer.

First of all, add a STRINGFIELD, which will give a name of address.

So we want to provide Fields' for each of the values that we're passing.

To our order.

And we'll make each of these required to create another Stringfield, the name of postal code, make

that required.

We don't want to create an order unless all of these fields are present on the request that sent over

what a city stringfield as well as a bruise Jason Field.

So Bruce will be sent over as Jason Data and we'll make that required.

And we'll have a number of field which we'll call amount.

And make it required and make sure that's that number is a decimal.

So we'll click on Save, it'll add our new orders content type.

We'll head over to rules and permissions and click on the authenticated role.

Click on the pencil tab for that.

You can see this new orders permissions area.

I want to click on the create option.

I want to select that to allow users to authenticate users to create orders in our database.

So we'll click on Save.

So this order will be created whenever we.

Have a user check out, an authenticated user checks out.

They'll create a new order within our database and back in our code, editor will head to server the

server folder to the API folder, then orders or order, as you specified, and within the controllers

folder to order orders such as?

We're going to head down to this create function, this create method, to be precise, and we're going

to remove everything within it.

We're going to remove that return and we're going to add our own logic to do a couple of things.

We want to create an entry within the database for an order that's sent using our orders or check out

form.

And we also want to send a charge over to Stripe.

So we're going to first structure some values from this context request body.

So this will contain all of the values that we passed through a request.

So grab address, amount's bruised postal code, token and city and will create this charge variable,

which will hold the return value of calling striped charges dot create.

We're going to create a charge this way with Stripe and we're going to use an async 08 syntax again

to resolve this promise.

We're going to set the amount property to amount times 100 to convert it to the correct decimal four

stripe.

We're going to set currency to USD so it will be in US dollars.

There's some information and stripe's documentation on how to change it to a different currency other

than dollars.

We'll add a description for a specific charge so we know who it came from and when it came through.

So we'll use the date constructor and pass data now to it to get when this charge is created and pass

in the user ID, which we have access to by interpolating context.

Dot St..

Users underscore ID to get the user's ID value.

And then we will pass through the token by putting it on this source, which is necessary in order to

create a charge that automatically generated token that was made by stripe on the front end in our checkout

form.

So we'll add a comment.

We'll say that we're sending a charge to strike and then we're going to use the values that we're getting

from the request in order to create our order in the database.

So wait, strappy services, court order or orders according to what name you gave the content type

ad.

So we'll use the ADD method to add a new order.

We'll give it a user property, which once again will reference context that state, that user underscore

I.D. and just pass in all of the values that we're getting from our.

Request body.

So address Mount Brous, Postal Code City.

And we'll just add a comment above it.

That we're creating an order in our database and we're setting the return value of this to the order

variable and at the very end we're going to return that order.

Now that we have this, we have all the logic within our control.

The next thing we want to do is actually bring in strike so that we can make this charge.

So we'll need to create a straight variable and we'll require the straight package, which we haven't

installed yet, but we need to go back to our API keys and we need to now use the secret key.

So this is the key that we'll use on the back end and we'll just.

Add a set of parentheses and pass that in as a string.

We can save that and we need to end our currently running script and server and we want to install the

straight package with NPM eye stripe and once it's installed, we can start up our server again with

satrapy start.

So now we have our controller configured and can charge our customers and add orders to our database.

## 800 - Submit Order to Database. Send / Process Payment with Stripe.

Let's go through the entire process of checking out the items in our user cart.

Will create an entry in our orders collection, in our database, and we'll also send a charge to strive

to be processed.

Well, first import clear cut the clear cut utility function from our utils holder and head into utils

and create a new utility function or copy, calculate price and pasted in right underneath.

We call this function calculate amount, and here we want to return a number with the type of number

in the calculate price function of returning a number, but it has the type string.

So we want to return a number.

We're going to call it to a number using the number function.

And this is going to be essential to actually provide a amount value to strike for the price of our

purchase.

We want to set order processing to falls within state and then we'll go down to handle some in order

to create the logic to actually send off our order to our back end and our charge to strike.

We're going to restructure a few values from our state object cart items, city address and postal code.

Then let's take a look at how we can process our order, regardless of whether it's.

Process successfully or not, first of all, begin by setting order processing to true and state, then

we'll create a token variable which will hold on to the token that will be created for us using stripey,

in particular, using the react stripe elements that we set up in the previous video.

So we'll have a try catch block, since we're going to be performing a couple of asynchronous actions

and in try, we want to first create the striped token, then we want to create an order in our database

using the strappy SDK by making a request to the back end.

Then we'll set order processing to false, since both of those promises have resolved successfully.

We'll hide the modal.

They were displayed by setting Myrdal to false in state.

Then we're going to clear the user card of all the items that the user had saved since they just checked

them out, then we're going to show them a success toast to tell them that the order was successful.

If we have any errors, are going to still set order processing defaults in the model to false.

And we're going to show an error toast with the error message that we're catching.

So begin in the tri part, will create a response variable and we'll say, oh, wait, this stop props

dot stripe.

So this strike object is added by our react stripe elements.

And we have this create token method on the stripe object.

And when we get our response, we'll set the tone variable to respond to that token ID.

And now we need to grab our SDK.

We'll do that from our Bruce component.

We'll grab actually our API URL variable and our satrapy variable, and we need to import the strappy

Azazeal import strappy capital s from Stripey STK JavaScript.

Then right underneath where we're setting the token variable will say a weight strappy entry.

We want to create a new order.

Entry will specify.

That the collection is orders and then will pass through the data in order to create this order as an

object, as the second argument.

So first of pass passing the amount and we'll create this.

Amount as a new variable will say consed amount and we'll use our calculate amount, utility function

and pass in items to get the total price of all of the things we have in our cart.

We'll have a Bruce property, which will set to cart items.

An old passan.

The city that these are provided, as well as their postal code.

And their address, and we also need to include.

The striped token that was created.

Then we're going to since both of these promises have resolved successfully, that order processing

to force.

Hide the model.

We're going to clear the heart of all of the user entries and we're going to show a success tost by

calling Sotos and passing the text, your order has been successfully submitted.

And here.

Let's actually pass in another argument, argument of true.

We'll touch on that in just a second, what that will do for us.

So we can copy this set state that we just added or we're setting order processing the false in the

multiverse also within our catchment, but here it will set Sotos to call châteaux with error message

to pass through the error message.

And we're passing through this true value as the second argument to show tost.

In order to redirect, so by default, this redirect parameter will be set to false.

Will only redirect if we pass in the Valley of Truth.

The second argument.

And we'll add a call back to our set state within our set time out, where if we have true for a redirect,

we'll use this and conditional we're going to push the route to the home route.

We're going to redirect.

So if true is passed to the redirect argument, we're going to redirect home, which is what we want

to do when our order is successful, after we show the success tost.

And we want to.

Redirect within a component that's not within our router again, so we're going to use the width throughout

our higher order component.

We're going to head down to where we're creating our checkout form.

We're going to wrap that with with router.

So now we have access to the history object within Prof's so we can call push on it to redirect home.

We'll change the type of our postal code textfield to text from No.

And lastly, we want to make sure that our handle submit order is an async function by adding the async

keyword, since we're using a weight within it.

OK, so let's try this out.

Let's add a shipping address.

A postal code, the city.

We want this to be shipped to.

A confirmation email and we'll just provide this.

Set of four tools in order to.

Send off our order.

And once we hit submit.

You can see that our order has been successfully submitted, so it looks like everything worked as it

should.

After five seconds were redirected back home.

And if we take a look at our striped dashboard.

To take a look at it, you just have to click on that payments tab on the left hand side of your user

panel.

We can see that we have a new order here.

You can see our amount.

The description looks like our payment was successful.

We see the tax payment succeeded.

We have the amount that we specified in dollars.

Just like we wrote within our controller and we have a description with the time that the order was

processed as well as the user ID, and if we refresh our user panel and take a look at the orders content

type, we see our new order here with our city, our postal code and our Brous as JSON data, as well

as our amount again of twenty seven point ninety seven.

So it looks like our order was submitted successfully.

We sent off a charge this trip and we have a new order in our backend.
