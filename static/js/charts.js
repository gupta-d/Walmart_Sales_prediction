$( document ).ready(function() {
    var viz, workbook, activeSheet;
    var placeholderDiv = document.getElementById("tableauViz");
   
    var url = "https://public.tableau.com/views/RetailAnalysis_15642865711730/StoreSize_db";

    var options = {
      width: "100%",
      height: "600px",
      hideTabs: true,
      hideToolbar: true,
      onFirstInteractive: function () {
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
      }
    };
    viz = new tableau.Viz(placeholderDiv, url, options);  
   
    $(".apply_RegionFilter").click(function() {
      activeSheet.applyFilterAsync(
        "Region",
        $(this).text(),
        tableau.FilterUpdateType.REPLACE);
    });
   
    $(".selectAll_RegionFilter").click(function() {
      activeSheet.clearFilterAsync("Region");
    });
  });