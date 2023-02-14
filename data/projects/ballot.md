## Methods include

- **First-past-the-post (Uninominal one round)**: This method is also known as "winner-takes-all" and is the most common method used in single-member districts such as in the United States Presidential Elections. The candidate with the most votes wins the election.

- **Two-round system (Uninominal 2 rounds)**: This method is similar to the first-past-the-post method, but with a run-off election if no candidate receives a majority of the votes in the first round. The top two candidates from the first round proceed to the second round and the candidate with the most votes in the second round wins the election.

- **Condorcet method**: This method is based on the idea that if a candidate would beat every other candidate in a head-to-head match-up, then that candidate should win the election. The program calculates the winner by comparing the pairwise preferences of the voters.

- **Resolution by Minimax method**: This method is based on the idea that the winner should be the candidate that minimizes the maximum margin of defeat. The program calculates the winner by comparing the pairwise preferences of the voters.

- **Resolution by Schulze method**: This method is based on the idea that the winner should be the candidate that can beat all other candidates in a series of head-to-head match-ups. The program calculates the winner by comparing the pairwise preferences of the voters.

## Input

The input of the program is a **CSV file**, which can be in one of two formats:

- **vote by ranking**: This format contains information about the votes cast in the election, including the voter's choices for each candidate. This format is useful for inputting data from an actual election where votes have been cast.


- **duel matrix format**: This format contains information about the preferences of the voters in the form of a matrix of pairwise comparisons between the candidates. This format is useful for inputting data from a simulated election or a survey where voters have indicated their preferences between the candidates.

The program is capable of using all the election methods (First-past-the-post, Two-round system, Condorcet method, Resolution by Minimax method, Resolution by Schulze method) when inputting data in the vote by ranking format. However, when inputting data in the matrix of duel format, only the Condorcet method and its resolutions can be used.

you can find example files in the `usefull` folder.

Once the CSV file is inputted, the program will use the data to determine the winner of the election using the various methods described above.

## Output

The program will output the results of the election on the console, once the data has been processed. The output will include the winner of the election, as well as additional information about the election such as the number of votes cast, the number of candidates, and the method used to determine the winner.

the program can be configured to store the output in a log file.

## Usage

Two programs are presented. The first one is located in the folder **scrutin** and the second one in the folder **verify**. The usage is the same for both programs.

| Command | Description |
| ------ | ------ |
| make | Allows to compile the program in the file `bin`. |
| make clean | Allows to clean the `obj` and `bin` files. |
| make zip | Allows to zip the program. |
| make doxygen | Allows to generate the doxygen documentation. |

### Scrutin program

>scrutin -i|-d filename.csv [-o filename.txt] [-m method]

    -i : Input data in "vote by ranking" format (ballot)
    -d : Input data in "duel matrix" format
    -o : Output result to a log file
    -m : Choose a specific election method
        * uni1 : First-past-the-post method
        * uni2 : Two-round system method
        * cm : Condorcet method with resolution by Minimax method
        * cs : Condorcet method with resolution by Schulze method
        * all (default) : All methods
    -h : Show help information

### Verify program

The verify program is a simple tool that allows adding a hash and secret key to all the votes in a CSV file. The purpose of this is to ensure the authenticity and integrity of the voting data. The verify program is distinct from the scrutin program and serves a different purpose.

>verify -g|-f filename.csv [-n name] [-s secret key]

    -g : Input a file in "vote by ranking" format without a hash, generates a file with a hash
    -f : Input a file in "vote by ranking" format with a hash already included
    -n : Voter's name
    -s : Secret key
    -h : Show help information

**Note** : Please don't include the path with the file name in the command for the verify program.