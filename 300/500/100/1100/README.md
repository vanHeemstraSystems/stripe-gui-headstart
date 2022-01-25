# 1100 - BONUS: Send Emails with SendGrid

## 100 - Set up SendGrid. Give API Key to Strapi (Optional)

Let's take a look at how we can send emails to our users.

We'll click on the plug ins tab and our admin panel and next to the email option or click on the gear

icon.

This will take us to the settings page for our email plugin.

And here we need to configure our provider, which service we're going to be using to send emails to

our users.

So to configure this, we're going to install a new package or end our service script in our terminal

and in our back.

And we're going to install the package, satrapy email, send grid at Alpha.

Grid is going to be the email provider that will be using.

And the package we just installed allows Satrapy to work with some grid very easily.

So once that's installed, we'll start up our server again on Strappy Start and back in our settings

page, we can refresh and once we click on the providers tab, you see.

We should see the sand grit option available now.

Now, if we don't have an account with Sen. Grid, we'll set one up now we'll go to Senator Dotcom and

in the top right hand corner, we'll click on Sign Up.

And now will be asked for the plan that we want to use.

We're going to click on the free plan.

And then we'll click on Try for Free.

First, Sandra is going to ask which username we want to use our password, as well as our email address

and the free plan that we just selected is a really great option for developing and prototyping.

For as long as we have our account, sound grid will allow us to send 100 emails per month.

So it's a great option for testing or for new projects, things like that, where you don't want to

have to commit to a paid plan, although they do have pay plans.

If you are looking for something more extensive.

Then once we create our account, we're going to be asked a few questions about our company.

We'll just give it the same name as our app, our website, our role in the company, how we plan on

sending email, the number of emails and the employees in our company.

And once we get through that, we'll be taken to a page where it's going to give us some information

about how to send our first email.

So here where it says integrate using our Web API, we're going to click on START.

Then we're going to choose the Web API set up method.

And make sure that you verify your account as soon as you set it up.

We'll click on the No just option for the Web API.

There's a number of different languages we could use.

And here it will be told a number of steps on how to send email using note.

First, we're going to create an API key, so we'll provide a name to our API.

Key bruhaha is a good choice and then we'll be given our key, this cryptic string, which we'll hold

on to and then a couple of other steps and saw the package.

Send your first email.

We won't need to do any of those since we already set up the email, plug in the plug in WRP.

We'll just paste in our API key to our email settings page.

And now we need to provide a forum, email address and a reply to email address.

For now, we'll use the email address tested example, dotcom.

We'll change these out with real email addresses when we actually deploy our.

## 200 - Send Confirmation Email upon Checkout (Optional)

We set up an account with sun grid, we got an API key from them and passed it to strappy, and at the

end of our configuration for Sound Grid, we have some info on how to send our first email with the

note API and basically consists of creating a message and sending it.

Using some SAYNE function in our implementation is going to be pretty similar.

So we'll go to the server folder, then plug ins, email controllers and the email file.

Within that, we're going to be modifying this send controller and we'll head down to the line where

we're calling.

Send this longline so happy that plug ins, that email, the services that send will comment that out

and we're going to rewrite this, but you'll see that the way that we're going to send an email to the

user is going to be pretty similar to how the instructions told us, create a message or get a message

from somewhere from our client and then attempt to send it with this send function.

But we'll set up some error handling first.

And the tricky part, we're, of course, going to try to send the email to the given user, particularly

on checkout when the user checks out their order and we're going to catch any errors, pass through

the error to the catch block.

And for now, just log it.

And as I mentioned, the way that we're going to call send is pretty similar to the way that we do the

line that we commented out.

We're going to wait, satrapy that plug ins.

Email, not services, not email that sent in to that function or method.

We're going to pass through an object which is going to contain the entire message, if you're interested.

What function we're actually calling it's within this services folder, in the email file, this send

function, and this is a function that is set up, is created by the strappy san grid plugin that we

created.

It takes all the provider configuration that we provided to strappy and does the work of sending the

email based on the settings we we pass to it.

We're going to get all of the values such as to and from for a message from this options object.

And it's being sent from our react app upon checkout.

So too will be options up to a property on the options object subject will be options subject and for

now we'll have a from value of just test at exampled outcome.

Text will be options that text HTML will be options that HTML.

So it's a rather simple setup for sending our email across.

Everything is going to be on the options object we're sending over and in the cache block.

We can now return context of that request passing first note and our ER as the second argument and that

will give us any information on the client if there's a bad request, if there was something that went

wrong in sending this email.

We'll go to the check out component in our reactor and we're going to take a look at how we can actually

send off this e-mail to make a request to the controller that we just set up.

We're going to after we create an entry with our orders and our orders collection, we're going to say,

wait, satrapy, don't request it.

Also be a post request to the email route.

We're going to pass through a data object.

And on that object, we're going to have our two property that we're receiving.

And our controller, as we saw, we can restructure confirmation email address to get the two that the

user provided to the confirmation email address and put the subject we can manually set and set by default

as just order confirmation and we'll use a template literal so we can interpolate the dates or say bruhaha.

We'll give the date by passing dates.

Now to the date constructor.

So we'll know when the order was created.

We'll have a tax property that taxed property for all the text within the email will say your order

has been processed.

And we can provide some HTML as well.

For example, we could provide a set of bold tags.

And we could just tell our user.

For the time being.

Expect your order to arrive in two to three shipping days.

So now that we have that, we have the object that we're sending to our send controller will be sent

to us and Controller PON.

A user checking out.

We're going to open our app again.

We're going to try adding some items to our cart.

And then checking out will provide all of our information.

And we need to check out our shipping address, postal code.

The city the order will be sent to and then some legitimate confirmation email address, and we can

just put in a number of four twos to the credit card number and then hit submit.

We can confirm our order and we'll hit submit.

It looks like we're getting this forbidden error in our terse message, we're getting a 403 error.

You can see that we tried to send a post message to the email route, but the reason this failed was

because we didn't set up permissions for our users, for authenticated users in order to actually send

off emails.

So we'll go to the authenticated role or head down to the email setting.

And we'll click on Send the Send Option, so this will allow users to actually send off their email.

We had save.

We'll head back to our app.

Let's try this one more time, I hit submit and submit again.

And we're getting an internal server error occurred.

So we got a 403 error.

That was a forbidden area.

Now we're getting a 500 air indicating that this is a problem with our back end, not a problem with

the settings that we provided.

Or any of our code.

And that 500 air is coming from that context, not bad requests where we're sending through our air

message.

So our controller is saying, I'm having a problem with this, with sending this.

And it looks like everything that we set up is in good shape.

I think what just needs to happen is we need to just end the script and started up again with Satrapy

Start.

And once that starts up, we'll hit submit again.

And it looks like the order has been successfully submitted, so let's check to see if that email actually

was sent off by our controller.

The request was made.

When I sent the order and we'll click on Verify Immigration.

And this will allow us to insan grid check to see if the email that we sent works and it looked like

our first email was sent successfully.

Now we can take a look at email activity.

You can see on the left hand side, we have one email sent this month.

But it doesn't look like we're able to see a log of all the emails that were sent off just yet, so

I'm going to go into my email address, go into my email account and take a look to see if that the

email that was sent off actually showed up.

You can see it in the spam folder.

So we're getting our order confirmation email.

And once we set up our email address, the appropriate legitimate from email address for deployment

will be receiving our emails normally not within the spam folder, but it looks like email was sent

successfully with the order confirmation, the time that that the order was sent, as well as the e-mail

that we provided, telling the user that they can expect to have their order in two to three shipping

days.
