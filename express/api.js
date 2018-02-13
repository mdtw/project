const alibay = require('./alibay');
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.raw({ type: "*/*" }));
var counter = 0;
var passwords = {};
var userListing = {};
var userItems = {};

try {
    passwords = JSON.parse(fs.readFileSync("users.json"));
} catch (err) { console.log("No password list exist"); }
try {
    userListing = JSON.parse(fs.readFileSync("userListing.json"));
} catch (err) { console.log("No user listings list exist"); }
try {
    userItems = JSON.parse(fs.readFileSync("userItems.json"));
} catch (err) { console.log("No item list exist"); }

app.post('/signup', (req, res) => {
    console.log("signup");
    var json = JSON.parse(req.body);
    if (json.username === "") return res.send("Please enter a username");
    else if (json.password === "") return res.send("Please enter a password");
    else if (json.passwordConfirm === "") return res.send("Please confirm password");
    else if (passwords[json.username]) { return res.send("Username has already been taken"); }
    else if (json.password !== json.passwordConfirm) { return res.send("Confirmation password does not match password"); }
    else {
        passwords[json.username] = json.password;
        fs.writeFileSync("users.json", JSON.stringify(passwords));
        res.send("Signup successful");
    }
});
app.post('/login', (req, res) => {
    console.log("login");
    let json = JSON.parse(req.body);
    if (json.username === "") return res.send("Please enter your username");
    else if (json.password === "") return res.send("Please enter your password");
    else if (!passwords[json.username]) { return res.send("An account with this username does not exist"); }
    else if (passwords[json.username] !== json.password) { return res.send("Incorrect password"); }
    else if (passwords[json.username] === json.password) { res.send("Log in successful"); }
});
app.post('/newListing', (req, res) => {
    console.log("new listing");
    let json = JSON.parse(req.body);
    userListing = alibay.createListing(json.userName, json.price, json.desc);
    console.log(userListing);
    fs.writeFileSync("userListing.json", JSON.stringify(userListing));
    res.send("New listing successful");
});

app.listen(4000);

// let list = {};
//     let json = JSON.parse(req.body);
//     list["username"] = json.userName;
//     list["item name"] = json.itemName;
//     list["price"] = json.price;
//     list["description"] = json.desc;
//     userItems[json.itemID] = list;
//     fs.writeFileSync("userItems.json", JSON.stringify(userItems));
//     console.log(userItems);


// app.get('/itemBought', (req, res) => {
//     var userID = req.query.userID;
//     res.send(JSON.stringify(alibay.getItemsBought(userID)));
// });

// app.get('/listAllItems', (req, res) => {
//     res.send(JSON.stringify(items));
// });

// {
//     "User 1": {
//         "Item 1 ID": {
//             "Item Properties": {
//                 "Price": "10",
//                 "Description": "User 1, Item 1"
//             }
//         },
//         "Item 2 ID": {
//             "Item Properties": {
//                 "Price": "20",
//                 "Description": "User 1, Item 2"
//             }
//         },
//         "Item 3 ID": {
//             "Item Properties": {
//                 "Price": "30",
//                 "Description": "User 1, Item 3"
//             }
//         }
//     },
//     "User 2": {
//         "Item 1 ID": {
//             "Item Properties": {
//                 "Price": "40",
//                 "Description": "User 2, Item 1"
//             }
//         },
//         "Item 2 ID": {
//             "Item Properties": {
//                 "Price": "50",
//                 "Description": "User 2, Item 2"
//             }
//         },
//         "Item 3 ID": {
//             "Item Properties": {
//                 "Price": "60",
//                 "Description": "User 2, Item 3"
//             }
//         },
//         "Item 4 ID": {
//             "Item Properties": {
//                 "Price": "70",
//                 "Description": "User 2, Item 4"
//             }
//         },
//         "Item 5 ID": {
//             "Item Properties": {
//                 "Price": "80",
//                 "Description": "User 2, Item 5"
//             }
//         }
//     }
// }