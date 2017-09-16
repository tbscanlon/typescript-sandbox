# TypeScript Sandbox

Just a sandbox for me to play around in TS with.

## How to use

1. Run `npm install` to install the required dependencies
2. Run `tsc` to compile the TypeScript code
3. Run `npm start` to run the development server (lite-server)

## Observations
Below are my observations and thoughts from playing around with TypeScript. Bear in mind that all of this is completely subjective and probably ill-informed. :ok_hand: :100:

**After Studying Types**
- Types offer a level of safety when writing code compared to regular JavaScript.
- Using types feels a bit awkward, but IntelliSense in VS Code flags up any bad code quickly.
- TypeScript is flexible enough that you can use it *terribly* e.g. `let myThing: any`.
- This flexibility, however, could mean that JS and TS can be mixed together as needed.
- Having difficulty currently seeing how TS works elegantly with object-oriented code.
- I recognise some things from C#, like enums.
- Overall, TS feels like a lovechild between C# and JS.
- Also feels like JavaScript: Microsoft Edition.

**After Studying the Compiler**
- Compilation errors actually only being warnings by default is interesting.
- The amount of behaviour that can be customised is intimidating, but I can see it being very useful as well.
- Enabling sourceMap allows for debugging within the browser, which would be useful if I knew how to really use the browser debug tools.
- Specific options, such as strictNullChecks and noUnusedParamaters, could help improve code quality