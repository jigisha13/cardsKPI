//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
//***********************************Xoriant License****************************************//
//                                                                                          //
//====================Copyright (c) [2020] [Xoriant Solutions Pvt Ltd]======================//
//                                                                                          // 
//       Permission is hereby granted, free of charge, to any person obtaining a copy       //
//       of this software and associated documentation files (the "Software"), to deal      //
//       in the Software without restriction, including without limitation the rights       //
//       to use, copy, modify, merge, publish, distribute, sublicense, and/or sell          //
//       copies of the Software, and to permit persons to whom the Software is              //
//       furnished to do so, subject to the following conditions:                           //
//                                                                                          // 
//       The above copyright notice and this permission notice shall be included in all     //
//       copies or substantial portions of the Software.                                    //
//                                                                                          //
//       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR         //
//       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,           //
//       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE        //
//       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER             //
//       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,      //
//       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE      //
//       SOFTWARE.                                                                          //
//                                                                                          //
////////////////////////////////////////////////////////////////////////////////////////////// 


(function($){

    var defaults;
    var methods = {
        init: function(option){                  //initialization
            defaults = $.extend({
                data:null,                        //user data
                parameters: [],                    //to make generic
                headings: []
            },option);
        },

        //display cards and add option to select tag
        implementCards: function($self){
            var data = defaults.data;      
            console.log(data);                        
            var dataKey = [];
            Object.keys(data).forEach(function(key) {                   //dynamically get the keys for different data
                dataKey.push(key);
            });
            defaults.headings = dataKey;
            console.log(defaults.headings);
            var len = nos;                               //only 3 cards will be displayed
            var actdata = [], actdataKey = [];
            for(i=1;i<=len;i++){
                actdata = data[dataKey[i-1]][i-1];
                console.log(data[dataKey[i-1]][i-1]);
                actdataKey = [];                               //get keys of data to make more generic
                Object.keys(actdata).forEach(function(key){
                   actdataKey.push(key);
                });
                defaults.parameters.push(actdataKey);
            
                var d = data[dataKey[i-1]];
                                                            //for each data append div(card)
                    $self.append(`<div class="card" id="card${i}"><select class="sel" id="sel${i}"></select><text class="heading" id="heading${i}"></text></div>`);
                                                            //select tag at top
                    for(j=0;j<dataKey.length;j++){
                        $(`#sel${i}`).append(`<option value="${dataKey[j]}"> ${dataKey[j]} </option>`);
                    }
                actdata = [];
                actdataKey = [];
            }
            // $self.html("<div class='s'>dsgg<select><option>1</option><option>2</option></select></div>");
            
            defaults.parameters = [];
            for(k=1;k<=dataKey.length;k++){
            var actdata1 = data[dataKey[k-1]][0];
                console.log(data[dataKey[k-1]][0]);
                var actdataKey1 = [];                               //get keys of data to make more generic
                Object.keys(actdata1).forEach(function(key){
                   actdataKey1.push(key);
                   console.log(key);
                });
                defaults.parameters.push(actdataKey1);

                actdata1 = [];
                actdataKey1 = [];
            }
            console.log(defaults.parameters);
            methods.implementMethodTypes($self);
            
        },
        
        implementMethodTypes: function($self){
            var methodLength;
            var data = defaults.data;
            var methodtypes = methodtype;
            var keys = Object.keys(data);

            if(methodtypes.length > Object.keys(data).length)
                methodLength = Object.keys(data).length;
            else
                methodLength = methodtypes.length;
            for(i=1;i<=methodLength;i++){
                if(methodtypes[i-1].toLowerCase() == "minimum" || methodtypes[i-1].toLowerCase() == "min"){
                    methods.displayMinimum(data[keys[i-1]],i, defaults.headings[i-1], i-1);
                }else if(methodtypes[i-1].toLowerCase() == "maximum" || methodtypes[i-1].toLowerCase() == "max"){
                    methods.displayMaximum(data[keys[i-1]],i,  defaults.headings[i-1],i-1);
                }else if(methodtypes[i-1].toLowerCase() == "average" || methodtypes[i-1].toLowerCase() == "avg"){
                    console.log("avg");
                    console.log(i);
                    methods.displayAverage(data[keys[i-1]],i,  defaults.headings[i-1],i-1);
                }

            }

                // code for select tag
            $("#card1").on("change","#sel1", function(){
                console.log("change");
                var val = $(this).val();
                var index = $(this).prop('selectedIndex');
                var data = defaults.data[val];
                console.log(data);
                $("#counttext1").remove();
                $("#methodtext1").remove();
                $(".details1").remove();
                $(".br1, #hr1").remove();
                $("#heading1").empty();
                methods.displayMinimum(data,1, val, index);
            });

            $("#card2").on("change","#sel2", function(){
                console.log("change");
                var val = $(this).val();
                var index = $(this).prop('selectedIndex');
                var data = defaults.data[val];
                console.log(data);
                $("#counttext2").remove();
                $("#methodtext2").remove();
                $(".details2").remove();
                $(".br2, #hr2").remove();
                $("#heading2").empty();
                methods.displayMaximum(data,2, val, index);
            });

            $("#card3").on("change","#sel3", function(){
                console.log("change");
                var val = $(this).val();
                var index = $(this).prop('selectedIndex');
                var data = defaults.data[val];
                console.log(data);
                $("#counttext3").remove();
                $("#methodtext3").remove();
                $(".details3").remove();
                $(".br3, #hr3").remove();
                $("#heading3").empty();
                methods.displayAverage(data,3, val, index);
            });


        },

        displayMinimum: function(data,i, head, paramIndex){
            var datakeys = Object.keys(data);
            var param = defaults.parameters[paramIndex];
            console.log(defaults.parameters);
            console.log(param);
            var min = Math.min.apply(Math, data.map(function (d) {
                return d[param[1]];
            }));
            console.log(min);
            console.log(defaults.headings[i-1]);
            $(`#heading${i}`).append(`${head}`);
            $(`#card${i}`).append(`<text id="counttext1">${min}</text>`);
            $(`#card${i}`).append(`<text id="methodtext1">Minimum</text>`);
            $(`#card${i}`).append(`<br class="br1"><hr id="hr1" noshade><br class="br1">`);

            for(j in data){
                $(`#card${i}`).append(`<div class="details1"><div class="displaytext"><text id="count">${data[j][param[1]]}</text><text id="name">${data[j][param[0]].toUpperCase()}</text></div></div>`)
            }
        },

        displayMaximum: function(data, i, head, paramIndex){
            var param = defaults.parameters[paramIndex];
            console.log(param);
            console.log(paramIndex);
            var max = Math.max.apply(Math, data.map(function (d) {
                return d[param[1]];
            }));
            console.log(max);
            $(`#heading${i}`).append(`${head}`);
            $(`#card${i}`).append(`<text id="counttext2">${max}</text>`);
            $(`#card${i}`).append(`<text id="methodtext2">Maximum</text>`);
            $(`#card${i}`).append(`<br class="br2"><hr id="hr2" noshade><br class="br2">`);

            for(j in data){
                $(`#card${i}`).append(`<div class="details2"><div class="displaytext"><text id="count">${data[j][param[1]]}</text><text id="name">${data[j][param[0]].toUpperCase()}</text></div></div>`)
            }
        },

        displayAverage: function(data, i, head, paramIndex){
            var param = defaults.parameters[paramIndex];
            console.log(param);
            var avg;
            var counts = [];
            var total=0, len = Object.keys(data).length;
            for(j in data){
                total += data[j][param[1]];
            }
            avg = Math.round(total/len);
            $(`#heading${i}`).append(`${head}`);
            $(`#card${i}`).append(`<text id="counttext3">${avg}</text>`);
            $(`#card${i}`).append(`<text id="methodtext3">Average</text>`);
            $(`#card${i}`).append(`<br class="br3"><hr id="hr3" noshade><br class="br3">`);

            for(j in data){
                $(`#card${i}`).append(`<div class="details3"><div class="displaytext"><text id="count">${data[j][param[1]]}</text><text id="name">${data[j][param[0]].toUpperCase()}</text></div></div>`)
            }
        }

        
    }

    //main function
    $.fn.dynamic_kpi = function(method){
        console.log(method);
        //extend parameters to defaults variables
        methods.init(method);
        //display cards
        methods.implementCards($(this)); 
    };

})(jQuery);

