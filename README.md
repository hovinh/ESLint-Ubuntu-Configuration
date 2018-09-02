# ESLint-Ubuntu-Configuration
This repository contains configuration files to set up **ESLint** on **Ubuntu** to follow this [Style Guide](https://www.comp.nus.edu.sg/~cs1101s/source/source_styleguide.pdf).

## PREREQUISITIES:
- node.js
- nvm
- git

## INSTRUCTION:

1) Open Terminal and direct to a folder on your local machine to download the repository: 
```console
$ git clone https://github.com/hovinh/ESLint-Ubuntu-Configuration
```
2) Run init.sh to set up ESLint:
```console
$ chmod 755 init.sh execute.sh
$ ./init.sh
```
Expected outcome:
```console
Installed successfully!
```

3) Invoke execute.sh to run ESLint, for example `input dir` is "/home/hoxuanvinh/assessment43" and `output dir`is "/home/hoxuanvinh/output": 
```console
$ ./execute.sh "/home/hoxuanvinh/assessment43" "/home/hoxuanvinh/output"
```
Expected outcome, if testing on `assessment43` test cases containing 128 files,
```console
removed directory 'input'
Processed 128 files in total.
1 minutes and 57 seconds elapsed.
```

## PERFORMANCE:

|Test cases					            |No. Files	|Time       |
|---------------------------------------|:---------:|:----------|
|submissions_q158				        |424		|4:16 mins  |
|assessment39 (Searching and Sorting IV)|130		|1:33 min   |
|assessment41 (Rookie Training)			|137		|1:32 min   |
|assessment42 (Advanced Training)		|129		|1:40 min   |
|assessment43 (The Final Showdown)		|128		|1:57 min   |

## FAQ:
1) When invoking execute.sh file, why does it create a temporary `input` folder that contains copies of file in actual `input_dir`?
    
    Answer: To invoke ESLint, we need 3 configuration files `package.json`, `package-lock.json` and `.eslintrc.js` to be stored in `input_dir` folder or its ancestor folders. For some reasons, if one copies these files into `input_dir`, we could not invoke run ESLint, hence the workaround solution is copying the input files into `ESLint-Ubuntu-Configuration\input` and run ESLint from here.
