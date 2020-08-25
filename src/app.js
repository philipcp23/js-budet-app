/*
    JavaScript Budget App
*/


// BUDGET CONTROLLER
let budgetController = (function() {


})();


// UI CONTROLLER
let UIController = (function() {

    let DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // will be inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },

        getDOMstrings: function() {
            return DOMStrings;
        }
    };

})();



// GLOBAL APP CONTROLLER
let appController = (function(budgetCtrl, UICtrl) {

    let DOM = UICtrl.getDOMstrings();

    let ctrlAddItem = function() {
        // 1. get the field input data
        let input = UICtrl.getInput();
        console.log(input);
        // 2. add the item to the budget controller
        // 3. Add the item to the UI
        // 4. calculate the budget
        // 5. display the budget on the UI
    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);


