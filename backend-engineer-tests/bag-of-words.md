# Create a bog of words with frequency counter

The bag-of-words (BOW) model is a model of text which uses a representation of text that is based on an unordered collection (or "bag") of words.

Example:

```bash
1 John likes to watch movies. Mary likes movies too.
2 Mary also likes to watch football games.

```

Based on these two text documents, a list is constructed as follows for each document:

```python
["John","likes","to","watch","movies","Mary","likes","movies","too"]
["Mary","also","likes","to","watch","football","games"]
```

With a frequency counter the bag of words looks like as follows:

```python
BoW1 = {"John":1,"likes":2,"to":1,"watch":1,"movies":2,"Mary":1,"too":1}
BoW2 = {"Mary":1,"also":1,"likes":1,"to":1,"watch":1,"football":1,"games":1}
```

The assignment is targeted to create a bag of words for all sentences in a paragraph. Here is what we have to do:

- Extract all sentences.
- Remove all stop words in all sentences
- Now construct a bag of words for whole text.
- Find all unique words, and calculate frequency of each word occurring in a sentence.
- Output should be a multi-dimensional array where number of rows are equal to number of sentences, number of columns are equal to total words in bag after stop words removal, and value of a cell represents the frequency or occurrence of the word in that sentence.

Assume language is English and it contains only following stop words:

```python
["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"]
```

Example:

> Srinivas is a man of his words but he claims to be man of science. But his peers think he's neither a man of his words nor man of science. Srinivas is just different.

The above text has three sentences. After removal of stop words, remaining text should be:

```bash
S1:  srinivas man words claims man science
S2:  peers think neither man words man science
S3:  Srinivas just different
```

After examining above expected output should be as follows:

```shell
    | srinivas |  man | words | claims | science | peers | think | neither | just | different
----------------------------------------------------------------------------------------------
S1  |    1     |   2  |   1   |   1    |    1    |   0   |   0   |    0    |   0  |   0
S2  |    0     |   2  |   1   |   0    |    1    |   1   |   1   |    1    |   0  |   0
S3  |    1     |   0  |   0   |   0    |    0    |   0   |   0   |    0    |   1  |   1

```

If you display a table like above is bonus but the expected output array is as follows:

```python
[
    [1, 2, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 2, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
]

```

Please note order of the words in BOW does not matter with the order of occurrence of words in sentences.
