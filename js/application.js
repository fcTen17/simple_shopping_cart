const sum = (acc, val) => { return acc + val; }

const updateValues = () => {
    let subTotalArr = [];
    $('#shoppingList tr').each(function (i, ele) {
        console.log($(ele).children().first().text());
        let unitPrice = parseFloat($(ele).find('.unitPrice').text());
        console.log('unitPrice: ' + unitPrice);
        let itemQty = parseFloat($(ele).find('.quantity input').val());
        console.log('itemQty: ' + itemQty);
        let subTotal = unitPrice * itemQty;
        console.log('subTotal: ' + subTotal);
        $(ele).find('.subTotal').text(subTotal);
        subTotalArr.push(subTotal);
    });
    let granTotal = subTotalArr.reduce(sum);
    $('#total').text(granTotal);
}





$(document).ready(function () {
    updateValues();
    
    var timeout;
    $(document).on('input', '.quantity input', function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
        updateValues();
        }, 1000);
    });
    
    /* $('.quantity input').on('input', function () {
        updateValues();
    }); */

    

    $(document).on('click', '.remove', function (event) {
        $(this).closest('tr').remove();
        updateValues();
    });

    $('.addItem').on('submit', function (event) {
        event.preventDefault();
        var newItem = $(this).children('#newItem').val();
        var newUnitPrice = $(this).children('#newUnitPrice').val();
        console.log(newItem, newUnitPrice);

        $('#shoppingList').append('<tr>' +
        '<td class="item">' + newItem + '</td>' +
        '<td class="unitPrice">' + newUnitPrice + '</td>' +
        '<td class="quantity"><input type="number" value="0"/></td>' +
        '<td class="remove"><button>X</button></td>' +
        '<td class="subTotal"></td>');

      });
    
   
    


});



