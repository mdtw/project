const assert = require('assert');

let itemsBought = {} // map that keeps track of all the items a user has bought

/*
Before implementing the login functionality, use this function to generate a new UserID every time.
*/
function genUserID() {
    return Math.floor(Math.random() * 100000000);
}

function putItemsBought(userID, value) {
    itemsBought[userID] = value;
}

function getItemsBought(userID) {
    var ret = itemsBought[userID];
    if(ret == undefined) {
        return null;
    }
    return ret;
}


/*
initializeUserIfNeeded adds the UserID to our database unless it's already there
parameter: [userID] the UserID of the user.
returns: undefined
*/
function initializeUserIfNeeded(userID) {
    var items = getItemsBought[userID];
    if(items == undefined) {
        putItemsBought(userID, []);
    }
}

/*
allItemsBought returns the IDs of all the items bought by a buyer
    parameter: [buyerID] The ID of the buyer
    returns: an array of listing IDs
*/
function allItemsBought(buyerID) {
    return itemsBought[buyerID];    
}

/* 
createListing adds a new listing to our global state.
This function is incomplete. You need to complete it.
    parameters: 
      [sellerID] The ID of the seller
      [price] The price of the item
      [itemDescription] A itemDescription describing the item
    returns: The ID of the new listing
*/
function createListing(sellerID, price, itemDescription) {
    
}

/* 
getItemDescription returns the description of a listing
    parameter: [listingID] The ID of the listing
    returns: An object containing the price and itemDescription properties.
*/
function getItemDescription(listingID) {
    
}

/* 
buy changes the global state.
Another buyer will not be able to purchase that listing
The listing will no longer appear in search results
The buyer will see the listing in his history of purchases
The seller will see the listing in his history of items sold
    parameters: 
     [buyerID] The ID of buyer
     [sellerID] The ID of seller
     [listingID] The ID of listing
    returns: undefined
*/
function buy(buyerID, sellerID, listingID) {
    
}


/* 
allItemsSold returns the IDs of all the items sold by a seller
    parameter: [sellerID] The ID of the seller
    returns: an array of listing IDs
*/
function allItemsSold(sellerID) {
    
}

/*
allListings returns the IDs of all the listings currently on the market
Once an item is sold, it will not be returned by allListings
    returns: an array of listing IDs
*/
function allListings() {
    
}

/*
searchForListings returns the IDs of all the listings currently on the market
Once an item is sold, it will not be returned by searchForListings
    parameter: [searchTerm] The search string matching listing descriptions
    returns: an array of listing IDs
*/
function searchForListings(searchTerm) {
    
}

module.exports = {
    genUserID, // This is just a shorthand. It's the same as genUserID: genUserID. 
    initializeUserIfNeeded,
    putItemsBought,
    getItemsBought
    // Add all the other functions that need to be exported
}