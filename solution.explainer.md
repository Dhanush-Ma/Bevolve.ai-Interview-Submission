# Bevolve.ai Solution Explainer

##### Choosen Language: Javascript

**1. Bag of Words**
- Stored all the **stop words** in an array
- Split the paragraph into each word and store in an **uniqueWords** Set to remove duplicates.
- Split the paragraph into each sentences with the delimiiter **"."**
- Looping through each sentence and counting thr frequency of each **uniqueWord** in that particular sentence and storing the result in a 2D array.
- Displaying the resutlant 2D array in both **array format** and **table format**

**2. Unflatten a map**
- Extracting and looping through all keys in the given flatten map.
- Splitting the extracted key with the delimitter **"_"** to get all the nested keys.
- Looping till the last before nested keys to construct the unflatten map At the last nested key we append the actual value of the current looping key.
- Repeat this process for all keys in the map