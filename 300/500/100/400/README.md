# 400 - Executing Queries in GraphQL Playground

## 100 - Query Brand (here: Group) by Id in GraphQL Playground. Give Permission to All Users (Optional)

Now that we've got Grauwe integrated with our app and graphics, a playground up and running to be able

to fetch data, let's use it to fetch our one piece of brand data that we have within our app.

So back in the playground on the left hand side, let's write our first query and queries will be essential

for fetching data within our application.

We'll be using it to fetch data on the client side of our app.

So we'll write our first query by providing the query keyword in a set of curly braces and to get more

information about which queries we can execute can take a look at this schema tab on the right hand

side to see all the different functions that were automatically created for us by strapping in order

to get data in our app.

So just by the name, we'll probably be using this first query, this brand query.

If we click on it, we can see exactly how this query is going to look in order to fetch a particular

brand.

Within our app, we have the name which will specify within the curly braces and then we have a set

of parentheses where, like any JavaScript function, we have our arguments.

So we have the name of the argument and after the call and we have the data type for that argument.

So we'll write it just like it appears here.

And instead of just passing in a value to a function, the query function like we would in JavaScript.

We first need to specify the name of the argument.

As you can see, the playground is telling us we need to type in ID and then we put in a colon and provide

a value with a data type of ID and IDs will just be a string with a unique value.

So we'll use double quotes for this.

Make sure not to use single quotes.

So it will only accept a string or an idea with double quotes and get the idea will head back to content

types or grab the automatically created ID of our one brand will pass it in.

But it looks like we're getting an arcing field brand of type brand must have a selection of subfields

to fix that will add a set of curly braces.

So we've provided the function name the arguments it takes.

But this value after the call in this brand type refers to this type details area.

This shows us the object that will be able to get back when we execute this query shows all the individual

fields that we can get back from this brand object so we can specify them here within these curly braces

the ID created that it created and updated at value name description.

We'll just list all of them.

But once we get to image, we get this red squiggly line saying it must have a selection of subfields.

And if we take a look at its type, which is upload file and we click on it, we can see that this upload

file is its own type, its own complex type object type where it has its own selection of subfields,

its own properties.

So we need to specify those for a query to work properly.

We can see that we can get the ID of the image that was added when we created this brand as well as

the mind type and its URL.

So let's grab just those subfields and when we're ready to execute our query, we'll hit the play button.

We could also hit control.

Enter when we hit it looks like we're not getting any brand data back.

We have this data object for the property brand is set to now and we're getting an error message of

forbidden.

And this is because we haven't told Satrapy that we want to make a query in this way.

So we'll go to the rolls and permissions tab and we want to first go to the public role.

We want to make sure everybody that's visiting our app can fetch an individual brand.

And we can specify that within this permissions area for the brand content type, we have a bunch of

different options.

I destroy, find and find one.

But since we're getting a particular brand by its ID, we want to select find one.

We're only finding one brand.

And here on the right hand side, we have some advance settings.

We don't have to provide any settings, but we have some different options.

We can say that we only want this action to be performed for those who are authenticated or we want

to be rate limited, meaning this can only be executed a number of times in a certain period of time.

So let's set iterate limited.

We don't want people to be querying this data too often and we'll hit save.

And then we want to go to the authenticated tab and make sure that authenticated users can find an individual

brand as well.

So we'll also set advance settings to rate limited.

We'll save that.

And now we should be able to execute our query since we're technically a public role.

And when we hit the play button, we can see that we're getting all the related brand data back.

We're getting the brand by ID and we should be able to carry all of this over this query just as we've

written it over to the client to be able to get an individual brand.

## 200 - Query Multiple Brands (here: Groups) with GraphQL. Change Permissions Again.

We've taken a look at how to get individual brands out to find a brand by ID, but how do we get multiple

pieces of brand data?

How do we get all of the brands within our app and go back to our schema tab?

And we'll use this brand's query right underneath the brand query.

We click on it, we can see the type definition for it and how it should look.

We have a number of arguments sought limit start and where, but we don't have to supply any of these.

When we compare it to our brand query, we saw that we had a data type for our ID argument, which had

an exclamation point after it, meaning it was required.

But none of these individual arguments for our brands function do.

So we don't have to supply them.

All we have to do is had a set of curly braces and select which of the subfields that we want off of

the type that's being returned.

And.

We'll specify that we want the ID name and description off of each of the brand objects that will be

returned to us as an array.

Then let's go back to our brands content type than our admin panel and we'll add a new brand by the

next one in line, this Goose Island brand.

So we'll supply its name and description.

We just want to get multiple brands when we execute this query.

So you can see how it's returned to us.

We'll select the corresponding image for it and then we'll hit save when we do, we should see two entries

within our brand content type.

And so now all we have to do once we supply, say, the image subfield and we'll supply for it to subfield

of name, click on the play button.

But once again, we're getting an error message, a message of forbidden so we can't execute this query.

Once again, we have to go to Rosann permissions.

We'll click on the public tab to make sure anybody can execute this type of query.

And just as we had find one to find an individual brand, we will click on Find in order to get multiple

brands.

And we don't have to provide an advance setting, but we'll make this right limited again to limit how

many times public users can query for brands.

And we'll do the same thing for authenticated once again.

Select find.

And then have save.

Now, let's go to back to our playground.

Let's see if we can execute this with the play button and we get back an array of brands within our

data object.

And if we add a new field, a new subfield to our query, say the creator, that we hit the play button,

we can see we have the created that date added both to the first entry and Aaargh!

As well as the second entry so we can dynamically change which fields that we're creating for when we

execute this function.
