# <span style="color:red"><u>Background</u></span>

We intend to carry out analysis of walmart stores sales data using tableau platform and prediction of future sales using python-scikit-learn. Complete tableau analysis as well sales prediction is available as a webpage at following link:
https://gupta-d.github.io/Walmart_Sales_prediction/

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

<b> Additional Features:</b> 
  <ul>
    <li>Store - the store number</li>
    <li>Date - the week</li>
    <li>Temperature - average temperature in the region</li>
    <li>Fuel_Price - cost of fuel in the region</li>
    <li>MarkDown1-5 - anonymized data related to promotional markdowns that Walmart is running.</li>
    <li>MarkDown data is only available after Nov’11, and is not available for all stores all the time. Any missing value is marked with an NA.</li>
    <li>CPI - the consumer price index</li>
    <li>Unemployment - the unemployment rate</li>
    <li>IsHoliday - whether the week is a special holiday week</li>
    </ul>
Markdowns precede prominent holidays, the four largest of which are the Super Bowl, Labor Day, Thanksgiving, and Christmas. 
The weeks including these holidays are weighted five times higher in the evaluation than non-holiday weeks.
Part of the challenge presented by this competition is modeling the effects of markdowns on these holiday weeks in the absence of complete/ideal historical data.


<b> Test Data:</b> 
All the above information except Weekly Sales which need to be predicted. The period is 39 weeks during Nov’12 – Jul13 period
  
# <span style="color:red"><u>Feature Engineering to tune model for holiday markdowns</u></span>

<b>Created New Features for :</b>
  <ul>
    <li>If Markdown data is available</li>
    <li>Median MarkDowns </li>
    <li>Median Sales</li>
    <li>Month</li>
    <li>If week covers Special Holiday (Super Bowl, Labor Day, Thanksgiving, and Christmas), or preceding/after special holiday.</li>
  </ul>
<b>Handling Nulls:</b>
  <ul>
    <li>CPI/Unemployment nulls are filled with preceding valid value (forward fill)</li>
    <li>MarkDown Nulls filled with 0 after creating separate features for median Markdowns and missing Markdowns</li>
  </ul>

  
# <span style="color:red"><u>Modelling with Random Forest Regressor</u></span>
<ul>
  <li> Convert categorical features to one hot encoded features using pandas</li>
  <li> Applied MinMax scaling using scikit-learn 
  <li> Tried Linear SVC, KNN & Random forest regressor to train the model. Random Forest results were better. Used Random Forest Regressor to train using training dataset using 100 trees, cross validation score achieved for mean absolute error was <1500 on train dataset. </li>
  <li> Used trained model to predict the sales for test dataset. As per kaggle submission the MAE score achieved was 3335 (dataset sales mean was ~16000). kaggle ranking was 261</li>
  <li> Future tasks: Use RNN based models to improve the score.</li>
 </ul>
  
