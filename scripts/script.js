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

$(function(){
    $("#wrapper").dynamic_kpi(datum);
});

var methodtype= ["min","max","avg"];  //define type of card
var nos = 3;                          //define number of cards you want to display 
var datum = {
    data: {Application:[{"name":"app1",count:630},{"name":"app2",count:260},{"name":"app3",count:1000},{"name":"app4",count:300},{"name":"app5",count:290},{"name":"app6",count:190}],
            Sectors: [{"name":"sec1",count:110},{"name":"sec2",count:2100},{"name":"sec3",count:190},{"name":"sec4",count:200}],
            Rules: [{"nm":"rule1",ct:440},{"nm":"rule2",ct:280},{"nm":"rule3",ct:990}],
            Tables: [{"nm":"tab1",ct:400},{"nm":"tab2",ct:180},{"nm":"tab3",ct:900}]
}
}
