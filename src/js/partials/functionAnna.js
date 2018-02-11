let contentDiv = $('.content .row');

Object.keys(products).map(category => {
    // заходим в категории
    // console.log(Object.keys(products[category]));

    contentDiv.append('<div class="divCategories col-md-12"> <h3>'+category+'</h3></div>');

    Object.keys(products[category]).map(company => {
        // заходим в компании
        //console.log(products[category][company]);

        contentDiv.append('<div class="divCompany col-md-12">'+company+'</div>');


        products[category][company].items.map(item => {
            // заходим в товары
            // console.log(item);

            contentDiv.append('<div class="divItem col-md-3">'+'<img height="200px" src="'
                +item.src+'">'+'<p>'+item.name+'</p><br/>'+'$'+item.price+'</div>');
            let divItem = $('.divItem');

        });
    });
});