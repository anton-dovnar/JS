const vegetarianMenu = (menu) => {
    const menuNode = document.querySelector('#menu');
    const vegetarianOptions = menu.filter((option) => {
        return option.isVegetarian === true;
    });

    vegetarianOptions.forEach((option) => {
        const dish = document.createElement('li');
        dish.textContent = option.name;
        menuNode.appendChild(dish);
    });
};

const menu = [
    {
        name: 'Chicken parmesan',
        isVegetarian: false,
    },
    {
        name: 'Stuffed shells',
        isVegetarian: true,
    },
    {
        name: 'Tiramisu',
        isVegetarian: true,
    },
];

vegetarianMenu(menu);
