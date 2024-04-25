# hardhat-tutorial
This is my hardhat tutotial for testing and deploying.
## Steps for this tutorial

### Installation of hardhat and nodejs.

#### Step 1 : Run the below command to install nvm.
    ```
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

        This will add neccessary PATH into .bashrc. all you need to do is to restart the terminal.
    ```
#### Step 2: Now NVM is installed, Install nodejs
    ```
        nvm install --lts

        This install latest LTS version of nodejs and all its dependencies.
        e.g. npm and npx
    ```
#### Step 3: Now install hardhat.
    ```
        npm install -D hardhat 
    ```
#### Step 4: Create a Hardhat sample project.
    ```
    npx hardhat
    and now choose either default javascript project or empty hardh.config.js 
    ```

#### Step 5, start writting your solidity and unit tests.