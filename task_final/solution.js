function sendRequest(name, phone, address, goods, sum) {
    let client = name + ' ' + phone;

    let data = {client, order: {}, goods: []};

    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i += 1) {
        let item = {title: goods[i].title, count: goods[i].count}
        data.goods.push(item);
    }

    data.order.address = 'ул. ' + address.street + ', дом ' + address.house + ', ' + address.entrance + ' подъезд, ' + address.floor + ' этаж, кв. ' + address.flat;
    data.order.sum = sum;

    let jsonData = JSON.stringify({data: data});

    return jsonData;
}