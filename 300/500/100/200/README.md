# 200 - Setup React App (Routing, Navigation)

## 100 - Git Clone Repo, Install Dependencies, Scaffold React App

Now, let's download the repo that we'll use to create our project.

We'll download it by going to the URL GitHub dot com slash Friedberger slash e-commerce dash react to

scrap yard dash stripe.

They'll take us directly to the folder that will contain all of our starting files, we'll click on

the Green Kloner download button.

You can click the clipboard icon to copy the URL or are currently at it.

Also, download the report as a zip file.

We're just going to open my coat.

Ed.

And within the integrated terminal of US code.

Going to open it up and then.

Move to the folder that I want this new folder to reside in, so we'll go to my desktop pipe and get

some paste in the URL.

And once we hit, enter.

And head back to the desktop, we should be able to see that new folder, that new repo, I'll just

drag the folder and into my code editor, which will load the project.

So you can see there on the left hand side all the different files within the folder.

I'm going to come into this client folder which contains this package.

Jason file.

And we want to install all the dependencies listed on a package that Jason filed by saying NPM Installer

and PMI.

And once that's done, you notice this little one on our branch Eikon.

So we want to go back to the root.

And type in R.M. Dash RF target to remove, get some while tracking that we pulled down when we cloned

the repo.

We want to remove get.

And then we want to do some cleanup with the files that we brought in and these files were all created

using the React app to we want to get rid of it in the source folder after test that jass.

Let's get rid of logout CFG.

And within after James.

We can remove all of the mark-up.

In between the div tags, you can even remove the class name of evap and just replace that with some

text, the text app, you can remove the logo, import up at the top of your head to indicate that Gigas.

Now that we're here, we can add a new folder to our source folder called This Component's.

This is where all of our components will live.

So move in after access.

As well as just two components.

We want to make sure that app is imported from that component's app.

Once it's all done, we can save our files and we want to.

CD into the client and run the start script with NPM start, that'll start up.

Our app, our react out and see.

The development servers started and we can navigate to then our browser localhost three thousand.

And we should see our react up and see our app component with just the text of app that we put in.


## 200 - Create Components, Routing for Project

We've come the starting boat and we've got our react application up and running.

So now let's create some components within our components folder.

Begin with a Sinon component.

There's a sign up component and a checkout component.

We'll start with then sign in here up at the top, will import react from react, this will be a class

based component.

All three of these, in fact, will be class based components.

So say class Sinon extends ReachOut component will have our render and our return.

And within the return, we'll just for now provide a did with the text of sign in and we'll export.

Sinon, we can copy that and provide this as the starting mark-up for our sign up component as well,

change class to sign up or text to sign up and our expert to sign up.

We can do the same thing for Check-Out, so these three files will serve as our components for our authentication,

for sending in and signing up our users, as well as ultimately our checkout page so users can check

out their order.

Then back in, index dogs are going to import a few things so we can provide routes for each of these

individual components for import a few things from Rotterdam, we'll import browser router and call

it router.

Import switch.

And Ruth.

And then underneath our imports will create a new stateless component, which will hold all of our roots

called root.

And as the parent element, we'll have our router within it, we'll have a switch.

And then the switch will contain each of our routes, our first route will be the route route, we'll

link it to our app component and the path will be to just forward slash.

We'll copy that and paste it three more times.

The next one will be to sign in.

The past I've seen in.

Next one will be for our sign up component.

Sign up and then our check up component will be linked to the path.

Check out.

And then we want to replace app where we're rendering it with root.

So we've got our roots for each of our components, we need to make sure that we're bringing them in.

So we'll bring in.

Sinon.

From that social component slash sign in.

Just copy that.

Basically, a couple more times.

And modify that, so we're importing sign up.

And then for our checkout.

So these will be our.

Essential components that we need for our application, we'll need to provide an exact keyword to the

first right to the root root to make sure that we're not matching multiple routes, which is what will

happen with our switch component, which is what it will do is it can match multiple routes.

So in our app, try out each of these different paths of sign in, sign up and check out, make sure

that they all go to their respective place.


## 300 - Gestalt Setup and Navbar Component

Let's import this access library Gestalt in order to apply some styles to our app, so we replace index

success with Gestalt disgust that success, and we can see that some minor style changes are applied

to our app component.

We can remove indexed since we're not using it and we can remove everything within app access.

So now we have some styles as applied by the CSIS library Gestalt.

And we're going to add this Napat component within our router, we want the neighbor to exist above

each of our roots.

So within every page and we need to wrap the switch and the neighbor with this react fragment to make

sure router only contains one child.

And we'll create this now by our component within our components folder where again, we'll import react.

This will be a stateless functional component.

So we'll just return everything within parentheses.

We'll give it a div with the text of now bar and then export nav bar at the very end.

So within our imports section, we'll import now bar as well from the same directory.

This change, the end of the path.

No, we can save that, we can see above our component is our now bar and that will be present above

all of the different routes that we have within our router.

So now we can now bar.

Let's do some styling.

And we'll make use of the Gestalt Resource Component Library in order to do that, will create are now

vah with this box component, which will import.

We can give it some props.

Instead, at its height to 70 pixels, give it the color of midnight, and if we head back to our app,

you can see some styles are already applied.

Already have the appearance of a now bar.

We can give it some padding, so asset padding to one, we can give it a shape around the bottom of

the shape of this now bar with rounded bottom.

And then within the box will include all of our different links, so import.

Now, link from reactor Autodom, this will give us a special link to use within our.

Now, BA.

In each of these links will contain a two prop.

To tell it where to go when we click on the link.

So this will be to slash Sinon.

Then we want to include this tax component instead of using an H1 or in H2 will use the tax component

from the start.

And you can see currently we just have the text of Sinon as our link, but you can't really see it.

So first of all, change the size or make the size bigger and will change the color to white, so it's

visible on that dark blue background.

You can see sign invisible.

So our first link is visible.

On the other end of the now bar will include a link to our sign up component that will be directed to

sign up with the corresponding text.

So you can see now it's underneath sign in the kind of going along the wrong direction so we can make

use of flex blocks on our parent component or box component to, say, display flex and a line item

center to align the items on the cross axis.

So now they're both lined up in the middle of our now bar and we can set justify content to around or

space around, as it's usually called, and flex box.

And that will give our links some spacing around them so that they're spread out a bit.

Then within the two links, we're going to include the title and logo of our site.

So we'll have a NAV link again, this will be to just the route route to the home route so we can click

on either the title or logo and.

Go back to the home page.

We'll bring in the heroin component from Gestalt.

And this is just going to be a larger tax component for larger.

Sizes of text or headings, as the name indicates, we're all set the size to access and the color of

it to orange and we'll set the name to bruhaha will be the title of our website.

But now we want to show our logo to the left hand side of the title.

So make use of this icons folder within our public folder.

And we just want to link this logo SVG image, so we'll use the image tag, the image component, I

should say, and bring that in from the start, but still has this image component.

And we will set the source to.

That slash icons slash logo, that CFG.

To get a link to our logo, ACG, within the public folder, we want to provide an adult text.

If that cartload was to say bruhaha logo, we'll give it a natural height.

And a natural width of one basically determines the dimensions when there's no height or width set that

you can currently see.

It's a bit bigger than we want.

So we will manually set the height and width of the image and we'll do that by.

Adding a box component around the image, wrapping it in a box.

And we're going to set the height to 50 pixels and the width to 50 pixels.

So now I can see it's a much better size, much more proportionate size.

And we can also.

Arrange both the image, the logo and the title with another wrapping box component and will align them

along the same axis once again using displays at the flex and line items to center.

So now they're lined up.

Just like our sign up and sign in links will give the logo a bit of margin by giving its box a margin

of two.

Now I can see I can click on each of these links and we're directed to the corresponding component.

## 400 - Add Base CSS Rules and Apply Class to Active NavLink

We have our working Navar, but there are some small style changes that we can make, first of all,

we can remove this margin was a little bit of white space that we see at the very top of the now bar

by going into access and setting a rule for a anybody.

We want to remove all of the margin within our app with margin set to zero.

And we'll also set a background color will be a hex code of ethics F nine FC.

So this will give us a off white color, a bit of a bluish off-White color.

Then underneath that will create a rule for each of the NAV links, we'll select every link in our app

with a link and visited.

So every link, whether it's been visited previously or not, we're going to set text decoration to

none of this will do is it'll remove all of the underlines and the underlying styling.

To each of these links.

And as a third rule will add this act of class where it will set font style to italic.

Now, this is a class that we're going to put on each one of our NAV links, and our neighbor will do

that by setting the active class name to active referencing the active class.

We just created and we're going to put.

Act of class name on each of the NAB links and what this will do is it will give us an indication of

which route we're currently on and we'll make it apply this act of class when we are on a given route.

So you can see we're currently on sign up.

You can see sign up as I tell signs, but also bruhaha as italicize.

So we need to, just as in our router, provide the exact keyword on the title NAV Link so that only

when we're on the home page is our title italicized and it doesn't match multiple routes.
