const foodTruckFestival = (menus) => {
    const flatMenus = menus.flat();

    const combinedMenu = new Set();
    flatMenus.forEach((item) => {
        combinedMenu.add(item);
    });

    console.log(combinedMenu);
};

foodTruckFestival([['Tacos', 'Burgers'], ['Pizza'], ['Burgers', 'Fries']]);
