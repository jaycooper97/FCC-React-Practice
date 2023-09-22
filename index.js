//1. Create a Simple JSX Element
// const JSX = <h1>Hello JSX!</h1>;


//2. Create a Complex JSX Element
// const JSX = <div>
// <h1>CHICKEN STRIPS</h1>
// <p>Lorem ipsum</p>
// <ul>
//   <li>Fried</li>
//   <li>Baked</li>
//   <li>Grilled</li>
// </ul>
// </div>


//3. Add Comments in JSX
// const JSX = (
//     <div>
//       <h1>This is a block of JSX</h1>
//       <p>Here's a subtitle</p>
//       /*div element*/
//     </div>
//   );


//4. Render HTML Elements to the DOM
// const JSX = (
//     <div id="challenge-node">
//       <h1>Hello World</h1>
//       <p>Lets render this to the DOM</p>
//     </div>
//   );
//   // Add your code below this line
//   ReactDOM.render(JSX, document.getElementById("challenge-node"));


//5. Define an HTML Class in JSX
// const JSX = (
//     <div className="myDiv">
//       <h1>Add a class to this div</h1>
//     </div>
//   );


//6. Learn About Self-Closing JSX Tags
// const JSX = (
//     <div>
//       <h2>Welcome to React!</h2> <br />
//       <p>Be sure to close all tags!</p>
//       <hr />
//     </div>
//   );


//7. Create a Stateless Functional Component
// const MyComponent = function() {
//     // Change code below this line
//         return(
//             <div>
//                 <h1>"This is my div element"</h1>
//             </div>
//         );
  
  
//     // Change code above this line
//   };


//8. Create a React Component
// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       // Change code below this line
//         return(
//             <div>
//                 <h1>Hello React!</h1>
//             </div>
//         );
  
  
//       // Change code above this line
//     };
//   };


//9. Create a Component with Composition
// const ChildComponent = () => {
//     return (
//       <div>
//         <p>I am the child</p>
//       </div>
//     );
//   };
  
//   class ParentComponent extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return (
//         <div>
//           <h1>I am the parent</h1>
//           { /* Change code below this line */ }
//             <ChildComponent />
//           { /* Change code above this line */ }
//         </div>
//       );
//     }
//   };


//10. Use React to Render Nested Components
// const TypesOfFruit = () => {
//     return (
//       <div>
//         <h2>Fruits:</h2>
//         <ul>
//           <li>Apples</li>
//           <li>Blueberries</li>
//           <li>Strawberries</li>
//           <li>Bananas</li>
//         </ul>
//       </div>
//     );
//   };
  
//   const Fruits = () => {
//     return (
//       <div>
//         { /* Change code below this line */ }
//             <TypesOfFruit />
//         { /* Change code above this line */ }
//       </div>
//     );
//   };
  
//   class TypesOfFood extends React.Component {
//     constructor(props) {
//       super(props);
//     }
  
//     render() {
//       return (
//         <div>
//           <h1>Types of Food:</h1>
//           { /* Change code below this line */ }
//                 <Fruits />
//           { /* Change code above this line */ }
//         </div>
//       );
//     }
//   };


//11. Compose React Components
// class Fruits extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return (
//         <div>
//           <h2>Fruits:</h2>
//           { /* Change code below this line */ }
//                 <NonCitrus />
//                 <Citrus />
//           { /* Change code above this line */ }
//         </div>
//       );
//     }
//   };
  
//   class TypesOfFood extends React.Component {
//     constructor(props) {
//        super(props);
//     }
//     render() {
//       return (
//         <div>
//           <h1>Types of Food:</h1>
//           { /* Change code below this line */ }
//                 <Fruits />
//           { /* Change code above this line */ }
//           <Vegetables />
//         </div>
//       );
//     }
//   };


//12. Render a Class Component to the DOM
// class TypesOfFood extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return (
//         <div id="challenge-node">
//           <h1>Types of Food:</h1>
//           {/* Change code below this line */}
//                 <Fruits />
//                 <Vegetables />
//           {/* Change code above this line */}
//         </div>
//       );
//     }
//   };
  
//   // Change code below this line
//   ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"))


//13. Write a React Component from Scratch
// import React from 'react'
// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return(
//         <div id="challenge-node">
//             <h1>My First React Component!</h1>
//         </div>
//         );
//     }
// };
// ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));


//14. Pass Props to a Stateless Functional Component
// const CurrentDate = (props) => {
//     return (
//       <div>
//         { /* Change code below this line */ }
//         <p>The current date is: {props.date}</p>
//         { /* Change code above this line */ }
//       </div>
//     );
//   };
  
//   class Calendar extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return (
//         <div>
//           <h3>What date is it?</h3>
//           { /* Change code below this line */ }
//           <CurrentDate date={Date()}/>
//           { /* Change code above this line */ }
//         </div>
//       );
//     }
//   };


//15. Pass an Array as Props
// const List = (props) => {
//     { /* Change code below this line */ }
//     return <p>{props.tasks}</p>
//     { /* Change code above this line */ }
//   };
  
//   class ToDo extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return (
//         <div>
//           <h1>To Do Lists</h1>
//           <h2>Today</h2>
//           { /* Change code below this line */ }
//           <List list={["walk dog", "change litter"]}/>
//           <h2>Tomorrow</h2>
//           <List list={['work', 'school', 'study']}/>
//           { /* Change code above this line */ }
//         </div>
//       );
//     }
//   };


//16. Use Default Props
// const ShoppingCart = (props) => {
//     return (
//       <div>
//         <h1>Shopping Cart Component</h1>
//       </div>
//     )
//   };
  // Change code below this line
//   ShoppingCart.defaultProps = {items: 0};


//17. Override Default Props
// const Items = (props) => {
//     return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
//   }
  
//   Items.defaultProps = {
//     quantity: 0
//   }
  
//   class ShoppingCart extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       { /* Change code below this line */ }
//       return <Items quantity={10} />
//       { /* Change code above this line */ }
//     }
//   };


//18. Use PropTypes to Define the Props You Expect
// const Items = (props) => {
//     return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
//   };
  
//   // Change code below this line
//   Items.propTypes = { quantity: PropTypes.number.isRequired }
//   // Change code above this line
  
//   Items.defaultProps = {
//     quantity: 0
//   };
  
//   class ShoppingCart extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return <Items />
//     }
//   };


//19. Access Props Using this.props
// class App extends React.Component {
//     constructor(props) {
//       super(props);
  
//     }
//     render() {
//       return (
//           <div>
//               { /* Change code below this line */ }
//               <Welcome name='Inky' />
//               { /* Change code above this line */ }
//           </div>
//       );
//     }
//   };
  
//   class Welcome extends React.Component {
//     constructor(props) {
//       super(props);
  
//     }
//     render() {
//       return (
//           <div>
//             { /* Change code below this line */ }
//             <p>Hello, <strong>{this.props.name}</strong>!</p>
//             { /* Change code above this line */ }
//           </div>
//       );
//     }
//   };


//20. Review Using Props with Stateless Functional Components
// class CampSite extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return (
//         <div>
//           <Camper/>
//         </div>
//       );
//     }
//   };
//   // Change code below this line
//   const Camper = props => <p>{props.name}</p>;
// Camper.defaultProps = {
//   name: 'CamperBot'
// }
// Camper.propTypes = {
//   name: PropTypes.string.isRequired
// }