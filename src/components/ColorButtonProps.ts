class ColorButtonProps { //this is the color button class, which can house the color information for each color button
    public boxColor: string = '';
    public backgroundColor: string = '';
    public textColor: string = '';

    constructor(boxColor: string,backgroundColor: string,textColor: string){
        this.boxColor = boxColor;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
    }
}
//here is a list of all the buttons and their colors and classes
const clrbtn1 = new ColorButtonProps('rgb(255, 255, 255)','rgb(244,244,244)','black');       //offwhite
const clrbtn2 = new ColorButtonProps('rgb(234,210,186)','rgb(178,192,175)','black');         //green + dusty pink
const clrbtn3 = new ColorButtonProps('rgba(56,71,94,255)','rgba(200,196,197,255)','white');  //Navy Blue + Grey
const clrbtn4 = new ColorButtonProps('rgba(137,168,151,255)','rgba(228,217,199,255)','black'); //Beige/tan + sea green
const clrbtn5 = new ColorButtonProps('rgba(227,230,235,255)','rgba(236,192,155,255)','black'); //light grey + Pale orange
const clrbtn6 = new ColorButtonProps('rgba(249,249,249,255)','rgba(160,101,59,255)','black');  //light grey + brown
const clrbtn7 = new ColorButtonProps('rgba(183,172,172,255)','rgba(98,88,79,255)','white');  //Dark grey + taupe
const clrbtn8 = new ColorButtonProps('rgb(255,226,235)','rgb(154,159,179)','black');           //Light Lavender + Greyish blue

const colorMap = new Map(); //this will be the map that maps a string to an object

colorMap.set('clrbtn1',clrbtn1);
colorMap.set('clrbtn2',clrbtn2);
colorMap.set('clrbtn3',clrbtn3);
colorMap.set('clrbtn4',clrbtn4);
colorMap.set('clrbtn5',clrbtn5);
colorMap.set('clrbtn6',clrbtn6);
colorMap.set('clrbtn7',clrbtn7);
colorMap.set('clrbtn8',clrbtn8);

export default colorMap;