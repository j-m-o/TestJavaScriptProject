
 function mablJavaScriptStep(mablInputs, callback) {

  //Retrieve the currently available variables
  let APIResponse = mablInputs.variables.user.APIResponse.json;
  let randomCategoryIndex = mablInputs.variables.user.randomCategoryIndex;

  //Determine the number of makes in this category, and randomly select one
  let makeCount = APIResponse[randomCategoryIndex].Makes.length;
  let randomMakeIndex = Math.floor(Math.random() * makeCount);

  //If the category is empty, throw the corresponding error
  if (typeof(APIResponse[randomCategoryIndex].Makes[randomMakeIndex]) == "undefined") {
    throw Error("The category is empty");
  }

  //Determine the number of models available, and randomly select one
  let modelCount = APIResponse[randomCategoryIndex].Makes[randomMakeIndex].Models.length;
  let randomModelIndex = Math.floor(Math.random() * modelCount);

  //Find the ID for the model
  let modelID = APIResponse[randomCategoryIndex].Makes[randomMakeIndex].Models[randomModelIndex].ID;

  callback(modelID);
}

  function mablJavaScriptStep(mablInputs, callback) {
  
  //Retrieve the currently available variables
  let APIResponse = mablInputs.variables.user.APIResponse.json;
  let randomCategoryIndex = mablInputs.variables.user.randomCategoryIndex;

  //Find the category ID based on the random index
  let randomCategoryID = APIResponse[randomCategoryIndex].ID;

  callback(randomCategoryID);
}

function mablJavaScriptStep(mablInputs, callback) {

  //Retrieve the json body of the APIResponse variable
  let Categories = mablInputs.variables.user.Categories.json;

  //Determine the number of categories available
  let categoryCount = Object.keys(Categories).length;

  //Randomly select one of these categories
  let randomCategoriesIndex = Math.floor(Math.random() * categoryCount);

  callback(randomCategoriesIndex);
}

  function mablJavaScriptStep(mablInputs, callback) {

  //Retrieve the json body of the APIResponse variable
  let APIResponse = mablInputs.variables.user.APIResponse.json;

  //Determine the number of categories available
  let categoryCount = Object.keys(APIResponse).length;

  //Randomly select one of these categories
  let randomCategoryIndex = Math.floor(Math.random() * categoryCount);

  callback(randomCategoryIndex);
}