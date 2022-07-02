<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <link href="Content/bootstrap.css" rel="stylesheet" />
    <title></title>

    <style>
        #myApp{
            display: none;
        }
    </style>
</head>
<body>

    <div id="myApp">
        <div class="row">
            <div class="col-2">
                <!--1st template-->
                <div class="form-group">
                    <label for="category">Search Category</label>

                    <select id="category" class="form-control">
                        <option value="">All</option>
                    </select>
                </div>


                <!--2nd template-->
                <div class="form-group">
                    <label for="year">Search Year</label>
                    <input id="year" class="form-control" type="range" value="" />
                    <strong id="rangeMonitor">200</strong>
                </div>

                <!--3rd template-->
                <div class="form-group">
                    <label for="sortOptions">Sort Options</label>
                    <select id="sortOptions" class="form-control">
                        <option value="yearAsc">Sort By Year Asc</option>
                        <option value="yearDesc">Sort By Year Desc</option>
                        <option value="categoryDesc">Sort By Category Desc</option>
                        <option value="caegoryAsc">Sort By Category Asc</option>
                    </select>
                </div>

            </div>
        </div>






        <!--4th template-->
        <table class="table">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Category</th>
                    <th>Laureates</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2017</td>
                    <td>Chemistry</td>
                    <td>
                        <ul>
                            <li>Hector Gatsos</li>
                        </ul>
                    </td>
                </tr>

            </tbody>

        </table>
    </div>




    <script src="Scripts/jquery-3.0.0.js"></script>
    <script>

        function GetCountry(kid) {
            var settings = {
                "url": "https://api.nobelprize.org/v1/laureate.json?id=" + kid,
                "method": "GET",
                "timeout": 0,
            };

            $.ajax(settings).done(function (response) {
                console.log(response);
                let id = "#" + kid;
                let country = response.laureates[0].bornCountry;
                $(id).attr("title", country);
            });

        }

        var settings = {
            "url": "https://api.nobelprize.org/v1/prize.json?",
            "method": "GET",
            "timeout": 0,
        };

        $.ajax(settings).done(function (response) {


            $("#myApp").show();

            let prizes = response.prizes;

            InitFiltering(prizes);

            //--- --- --- Filtering --- --- ---
            let filteredPrizes = prizes;

            // Add EventListeners on DOM objects

            $("#category").on("change", filtering);
            $("#year").on("input", filtering);
            $("#sortOptions").on("change", filtering);


            function filtering() {
                let filteredPrizes = prizes;

                // --- --- --- Filtering Per Category --- --- ---
                if ($("#category").val()) {
                    filteredPrizes = filteredPrizes.filter(x => x.category.includes($("#category").val()))
                }
                // --- --- --- Filtering Per Year --- --- ---
                if ($("#year").val()) {
                    filteredPrizes = filteredPrizes.filter(x => x.year >= $("#year").val())
                }

                //sorting
                let sortOptions = $("#sortOptions").val()
       
                     
                        
                       
                switch (sortOptions) {
                    case "YearAsc": filteredPrizes = filteredPrizes.sort((a, b) => a.year - b.year); break;
                    case "yearDesc": filteredPrizes = filteredPrizes.sort((a, b) => b.year - a.year); break;
                    case "categoryDesc": filteredPrizes = filteredPrizes.sort((a, b) => a.category < b.category ? -1 : 1); break;
                    case "caegoryAsc": filteredPrizes = filteredPrizes.sort((a, b) => b.category < a.category ? -1 : 1); break;
                    default: filteredPrizes = filteredPrizes.sort((a, b) => a.year - b.year); break;
                }

                $("table > tbody").html("");// clear all table
                filteredPrizes.forEach(AppendPrize);// add filtered table rebuild
               
            }
            





           

          
            filteredPrizes.forEach(AppendPrize);
            // Creation of template dynamically
            function AppendPrize(prize) {
                let template = `
                                <tr>
                                    <td>${prize.year}</td>
                                    <td>${prize.category}</td>
                                    <td>
                                        <ul>
                                           ${PrintData(prize)}
                                        </ul>
                                    </td>
                                </tr>
                               `

                // Creation of element based on he above mentioned template
                let ele = $(template);
                


                // Add this element on the DOM 
                $("table > tbody").append(ele);
            }



            //function AppendOptionCategory(distinctCategory) {


            //    let templa = `<option>${distinctCategory}</option>`;

            //    $("#categories").append(templa);
            //}

            // inline event listener
            // <li onmouseover="GetCountry()"></li>

           

            function PrintData(prize) {
                if (prize.laureates) {
                    return prize.laureates.map(x => `<li onmouseover="GetCountry(${x.id})" id=${x.id}>${x.firstname} ${x.surname ? x.surname : ""}</li>`).join("")
                } else {
                    return `<li>${prize.overallMotivation}</li>`
                }
            }

           

            console.log(response);



           

            function InitFiltering(prizes) {

                CreateSelectOptionForCategories();
                CreateRangeSlider();

                function CreateSelectOptionForCategories() {

                    // Create Select Option For Categories --- START
                    let categories = prizes.map(x => x.category);

                    let distinctCategories = [...new Set(categories)];
                    $("#category").append(distinctCategories.map(x => `<option>${x}</option>`))
                }

                function CreateRangeSlider() {
                    let years = prizes.map(x => x.year);
                    let min = Math.min(...years);
                    let max = Math.max(...years);

                    $("#year").attr("min", min);
                    $("#year").attr("max", max);
                    $("#year").val(min);
                    $("#rangeMonitor").text(min);

                    // rangeMonitor
                    $("#year").on("input", function () {
                        $("#rangeMonitor").text($(this).val())
                    })
                }
            }
        });

      

    </script>
</body>
</html>