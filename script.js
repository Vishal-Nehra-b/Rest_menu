// Get references to the DOM elements where food items and bill details will be displayed
let foodContainer = document.querySelector('.food-container'); // The container where food items will be displayed
let billItemsList = document.getElementById('bill-items'); // The list where selected items in the bill will appear
let totalPriceElement = document.getElementById('total-price'); // The element displaying the total price
// Array of food items that contain information like name, image, price, type, and description
const fooditem = [
    {
        FoodName: " gobi paratha",
        foodimg: 'images/b1.jpg',
        price: 150, 
        type: "breakFast",
        des: "Cheese paratha is a delicious flatbread stuffed with melted cheese, perfect for breakfast."
    },
    {
        FoodName: "Aloo Paratha",
        foodimg: 'images/b2.jpg',
        price: 120,
        type: "breakFast",
        des: "Aloo Paratha is a popular stuffed flatbread made with spiced mashed potatoes."
    },
    {
        FoodName: "Egg Paratha",
        foodimg: 'images/b3.jpg',
        price: 120,
        type: "breakFast",
        des: "Egg Paratha is a healthy and tasty flatbread wrapped with scrambled eggs, ideal for breakfast."
    },
    {
        FoodName: "Daal Chawal",
        foodimg: 'images/l1.jpg',
        price: 250,
        type: "Lunch",
        des: "Daal Chawal is a simple yet satisfying dish of lentils and rice, a staple in Pakistan."
    },
    {
        FoodName: "Palak Paneer",
        foodimg: 'images/l2.jpg',
        price: 300,
        type: "Lunch",
        des: "Palak Paneer is a creamy spinach curry with cubes of cottage cheese, popular in Indian cuisine."
    },
    {
        FoodName: "Aloo Gobi",
        foodimg: 'images/l3.jpg',
        price: 180,
        type: "Lunch",
        des: "Aloo Gobi is a savory dish made with potatoes and cauliflower, spiced with aromatic flavors."
    },
    {
        FoodName: "Aloo Gosht",
        foodimg: 'images/l4.jpg',
        price: 300,
        type: "Lunch",
        des: "Aloo Gosht is a rich and flavorful stew of potatoes and mutton, cooked in a thick gravy."
    },
    {
        FoodName: "Banana Shakes",
        foodimg: 'images/s1.jpg',
        price: 100,
        type: "Shakes",
        des: "Banana shakes are a creamy, refreshing drink made with ripe bananas and milk."
    },
    {
        FoodName: "Mango Shakes",
        foodimg: 'images/s2.jpg',
        price: 120,
        type: "Shakes",
        des: "Mango shakes are a sweet and refreshing drink made with ripe mangoes and milk."
    },
    {
        FoodName: "Biryani",
        foodimg: 'images/d1.jpg',
        price: 400,
        type: "Dinner",
        des: "Biryani is a fragrant rice dish made with spices, meat, and vegetables, a South Asian classic."
    },
    {
        FoodName: "Korma",
        foodimg: 'images/d2.jpg',
        price: 350,
        type: "Dinner",
        des: "Korma is a creamy, spiced curry with meat, perfect for a rich, flavorful dinner."
    },
    
];

// Array to store the selected items from the menu
let selectedItems = []; 

// Function to update the bill by adding selected items and calculating the total price
const updateBill = () => {
    // Clear the bill list before updating
    billItemsList.innerHTML = '';
    let total = 0;

    // Loop through the selected items and add them to the bill list
    selectedItems.forEach(item => {
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        // Display the item name and price in the bill list
        li.innerHTML = `${item.FoodName} - RS ${item.price}`;
        billItemsList.appendChild(li);
        total += item.price; // Calculate the total price
    });

    // Update the total price element with the calculated total
    totalPriceElement.textContent = `RS ${total}`;
}; 
// Function to render food items dynamically on the page
const renderFoodItems = () => {
    // Clear the food container before rendering new items
    foodContainer.innerHTML = '';

    // Loop through the food items and create elements for each
    fooditem.forEach(item => {
        const foodBox = document.createElement('div');
        foodBox.classList.add('col-md-4', 'foodbox'); // Add classes to style the food item box

        // HTML structure for each food item, including image, name, description, price, and button to add to the bill
        foodBox.innerHTML = `
            <div class="content">
                <div class="c-image">
                    <img src="${item.foodimg}" alt="${item.FoodName}" class="img-fluid"> <!-- Display food image -->
                </div>
                <div class="t-n-p">
                    <div class="header">
                        <div class="title">${item.FoodName}</div> <!-- Display food name -->
                        <div class="price">RS ${item.price}</div> <!-- Display food price -->
                    </div>
                    <div class="des">
                        <p>${item.des}</p> <!-- Display food description -->
                    </div>
                    <button class="btn btn-primary" onclick="addToBill(${item.price}, '${item.FoodName}')">Add to Bill</button> <!-- Button to add item to the bill -->
                </div>
            </div>
        `;
        // Append the created food item box to the food container
        foodContainer.appendChild(foodBox);
    });
};

// Function to add a selected food item to the bill
const addToBill = (price, name) => {
    // Push the selected item with its price and name into the selectedItems array
    selectedItems.push({ price, FoodName: name });
    // Call updateBill to update the displayed bill with the selected items
    updateBill();
};

// Initial call to render all food items on page load
renderFoodItems();
