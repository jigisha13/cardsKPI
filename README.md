# cardsKPI
>This plug & play KPI cards are the easiest way to visualize and demonstrate Key Performance Indicators of data. They are ready to use KPIs in Card format written in jquery. These cards can be readily placed on your Dashboard web pages. Its simple implementation details are mentioned in this document

# KPI Cards for Dashboards

![Image of Yaktocat](https://img.techpowerup.org/200819/demo-1.png)
![Image of Yaktocat](https://img.techpowerup.org/200819/demo-2.png)
### Installation
>Add the provided files: `jquery.dynamic_kpi.js` `cards.css` to your project directory
 
>Add below tags in your HTML files 
```html
<link  rel="stylesheet"  href="cards.css">
<script  type = "text/javascript"  src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script  src = "jquery.dynamic_kpi.js"  type = "text/javascript"></script>
```

### Usage
> Create a **`<div>`** in your HTML and assign wrapper id to it
```html
	<div id="wrapper"></div>
```
>Call following function on your **`<div>`** passing your data as parameter
```javascript
$(function(){
	$("#wrapper").dynamic_kpi(datum);
});
```
Thats it! 
>Supported Data Format
```javascript
var  datum = {
data: {
	Application:[{"name":"app1",count:630},{"name":"app2",count:260},{"name":"app3",count:1000},{"name":"app4",count:300},{"name":"app5",count:290},{"name":"app6",count:190}],

	Sectors: [{"name":"sec1",count:110},{"name":"sec2",count:2100},{"name":"sec3",count:190},{"name":"sec4",count:200}],

	Rules: [{"nm":"rule1",ct:440},{"nm":"rule2",ct:280},{"nm":"rule3",ct:990}],

	Tables: [{"nm":"tab1",ct:400},{"nm":"tab2",ct:180},{"nm":"tab3",ct:900}]

}
/* • You Must use the object name as 'data'
   • Pass your data as array of objects, as key value pairs
   • Keys and values can be anything, so you can change names as per your choice
*/  
```
### Styling
>Change below values for background colors, text color and font family of cards
```css
:root {
    --card1-background-from: #1c42e2;
    --card1-background-to: #65c4ff;
    --card2-background-from: #0b9967;
    --card2-background-to: #5fd43e;
    --card3-background-from: #fd8540;
    --card3-background-to: #ffcd48;

    --text-color: #FFFFFF;

    --text-font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
}
```

> Change positioning of cards
	You must change following css properties to move all cards to left or right
```css
#wrapper{
    position: absolute;
    display: flex;
    top: 5% ;
    left: 15%  ;
    width:1080px;
    height:350px;
    border-radius: 16px;
}
```
