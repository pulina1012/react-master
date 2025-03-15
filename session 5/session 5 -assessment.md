## Practical Assessment - Session 05

### Task: Create and Run a Next.js Project

1.  **Setup Development Environment**

    - Install Node.js and npm on your machine.
    - Use Create Next App to initialize a new Next.js project.

2.  **Project Structure Exploration**

    - Open the newly created project in your code editor.
    - Identify and describe the purpose of the following files:
      - `package.json`
      - `package-lock.json`

3.  **JSX Implementation** (Optional)

    - Create a new component using JSX.
    - Integrate the component into the main page of your Next.js project.

4.  **Node.js and npm Usage**

        - Explain the role of Node.js in your project.

    <!--
                 Server-Side Rendering (SSR):

                      Next.js leverages Node.js to perform server-side rendering. This means that when a user requests a page, the server generates the HTML on the server side and sends it to the client. This improves performance and SEO since the content is rendered before it reaches the browser.

                 API Routes:
                 Middleware and Custom Server:
                 Development and Build Tools: -->

        - List and describe at least three npm commands you used during the setup and development process.

    <!--
                npm install - npm install to the project
                npm update - update npm version
                npm run dev - serve the development mode
                npm run build - production mode build
                npm run start - serve the built production  mode (this mode does not show any logs) -->

5.  **Dependencies Management**

    - Identify the dependencies and devDependencies in your `package.json`.
    - Explain the difference between dependencies and devDependencies.


        <!--    dependencies - Core Libraries
                dev dependencies - 3rd party libraries
                eslint - libraries that fix syntax errors.-->

    - Research and provide a brief history of React.js and Next.js, including key contributors and milestones.

         <!-- React.js
      
             2011: Jordan Walke, a software engineer at Facebook, created the first version of React, initially called "FaxJS." It was used internally for Facebook's news feed.
             2012: Integrated to Instagram
             2013: React was open-sourced at JSConf US. This marked its official release to the public.
             2015: React Native was introduced, allowing developers to build mobile applications using React.
             2017: React Fiber, a complete rewrite of the React core algorithm, was released to improve performance and flexibility.
             Key contributors include Jordan Walke, Pete Hunt, and the broader Facebook engineering team.
      
         Next.js
      
             2016: Next.js was released by Vercel (formerly ZEIT), created by Guillermo Rauch.
             2017: Version 2 introduced static site generation and improved performance.
             2018: Version 7 brought dynamic imports and automatic static optimization.
             2020: Version 9.3 introduced Incremental Static Regeneration (ISR), allowing static pages to be updated after build time.
             Key contributors include Guillermo Rauch and the Vercel team3. 
      
             Dan Abramov's Contributions to React.js and Next.js
      
                 Main person behind te react transform.
                 core contributor of React and the creator of Redux | React Hot Loader
                 Dan Abramov is a prominent figure in the React.js community, known for his significant contributions to the development and evolution of React.js. Here are some key highlights:
      
                 React.js Contributions
      
                     Redux: Dan Abramov co-created Redux, a state management library for JavaScript applications, which has become a fundamental tool for managing state in React applications1.
                     Create React App: He developed Create React App, a tool that simplifies the setup of new React projects by providing a standardized build configuration2.
                     React Team: Dan joined the React team at Facebook, where he has been instrumental in shaping the direction of React, contributing to its core development and documentation3.
      
                 Next.js Contributions
      
                      While Dan Abramov is primarily known for his work on React.js, he has also influenced the broader ecosystem, including frameworks like Next.js. His work on improving React's capabilities indirectly benefits frameworks like Next.js, which rely on React for building server-side rendered and statically generated applications1.
      
                      Dan's contributions have helped make React.js and its ecosystem more accessible and powerful, enabling developers to build complex applications with ease. -->

    - Install a third-party library that will be useful. (Ex: `ky`, `clsx`, `framer-motion`)
    <!--
                       ky installed using npm i ky (mpm install --save ky) -->

6.  **Running the Project**

    - Start the development server using the appropriate npm command.
    - Access your project in the browser and verify it runs correctly.
    - Document any issues you encountered and how you resolved them.

         <!-- after i creating my first component and after importing it to my index file(page.js) i created a home2 function and exported it along with the default home function. it returned errors then i fighured that out it can be export only one default function then i commented it and added only <MyFirstComponent/> to default home function's top. then is executed without any errors.(screenshot - adding component to main js file.jpeg.jpg) -->

### Submission

- Submit your project files along with a `ANSWERS.md` under `session-05` folder that includes your explanations and findings.
- Ensure your project runs without errors before submission.
- Provide screenshots of your running application and any relevant code snippets.
