let city_name = `edmonton`;
let population=981280;
let is_capital=true;
let my_city = {
    name: `edmonton`,
    population: 982000,
    is_capital: true,
    communities:[{
        name:`camrose` , population:200 ,
    },
    {
        name:`jasper` , population:200 ,
    },
    {
        name:`killam` , population:200 ,
    },
    {
        name:`lethbridge` , population:200 ,
    },
    {
        name:`sedgewick` , population:200 ,
    },]
}
if (my_city[`is_capital`] === true){
    console.log(`city: ${my_city[`name`]}, population: ${my_city[`population`]}`)
}else{
    console.log(`not important enough`)
}


let counter=0;
while (counter < my_city[`communities`].length){
    if(my_city[`communities`][counter][`population`] >=100){
        console.log(my_city[`communities`][counter][`name`]);
    }else[
        console.log(`not important enough`)
    ]
    counter++;
}