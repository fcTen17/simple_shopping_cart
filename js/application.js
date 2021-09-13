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
    let childrenNum = $('#shoppingList').children()
    console.log('childrenNum: ' + childrenNum.length);
    let granTotal;
    granTotal = subTotalArr.reduce(sum, 0); 
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
    
    $(document).on('click', '.remove', function () {
        $(this).closest('tr').remove();
        updateValues();       
    });
 
    $('.newItemForm').on('submit', function (event) {
        event.preventDefault();
        var newItem = $(this).children('#newItem').val();
        var newUnitPrice = $(this).children('#newUnitPrice').val();
        console.log(newItem, newUnitPrice);

        $('#shoppingList').append('<tr>' +
        '<td class="item">' + newItem + '</td>' +
        '<td >$<span class="unitPrice">'+ newUnitPrice +'</span>.00</td>'+
        '<td class="quantity"><input class="quantity-box" type="number" value="0"/></td>' +
        '<td class="remove"><input type="button" class="btn btn-danger" value="Remove"></td>' +
        '<td >$<span class="subTotal"></span>.00</td>');

        updateValues();
    });
}); 





