# <span style="color:red"><u>Background</u></span>

We intend to carry out analysis of walmart stores sales data using tableau platform and prediction of future sales using python-scikit-learn.

The dataset is taken from Kaggle competition (https://www.kaggle.com/c/walmart-recruiting-store-sales-forecasting/).
Walmart has challanged the participants to predict the weekly sales of their 45 stores during Nov'12 - July'18 period. They provided historical data for a period of Feb'10 to Nov'12 to establish a model and upload the results to get the score against actual actual sales data. The challange has a bit of added complexity due to lots of missing data for markdowns during special holiday periods.

`'Mean Absolute Error'` has been used as the performance metric to evaluate the performance.

# <span style="color:red"><u>Dataset</u></span>
<b>Training data:</b> 
Weekly sales data for period 2010-02-05 to 2012-11-01.
Sales segregated by Store ID, Department ID and Date.
Total records = 45 stores x 99 departments x 142 weeks (450k + records)

<b> Stores information:</b> 
Stores Size & Type ( A, B or C)

</b> Additional Features:<b> 
Store - the store number
Date - the week
Temperature - average temperature in the region
Fuel_Price - cost of fuel in the region
MarkDown1-5 - anonymized data related to promotional markdowns that Walmart is running. 
MarkDown data is only available after Nov’11, and is not available for all stores all the time. Any missing value is marked with an NA.
CPI - the consumer price index
Unemployment - the unemployment rate
IsHoliday - whether the week is a special holiday week

Markdowns precede prominent holidays, the four largest of which are the Super Bowl, Labor Day, Thanksgiving, and Christmas. 
The weeks including these holidays are weighted five times higher in the evaluation than non-holiday weeks.
Part of the challenge presented by this competition is modeling the effects of markdowns on these holiday weeks in the absence of complete/ideal historical data.


</b> Test Data:<b> 
All the above information except Weekly Sales which need to be predicted. The period is 39 weeks during Nov’12 – Jul13 period
  
# <span style="color:red"><u>Feature Engineering to tune model for holiday markdowns</u></span>

<b>Created New Features for :</b>
If Markdown data is available
Median MarkDowns 
Median Sales
Month
If week covers Special Holiday (Super Bowl, Labor Day, Thanksgiving, and Christmas), or preceding/after special holiday.

<b>Handling Nulls:</b>
CPI/Unemployment nulls are filled with preceding valid value (forward fill)
MarkDown Nulls filled with 0 after creating separate features for median Markdowns and missing Markdowns

  

