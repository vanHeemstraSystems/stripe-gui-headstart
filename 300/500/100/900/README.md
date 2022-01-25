# 900 - Add Signin / Signup Components, User Authentication with JWT

## 100 - Create Sign Up Form

We've got our card, we can add items to it, remove items from it and persist, the data changes that

we make, but we need to work on authentication now so we can authenticate our user when they want to

check out.

So going to sign up Dodgiest to sign up component.

We're going to import a number of Gestalt components, container box, button heading text and text

field, all from Gestalt or replace the div that we have with the text of sign up first with the container.

And then within that container will have a box.

Where once again, we'll use a custom background color with dangerously set in line style, set this

to the hex code EBITDA.

Give it some margin margin of error as well as some padding of four.

Is that shaped around it?

And we'll use display flags just to buy content that the center to center everything in there Rose.

Then we'll have our form create a form in order for our users to sign up to our application.

We'll use a set of form tags and to center all of the inputs that we'll have within our form, you will

use a inline style.

And the trick to centering all of our inputs is to set display to inline block walls, that text align

the center and max width to 450.

And then within this forum.

I have a box with a margin bottom set to two.

Display Flex Direction column a line items to center.

And we're going to put in a heading for our sign up for.

So just add a comment here or sign up, formating will be right here, will set color to midnight.

I'll give it some text of let's get started for users just signing up to our application.

I don't need that.

Will have a tax component.

That'll be italicize with the Attala keyword color will be set to orchid.

And we'll have some smaller tax laws also sign up to order some brews, so to give users an indication

of why they would want to sign up.

And now we'll add our input.

We'll do that with this textfield component fungus that we need to supply an ID just like we did for

our search field component.

Set that to username.

The type will be text and name will be username and placeholder to show to our users, will be username

capitalized and will have an unchanged function of handle change.

We can copy this TextField and paste it a couple more times.

Next, we'll have a password input with an idea of password, so the ID field will generally match the

name, which again is password, the type will be password and the placeholder will be password.

And now we'll add an email address input, which we can actually put above our password input so it

will have its own type.

What type of email provide some email validation, name of email, idea of email and placeholder of

email address.

They've got all of our inputs, all of our text fields, and we want to include a button so that users

can click on it.

And they.

Want to sign up?

That the color, the blue text to submit and the type to submit.

So let's save that and take a look at it in the browser can see we have our form.

We need to add the change to our TextField, which will take care of in a bit, will add our handle

change function and to make our button Marinaro, you can see it's taking up the entire width or said

that two in line use the keyword of inline and now we'll just add our handle change above our render.

And will this structure, our event and value, so previously we just restructured value to Colsaerts

first we need to have a state object and we'll create properties within state that correspond to the

names that we added to the TextField username, email and password so that when we call that state and

handle change can use a computed property.

So rap event that target that name within brackets, set it equal to value and we'll call above it event

that persists to make sure the event sticks around.

We're using the event object to grab the name off of each of the TextField.

And we're updating the property in state that corresponds to the name of the given TextField.

So when we type into the username.

Text input, we're going to have the username, property and state updated, and the same will apply

to our email and password properties.

## 200 - Add Form Validation to Sign Up (Optional).

Within our sign up form, we want a new user to provide a user name, email and password, and when

they do, to be able to hit submit.

And sign up to our app.

To do this, let's create a new function, but then sign up called Handle Submit.

As handle submitting the values within our form, we'll accept an event on which we'll call prevent

default to prevent the default action of submitting a form, which is to reload the page as well as

this console log of submitted to see when this is fired.

So on the form component and add the submit event and link it to handle submit.

So when we provide values for each of the inputs.

And we hit submit, we should see our console log of submitted and the page doesn't reload.

But if we don't provide one of these values, for example, the password, we can still see that the

form is being submitted.

And with the.

Email form, for example, we have some basic validation, but we want to set up some validation here

so that a user, a new user isn't submitting an empty form.

So within handle submit will set up a conditional.

Say, if.

And we will fire a new function that will create called is form empty and if the forms aren't, it will

return true.

And so we want to include the not operator in front of it.

Only if the form is not empty and it returns false, will we be able to submit our form, the values

in our form.

So we'll create this form empty.

And to it has passed the estate object with this state and we can restructure the values that we need

from state once again, username, email and password.

And this function will return.

The value true.

If any one of these inputs has an empty string, if a value has not been provided to username, email

or password with this or conditional so that when we try to submit a form, for example, with just

a user name and email address and see, we don't see the submitted log, but only when we provide some

value to password we see submitted.

So this provides some basic validation for our form.

## 300 - Create Toast Message Component to Show Upon Validation Error (Optional).

And the last video, we provided some basic validation to our sign up form so that if the user doesn't

provide a value to any one of the inputs, then our form isn't submitted.

But instead of handling.

The validation in this way with an handle submit.

When the form is empty, it would be better to.

Show the user a text message, which we could call with show host or tells them the message, for example,

fill in all fields to tell them what's going wrong.

Let's create this function, let's create show toast, and it'll accept one argument to call toast message.

The first thing we want to do is we want to make this message visible and show the message itself.

We'll add a couple of hours within state toast, which will control the visibility of the message,

well, initially said that the first and text message, which will be the text for the notification,

which will be an empty string initially.

So we'll set the state within Sotos that toast to truth to reveal the message.

And was that terse message to the value that we passed in when we call the function?

Then after a certain period of time, we want to hide it or use this.

We'll do this using a set time out function.

So after a certain period of time, was that toast, of course, to hide it and will set toast message

back to an empty string.

And let's do this maybe over five seconds or so after five seconds or five hundred milliseconds will

hide the text message, let's create a dedicated component for this, which we'll call text message

and we'll add it to our components folder.

At the top, we'll need to bring in react and we'll be using the toast component from Gestalt.

So this will be a state less functional component to message.

We can immediately return it within parentheses.

And for now, let's just.

Provide tost component within it and just export default toast message.

We can set a number of props on toast.

We can set the color, for example, to orange, we can set the text prop.

Which are getting from tost message.

And now we want to import it and then sign up.

And add it to.

The very bottom of the Mark-Up say, right before the ending tag of our container.

So we want toast message to be available to be passed down.

To our Toastmasters component, our text message piece of state, and we'll pass that down, is a message

prop.

We can restructure that from our state within, render the constant message.

As well as tost will be equal to the start date.

Again, Tost will control the test results, it will control the visibility and we'll pass that down

as show as the show.

So we're passing down two props, show and message.

So pass a message to our text prop.

And will conditionally show or hide.

The text message, the text component, I should say, with show, so if it's true.

We will see.

The toast component.

I'll just wrap these in parentheses and put this on a separate line, we're also going to use a box.

The box component from the start in order to a bit.

Move this over.

And Unbox.

We once again want to set dangerously set in lifestyle.

And we can grab all of the rules that we had within our lower component where we're.

Setting bottom to.

Three hundred in this case, let's head up to 250 and we're setting up 50 percent and transform to translate

X negative 50 percent as well as position fixed to put it right in the middle.

Of the page.

So now when we save that, we can see we have in the middle of the page our text message telling us

to fill in all the fields.

It looks like we're still submitting the form, so we need to change this up a bit.

We want to return whenever we show this text message, meaning that we're not executing any other part

of our handle submit function so that when we click on submit.

We're not seeing our submitted blog within the console, meaning that our form isn't being sent off,

our formatting data isn't being sent off to our back end only when we provide all of the field, all

the fields, all of the values to each of the text inputs.

Do we see submitted?

## 400 - Register User. Store JWT in LocalStorage.

Let's create the functionality so that when the user provides their user name, email and password and

hit submit, they are signed up, they're registered within our application.

Go back and sign up, will head to the handle submit function, which we're calling when we submit the

form, and let's go through the process of signing up a user.

We'll have a try catch.

So we're going to be executing an asynchronous action in order to register our user.

We'll take a look at it in a second.

Let's go through the steps first.

When we submit user data, we want to set loading to true.

We want to make a request to register our user with strappy.

Then we will set loading to force.

When we have this asynchronous action result, this promise result, we're going to get back a token,

a JSON Web token, which we'll use to manage our user session and we'll put that in local storage.

And then we will redirect the user to the home page.

And if we run up against an error when we try to register a user, we will once again set loading to

false.

Because our promise is still resolved, even though we have an error and we are going to then show the

error message using the text message that we've created, if you've created that Tost component with

me.

The first set loading to true that set state and our tri.

Area and we will add a new property to state loading, which initially will be set to force when we're

going to see how we can register a user with the strappy SDK.

So we'll grab it, grab to Constance, API, your own strappy and go up to the top of the page.

We want to make sure that we're importing satrapy from Satrapy, STK, JavaScript, slash, build,

slash machine to get the SDK and you can paste in our API, URL and strappy.

And we're going to.

Register a user with just one line.

We'll create our response variable and we'll say, oh, wait, satrapy, don't register, and all we

have to do is pass in username, email and password, which we have within our state so we can restructure

those values within Handal submit username and password from the start state.

We can just paste that in.

To the register method, so we're awaiting resolution of that.

And we need to make sure since we're using the akua, that we have this as an async function.

Then we're going to set loading to force once we get a response back.

And then before we put the token in local stores, let's just consider log the response to see what

we get back and then we're going to want to redirect users.

Let's create a really short function that will allow us to redirect the user to the root root.

So this redirect user function will accept the path and we will just say this dot props that history

dot pushed to the path that we pass in.

We can just copy what he said.

This state loading as false and then at the end, we will call our show Tost Function and pass an error

message to show our user the error, if there is any.

Let's try registering, let's provide some legitimate user name, email and password.

And hit submit looks like we were redirected successfully.

Looks like.

Judging by this object within our console that it was successful, we see this JWT property in this

user object, which contains a bunch of information or email, ID, roll username, as well as stuff

like blocked and confirmed.

So, as we mentioned, we want to put the token that JWT property, the value of the JWT property within

local storage, and let's create a new utility function called set token in order to do that.

So they export consed, said Tolkan.

This will accept a value and a token key, and we'll set this by default to a token key variable.

So up at the top, we'll set that to the string JWT.

First, we're going to check if we have local storage, then we're going to set an item, a key value

pair.

We're going to set the key with Tokin Key and passan, the value we can call Jason that string Afie

to string of high that.

The string of the Jason Webb token were passing to this set token function.

So now let's call that.

Pass in response that JWT to it and make sure that we import, said Tolkan from.

Upper level and our utils folder.

So down at the very bottom.

We're going to set the disabled property on our button, so we're going to disable the button when our

request is in flight.

So when it's loading or going to make sure that the user doesn't submit the form again by setting loading

to true and that will disable the button.

So let's try this one more time.

The new user, let's say Vlad Vlad at Gmail dot com.

And password of Vlad will hit submit.

We take a look at that, but it turned grey.

We weren't able to click it again.

We take a look at our application tab.

You can see this new JWT token new key value pair within our local store.

So restoring the Jason Web token within our users local storage.

## 500 - Change Navbar Upon Sign Up.

When we sign up with a new user.

When we hit Submit, we take a look at the now bar, it doesn't change whatsoever.

When we're signed up, we're authenticated.

We still see the sign in and sign up links and we don't want that.

We want to change the NAV bar to show some different lengths for authenticated users.

So within the network component, we're going to change our status functional component called Now Bar

to unlock NAV and create a new now bar component.

And all we're going to do within this now bar function.

Is we're going to check to see whether there's a token in local storage, we're on a call, get Tolkan

and our utils folder, we're going to make sure the tokens not equal to No.

And if it's not if we do have a token for a user, we're going to show the ARNAV the now for authenticated

users to show them different links.

Otherwise, we're going to show this off now, now that we've been showing this whole time.

So create a OK now of components.

And let's just copy all of the market that we have in unoffensive and change the links accordingly.

So we can leave the title and logo the same as it is the same as it was for us.

OK, now we're going to change change the sign and link to a checkout line so authenticated users can

check out their card, will change the path, the two path to checkout, as well as the text of the

link to checkout.

And now at the bottom, we're going to create a sign out button.

So instead of a link, we're going to use a button.

So we'll bring in the button component from Gestalt.

And we're going to add it here.

We're going to give it a color of transparent so it'll have the same color as the now bar of midnight,

give it the text of sign out or make it in line button so that it doesn't take up the entire width of

the now bar and we'll make it.

Size, medium.

And now we need to.

Bring in this new function.

That we created or that we referenced, at least we're going to get Tolkan, but then are utils folder

holder, it's going to have one parameter, the token key parameter in a check to see if there's local

storage and if there is an item in local storage with.

Our key value of Tolkan Key.

And only in that case are we going to return.

An item.

With a key, a token key, and we can use Jason Pass.

With the value that we're getting back from local storage in order to convert it back to its previous

type, otherwise if that's not successful, we're just going to return.

No.

So we're going to show the on off.

Now, if that's not successful, if that operation isn't successful, forget token.

We'll make sure that we import a token from our utils holder.

We can save both of our files and now we can see are off.

Now, ever since we are logged in or signed in, I should say, and we have a token within our local

storage, as you can see.

But if we delete it with the delete button and we reload the page, we can see it goes back to our unoffensive.

So it change immediately based on the authenticated state of the user.

Let's sign up one more time, the new user, so we can see our neighbor change from our north to our

off now.

## 600 - Sign Out User.

We've created Arnav component and included this sign up button.

But how do we actually sign out a user?

We haven't created the functionality for this button to back in now bar.

We're going to change now, far from a stateless functional component to a class based component, so

say class now bar extends react to component.

We're going to include our render function and bring our return within render.

And we're going to do this so that we can make use of the ability to add functions within classes or

we're going to create a new function called Handal Sign Out.

And what we want to do within our Handelsman sign out function, which will be linked to our sign up,

is we want to clear the token, clear the card for the user and redirect home.

We want to clear the token in local storage.

And to do that in our utils folder, we're going to create a new function expert, Consed Clear Tolkan.

All this will take is our token key.

Once again, we'll check and see if there is local storage.

And we'll call the method on local storage, remove item and specify our token pass token key to it.

So that will do all the work of removing.

Betoken with the given key value, we're also going to create a clear kaat function, which will take

its respective karki.

Argument.

Check for local storage and do the exact same thing, local storage, dot, remove item.

So back in November, let's import both of those newly created functions from our utils folder, Clear

Tolkan, Clear Kaat.

You can just call those that handle sign out.

And then we want to redirect home now, this is a bit trickier.

Normally we just call this Dot Propst art history dot push and push through the route to the home route.

But if we take a look at the index, we're not exactly since we're not exactly within the switch component,

we can't redirect.

Normally it's not going to be on our props object.

So in order to put history on our props, we need to use the higher order component with Rueter.

So with Rueter, we'll wrap our export of NAV Bar.

And up at the top, we'll just grab.

With Rueter from our REACT Router Dom import.

So now we do have access to history, the history object, so we can call push to the home front with

a neighbor.

And we want to pass this Handal sign out down to our oath now so that our sign up button can actually

use it and we'll pass it in as handle sign out as the handle sign out prop.

So we'll do structure that prop.

And within our parameters.

And on the button was that unclick to handle cyno?

Save that, let's try signing out.

Open my console.

And I will.

Go to application to take a look at local storage.

You see, I have a cart key and a JWT key, and if I click on Sign Out, you can see both of them disappear

and were redirected back to the home page.

## 700 - Create Sign In Markup / Functionality.

We've got all the functionality in markup for our sign up component.

Now let's move on to sign in and what we'll do is we'll just take everything within sight updates and

copy and paste it within Sinon, replacing it with all of the previous markup that we had there.

And we'll just modify some of the values.

Just need to change the class name from sign up to sign in and change the export to sign in as well.

We're not going to have an email property within state, we're not going to have an email textfield.

We're just going to need the username and password for use to log in so we can remove where restructuring

email property from state within handle submit.

We can remove the email pass to our strappy register function and replace register with login, login

just with username and password or remove email from is form empty both within the parameters and within

the return.

And will change the dangerously set in line style background color for our son and for him to desex

a three by one as the hex code.

We'll change some of these comments from sign up to sign in.

For our form and our heading and will remove the text component underneath the heading.

And will change the heading text to welcome back, since logging in or signing in is for returning users

and we'll remove the email TextField.

So now we have all of the markup and functionality to allow users to sign into our app once they've

already signed up, once they've already registered.

So now if we take a look at our updated sign in component, can now provide a username and password

of user that's already registered and hit submit.

And now we're redirected to the home page and we're authenticated.
