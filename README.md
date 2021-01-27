# Mad-Libs
A digital version of the Mad Libs game. Users can fill out a form and their responses will populate a story. 

## API and Data Sample

The API will be provided by the Mad Libs API: <http://madlibz.herokuapp.com/api/random>. Sample below:
```
{
    "title": "Three Little Pigs",
    "blanks": [
        "adjective",
        "verb",
        "verb",
        "verb",
        "plural noun",
        "verb",
        "verb",
        "past tense verb",
        "plural noun",
        "adjective",
        "verb",
        "plural noun",
        "noun",
        "verb",
        "past tense verb",
        "noun",
        "noun",
        "noun",
        "past tense verb",
        "adjective",
        "past tense verb",
        "past tense verb",
        "noun",
        "past tense verb"
    ],
    "value": [
        "Once up a time, there were three ",
        " pigs. One day, their mother said, \"You are all grown up and must ",
        " on your own.\" So they left to ",
        " their houses. The first little pig wanted only to ",
        " all day and quickly built his house out of ",
        ". The second little pig wanted to ",
        " and ",
        " all day so he ",
        " his house with ",
        ". The third ",
        " pig knew the wolf lived nearby and worked hard to ",
        " his house out of ",
        ". One day, the wolf knocked on the first pig's ",
        ". \"Let me in or I'll ",
        " your house down!\" The pig didn't, so the wolf ",
        " down the ",
        ". The wolf knocked on the second pig's ",
        ". \"Let me in or I'll blow your ",
        " down!\" The pig didn't, so the wolf ",
        " down the house. Then the wolf knocked on the third ",
        " pig's door. \"Let me in or I'll blow your house down!\" The little pig didn't so the wolf ",
        " and ",
        ". He could not blow the house down. All the pigs went to live in the ",
        " house and they all ",
        " happily ever after.",
        0
    ]
}
```

## Wireframes
#### Mobile Layout
 ![Wireframe - Mobile Layout](https://github.com/willwardlow/mad-libs/blob/main/Wireframe%20-%20Mobile%20%20v2.png)

#### Desktop Layout
 ![Wireframe - Desktop Layout](https://github.com/willwardlow/mad-libs/blob/main/Wireframe%20-%20Desktop%20v2.png)
 
 
 

### MVP/PostMVP

#### MVP 
 - Generate story template from random generate.
 - Users will submit a form that will ask the user to provide parts of speech (verb, adverb, adjective, etc) 
 - A final story will be published showing the text and thrue provided input.

#### PostMVP  
**Celebrity Tweet Edition.**
- Kanye West Version : Tweets from <http://api.kanye.rest> will provide context where words will be omitted into blank spaces. The users will fill in those blanks, MadLib style!
- Donald Trump Edition: Just like the above, but using Donald Trump tweets from <https://docs.tronalddump.io/>.
- User can select a story prior to playing. (Need to find an API that can support that. )

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Jan 26| Project Approval | Complete
|Jan 26| Skeleton HTML Layout with Basic CSS Features | Complete
|Jan 27| Generate Form Prompting User to Provide Input | Complete
|Jan 27| Mad Libs Story Generated with User Responses Implemented | Incomplete
|Jan 28| Responsive Design and Advanced CSS Features | Incomplete
|Jan 29| MVPs Delivered | Incomplete
|Feb 1| Presentations/Project Submission | Incomplete

## Priority Matrix

- ![Priority Matrix](https://github.com/willwardlow/mad-libs/blob/main/Mad%20Libs%20Priority%20Matrix.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with API - pulling story template | H | 3hrs| 0.5hrs | 0hrs |
| JS - Created Form to Prompt User Input | H | 6hrs | 4hrs | 0hrs |
| JS - Publishing Story with Responses| H | 4hrs | 0hrs | 0 hrs|
| HTML and CSS Design | M | 6hrs | 3hrs | 0 hrs |
| CSS Responsive Design | M | 2hrs | 0hrs | 0hrs |
| Debugging and Troubleshooting | L | 6hrs | 0hrs | 0hrs |  
| Total | H | 27hrs| 0hrs | 0hrs |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  


## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
