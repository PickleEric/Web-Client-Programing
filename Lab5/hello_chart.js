
var canvas = document.getElementById('bridge-chart')
console.log(canvas)
var ctx = canvas.getContext('2d')
let bridges = [
    {'bridgeName': 'Varrazano-Narrows Bridge', 'cityState': 'New York, NY', 'span': '1298.4', 'coordinates': [40.6066, -74.0447] },
    {'bridgeName': 'Golden Gate Bridge', 'cityState': 'San Francisco and Marin, CA', 'span': '1280.2', 'coordinates': [37.8199, -122.4783] },
    {'bridgeName': 'Mackinac Bridge,', 'cityState': 'Mackinaw and St. Ignace, MI', 'span': '1158', 'coordinates': [45.8174, -84.7278] },
    {'bridgeName': 'George Washington Bridge', 'cityState': 'New York, NY and New Jersey, NJ', 'span': '1067 ', 'coordinates': [40.8517, -73.9527] },
    {'bridgeName': 'Tacoma Narrows Bridge', 'cityState':'Tacoma and Kitsap, WA', 'span': '853.44', 'coordinates': [47.269, -122.5517]},
    ] // The array that has our stored bridge value
//let addName =(function(){
    //let text;
    //let name =document.getElementById('bridgeName').value;
    //for(let x = 0; x < bridges.length; x++ ){
       // text += name[x];
    //}
     //return function() {return text;}   
//})

chart = new Chart(ctx, {// creates our chart to map everything out
    type: 'bar',// type of graph that is shown
    data: {
        labels: [bridges[0].bridgeName, bridges[1].bridgeName, bridges[2].bridgeName, bridges[3].bridgeName, bridges[4].bridgeName],//Labels for our 
        datasets: [{
            label: 'Brige Spans',
            data: [bridges[0].span, bridges[1].span, bridges[2].span, bridges[3].span, bridges[4].span],// calls our indexed value for the bars in the chart
            backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple']// colors of the bars in the chart
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})