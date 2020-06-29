/* Love button */
let btn = document.getElementById('button1');
let classObj = {
    ori: 'small',
    small: 'medium',
    medium: 'large',
    large: 'ori'
}

btn.addEventListener('click', () => {
    btn.classList = classObj[btn.classList[0]];
});
let btn2 = document.getElementById('button2');
let classObj2 = {
    ori: 'small',
    small: 'medium',
    medium: 'large',
    large: 'ori'
}

btn2.addEventListener('click', () => {
    btn2.classList = classObj2[btn2.classList[0]];
});
let btn3 = document.getElementById('button3');
let classObj3 = {
    ori: 'small',
    small: 'medium',
    medium: 'large',
    large: 'ori'
}

btn3.addEventListener('click', () => {
    btn3.classList = classObj3[btn3.classList[0]];
});
let btn4 = document.getElementById('button4');
let classObj4 = {
    ori: 'small',
    small: 'medium',
    medium: 'large',
    large: 'ori'
}

btn4.addEventListener('click', () => {
    btn4.classList = classObj4[btn4.classList[0]];
});
let btn5 = document.getElementById('button5');
let classObj5 = {
    ori: 'small',
    small: 'medium',
    medium: 'large',
    large: 'ori'
}

btn5.addEventListener('click', () => {
    btn5.classList = classObj5[btn5.classList[0]];
});
let btn6 = document.getElementById('button6');
let classObj6 = {
    ori: 'small',
    small: 'medium',
    medium: 'large',
    large: 'ori'
}

btn6.addEventListener('click', () => {
    btn6.classList = classObj6[btn6.classList[0]];
});
let btn7 = document.getElementById('button7');
let classObj7 = {
    ori: 'small',
    small: 'medium',
    medium: 'large',
    large: 'ori'
}

btn7.addEventListener('click', () => {
    btn7.classList = classObj7[btn7.classList[0]];
});
let btn8 = document.getElementById('button8');
let classObj8 = {
    ori: 'small',
    small: 'medium',
    medium: 'large',
    large: 'ori'
}

btn8.addEventListener('click', () => {
    btn8.classList = classObj8[btn8.classList[0]];
});





if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}