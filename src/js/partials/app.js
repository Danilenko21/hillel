$(document).ready(function () {

    Object.keys(products).map(category => {
        // заходим в категории
        //console.log(Object.keys(products[category]));

        Object.keys(products[category]).map(company => {
            // заходим в компании
            //console.log(products[category][company]);

            products[category][company].items.map(item => {
                // заходи в товары

                console.log(item);
            });
        });
    });

});


