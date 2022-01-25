# 300 - Create Server with Strapi, Add GraphQL to our API

## 100 - Configuring MongoDB Atlas with Strapi

As an update to this course, if you go to my Web dotcom and click on Sign Up, you'll be told that

Mlambo is now close to new sign ups and instead will need to use the service Mongo DB Atlas, which

you can get started with here by filling out this form.

Or you can go to Mongo DB dot com slash Cloud Atlas and click on Try Free.

You'll fill out your information and then click create Mongo DB Atlus account where you'll agree to

the terms of service and select.

Create a Mongo DB Atlus account.

From there you'll be taken to a page where you can build your first cluster.

The first step will be to choose your cloud provider and region will select RWC and then choose a free

tier in an area that's closest to us.

Make sure it has the tax free tier available next to the option that you select.

Then, after selecting your cluster region, you'll choose your cluster tier.

Now make sure this is the M0 tier.

It's a shared tier with 512 megabytes of storage.

And once that's selected, you should see free down here at the bottom to make sure that we're not charged

for this development database.

And then we'll go to additional settings.

We'll make sure that we have Mongo DB 4.0 selected and then we can name our cluster, feel free to name

your cluster, whatever you like.

I'm just going to leave mine at the default cluster zero.

Then I'll select once we make sure that this is entirely free.

Create cluster.

Then our cluster will be created, which will take around seven to 10 minutes, and once we see that

our cluster has been created and you can see here on the left, we have this little checklist, we can

create our first database user.

So click on this option.

And we'll head to security and then add a new user, and this will be for Atlas admin, where will provide

a username and password for this admin, then you'll select ADD user.

And once your admin user has been added, you'll whitelist your IP address.

You'll go to IP whitelist, add IP address and then select add current IP address.

Now, this is important to connect to our database in development and also in production.

When we deploy our application, you may need to select allow access from everywhere.

So when deploying your app, remember this particular step, if you're having trouble connecting to

your Atlas database for now will hit confirm.

And finally, the last step is to connect to our cluster from our application.

So we'll go to Cluster's Overview hit Connect and we'll select Connect Your Application.

This middle option here, not connect with the Mongo's shell will leave the driver version at No Jass

Version 3.0 or later.

And then we'll add our connection string.

We can copy our connection string by clicking on the copy button.

Then we'll head back to our project.

And first of all, if you're in the client folder and your development script is running, you'll want

to end it with the command control.

See, and once you've done that, we want to go up a level into the root of our project.

We can do that by setting up a level like so.

And next we want to install the strappy cli.

We can do that with the command and PMI, Dashty Strappy and we're going to get the alpha version of

strappy so we can say at Alpha.

And when it comes to installing strappy, we want to install a very specific version of the strappy

Seelie and that's to ensure that the steps that you see that are given to you by the KELLYE to set up

the server are the same for me as they are for you.

So instead of running this command with Strappy at Alpha, we want to bring in a very specific version

of strappy with the version at three point zero point zero, Dash Alpha DOT fourteen.

And we want to prepend this command with pseudo to run it as a super user.

And you might need to provide your password in order for this to run correctly.

So now we can run this, provide our password and now we see that our very specific version of Strappy

Version three has been brought in for us.

And once you see that the strappy claw has been installed, we can use the strappy new command to create

a new strappy project and to create our strappy server.

We can run strappy new server.

So it's going to put our server code in a folder called Server Will Run This.

And then we need to choose our insulation type will choose custom, because we're setting up a custom

database, our main database will be Mongo DB So we'll go down to that for our database name.

We can choose whatever name that we like.

I'm going to leave mine at server for the host.

We can grab that from our connection string in particular.

It's the value after at.

So in my case it's cluster zero dash this random string Mongo DB dot net.

So it should end in dot mongo db dot net Sedin.

It's going to ask if we're using an SUV connection.

We'll say true since we're using an SUV string then we can provide our port.

But note that it's going to be ignored or ignored if we enable Salvy so we can just hit enter then we

need to provide our Atlas admin username.

As well as the password that we supplied to that user then for authentication database, we just want

to hit enter and then for enable SSL connection, we want to say true.

Then after that, our database should be successfully connected.

We should be connected to Mongo DB, at least from our server, and then it's going to spin up our new

satrapy application.

So once that's done and that should usually take a couple of minutes, we'll move on to the next step.

## 200 - Brief Look at Strapi CLI (Optional)

We just use the strapping you command in order to create a node API within the route of our project.

And since it's a content management system we'll have a user interface that will allow us to very easily

make use of this API to interact with our data.

We ran strapping to and we provided the product name as server so we have our server app now.

But using these trappy Seelye we have access to a number of different commands in order to do a lot

of useful things for us in creating projects or run trappy help to take a quick look at some of these

different commands we can see a command on the left hand side and a brief description of it on the right

let's take a look at some of the most frequently used commands was trappy.

You can get the version of Tapio a strappy version and see that globally installed version of trappy

package we can install a plug in using Satrapi install We can install plug such as e-mail or Gap Cuil.

These are just add ons to our API and we can use the uninstall command to remove anything any plugin

that we might have that we want to get rid of.

You can also very quickly create an API without a user interface using the generate API command

trappy really makes it easy for anybody who's doing development especially trying maybe to prototype

a project gives him a lot of options when it comes to creating an API to easily manage their data without

having to worry too much about getting things set up.

So happy allows us to do things very quickly.

We can take a full look at all the different commands available to us at this trappy saliva going to

their documentation Jappy Daddario sashed documentation we can see some commands that we touched on

the strap too.

There's also some additional flags that we can include with each of these commands where we can generate

an API but we can also customize that API using this generate controller command and generate model

command service.

Anything that we'd want essentially within an API where we need to very quickly create something to

create a service for application trappy makes it available and makes generally a development a lot easier

and a lot more enjoyable.

## 300 - Start the Strapi Server, Create Root Admin for CMS

Now, let's start up our newly created application by following the directions and the command line

where we'll see into the server directory that was just created and we'll start our application with

the command satrapy start.

So this will spin up our node server, our note API.

And you can see in the terminal we have a bunch of logging.

This is a lot of useful information that will make use of in developing our app and see the time, how

long it took to launch the script, the environment.

We're currently in the version of strappy.

We also have information like admin panel and server.

We can see the server that we're currently on, localhost 13 37, and we have this admin panel link.

And so let's just copy that.

And we'll open a new browser tab.

And we'll navigate to their.

Localhost 13 37 slash Admon.

And to finish setting up our satrapy app, we're going to provide a route admin, we're going to provide

some credentials that will represent us, the administrator for our app to provide a username and password

and an email.

And so we'll have now.

A new user that will have administrator rights.

Where will be able to change different things in our application to manage things?

So when we provide all of our credentials and we click on Ready to Start?

We'll be taken to our home page, the home page of our admin panel.

I can see a bunch of different options available to us, which will touch on very soon.

If we go back to our MAP database and we go to the collections tab or refresh, we can see a bunch of

collections were added to the database.

So all of this was added by satrapy.

And you can see a bunch of stuff related to users.

So users permissions, different rolls of users and all these represent the different roles that users

that sign up to our app will have.

And this is also something that we'll touch on in the following section.

## 400 - Overview of Strapi Admin Panel (Optional)

Now, let's take a look at our admin panel.

We saw this very briefly in the last video, but this admin panel will be very important for us, will

be using this as a user interface to manage all the data within our app and to control what our users

can see and what they can do when they visit our app.

So take an in-depth look at this first by going up to the top left hand corner and click on our users

tab and this content types area so we can see this table, which includes the one user that we have

within our app at the moment, our route admin that we use to set up our app.

And it has a number of different fields and ID, user name, email, password.

And here is where any user that signs up to our app will be included within this table and we can manage

them manually.

We can edit their fields and delete it if we need them.

Taking a look at the content manager plugin in this general area up at the top.

We have some control over searching this in our app.

We can enable it or disable it, whether it has any filters and a number of entries that are returned

to us for searching.

If we take a look at this attributes Fields area, you can see that we have some really fine grained

control over all of the different fields within our user content type, since it's the only content

type that we have at the moment.

So we have control over the labels, the descriptions for the label, whether it's editable, the relation

between a given field and others.

We won't touch on this too much.

We'll be working with content types mainly through a different plugin, which is right underneath the

content manager called Content Type Builder.

So this is where we'll create new content types, new pieces of data to our app.

So on top of users will create things like brands will create an order content type where you can specify

exactly the different fields within our data, within a piece of data and their corresponding data types.

We have a philes upload plug in any images that we add to our app will be included here, will be automatically

uploaded, and we can also do files upload from the client if we like.

We have a rolls and permissions plugin.

Now, this is a really essential plug in, it's going to allow us to control the different roles of

user within our application.

And you can see we have an administrative role and authentication role and a public role.

And these correspond to that collection that we saw in the last section, this user permissions role

collection.

You can see that we have a collection that's dedicated to each of the the roles that we have in our

app.

So Satrapy has done some work in setting up.

Our database to correspond to what we have in our roles and permissions plugin.

We also have this provider's plugin, which allows us to authenticate users using a provider such as

Facebook, Google, Microsoft, etc., We have an email templates area where we can create a stock template

for an email that we send off to users.

We also have this advanced settings tab where we can choose, for example, if we want to make users

confirm their email upon signing up, as well as general things like even enabling sign ups or not.

Then looking at the plugins tab under general, we can see all the plugins that we have installed now,

these are the add ons that allow us to manage a number of different things within our app and give us

additional features.

So if we look at, for example, is emails plug in, we can see a bunch of different settings and we

can manage each of these plug ins with this marketplace tab so we can see what's installed, see what

we need to install.

We can see.

What's compatible with our application and so we'll be using this to install plug ins and then we have

this last configuration tab, which gives us some general control over the name, the description of

our app, the languages we want to use in our app.

So English is the default language, but we can add new languages if we like.

We can also control the environments, we can control the development environment.

We can choose which database we want to use for development.

And we can also use a different database for production or for staging.

So we have a lot of different control over that, as well as the requests that we make within our app,

we can choose how these requests are logged within our terminal so we can get logging information.

And I can see a number of them here, we get a bunch of these debug get logs since we're moving around

and our user interface, so it gives us a lot of useful information about the different routes that

we're on to change different user settings.

In the response tab, we get to choose things like whether it's gipped for development and production,

things that will improve production, will improve performance, and we can configure some things on

the server side as well.

We can configure the host as well as the port so we can change it from 13 thirty seven.

And we can also change the language that we use within our user interface if we want to, to switch

to a different language when we're working with our admin panel.

So these are just a this is just a brief intro into some of the settings that we have access over with

the admin panel, but we'll cover a lot more within the rest of the course.

## 500 - Add Brand (here: Group) Content Type with Content Type Builder. Add First Brand (here: Group).

Let's add some data to our app, and this is on top of the users data that we already have, so to add

a new type of data.

We're going to go to the plug in content type builder.

We're going to click on add content type.

So each new type of data is known as a content type within satrapy.

And to describe this new type of data.

We first need to give it a name.

We're going to have some brands data.

So we're going to give it the name of brand and also give it some additional properties like a description

and a collection name.

But all that's really essential to add a content type, a new type of data is to give it a name and

then we can just hit save.

So now we have this brand content type, but we need to add some fields to it.

We need to give it some properties, whatever brand data is going to have.

So click on ADD New Field and we see this list of different data types.

So to add a new field first we need to tell Satrapy a given field data type and we'll choose String

as the first one.

This first option that's going to ask us the name of the field, so I'm going to give it the name of

name.

This means that every brand piece of data is going to have a name property with a type of string.

If we click on advanced settings, we can add some validation to this field, make sure that every piece

of data, every brand data has this name field by clicking it, by clicking the required field option.

And we can see there in the background we click on ADD New Field.

It was added to our brand type.

Let's add a new field with the type of text, and this is going to be our description field, so we'll

give it the name of description, every brand is going to have a description.

And then advanced settings, we want to check the box displays a busy week.

So give us a wizzy ed that will allow us to control how our description's formatted when we create it

within our admin panel.

Then we'll click on ADD New Field again.

Also going to give it an image.

So click on the media data type.

We'll give it the name of image.

You can see we can allow multiple image files and just like with the string in description, we can

make it required or unique.

I will click on Add New Field again, and once we're done, we can click on the X on the top right hand

corner and see our three new fields.

And very was very important to note is that we need to save it.

When we're done creating all the different fields, then our server will restart and see in our terminal

that the server is restarting.

So it will restart our app and load this new content type.

And we'll tell us when it's done.

So now we have this new content type and it's represented here in our content types area, and if we

click on that, we can see this new table, this brand table, and we have the ability to add a new

brand by clicking on add new brand.

And here we can add a brand piece of data.

And in order to do that, we will go to our.

Data that we pulled in when we downloaded the repo, we have our brands that Jason file and we have

some related brands data, we have some names and descriptions.

So let's add that first name as well as its corresponding description.

Then the same JSON object grab that we have, our name and description will peso's both in their.

I can also, since we have a busy week, we can do stuff like italicized words gives us the ability

to edit stuff and we click on switch to preview.

We can see how that will look, how the styles we applied will look within our app.

Then if we head down and see our image selection.

Can add a new file.

You can click on Browse in order to select a given image that we have within our repo and that's located,

we go with in our folder, go to Brandes.

Images can click on the the first one for the Bear Paw River brand.

You can see that's loaded here within this image preview can also remove this, if we want, by clicking

on the remove button and then we can go up to the top.

It's safe.

And we have our first piece of data saved within our app with the new brand content type.

## 600 - Install GraphQL Plugin. Visit GraphQL Playground

Now, since our first and arguably most important plug in by going to the marketplace tab and once we're

there, we'll navigate to graphical.

Once we click on this download button graph, all will automatically be integrated with our app and

will be able to make use of its features to fetch data.

So it will click on download.

I can see that that is in progress.

What's taking place is that grackles being brought in by strappy and all the dependencies are being

installed and seeing within our terminals, installing graphical.

And then once everything's installed, the server is going to restart.

And back in our browser, we can refresh our admin panel.

And within the graphical tab, we can see that it's already installed.

But to confirm that install was successful, we can go to.

Localhost 13 37 slash playground.

And this will open up a new application called the Graphical Playground, which will allow us to work

with and test grad school and ultimately be able to use graphical in order to make requests for data

in our REACT app.
