# About the Project
# Features & State



This project is an assignment of my course on react. It just a simple project as I just started learning react.

1. Three project feature from this Course Registration project:

   •Select Course :  The main feature of this project is user will  see cards of feature containing course information and also credit and hour. By clicking the select button user can select the course. Most importantly user can not select the same course more than one time, a warning will be given.

   •Total Credit:  One of the feature of the project is user will be able to track the total credit they selected in the cart section. User can not exceed credit limit of 20 otherwise a warning toast will appear.


   •Remaining Credit:  User will be given of fixed 20 credit course selection. User will be able to see how much credit they can take after every course they select. When the credit remaining moves to less than zero a warning message will be given.


2. State Management in this project: 

   • State management refers to the management and control of the data which is being used in the project. Over the time data changes for several reasons like dynamic data, user interactions. That's why state management used in the project. UseState have been used for state management in this project.

   In this project I used four state.
   •One state is used for managing and updating the data according to the json data. As I worked with the array of data so the initial value used in the project is a empty array. When dynamic data is loaded the state updates with the data it receives. The state is send to the other component as a props as needed. So it can be called global state

   •Then I use state management for total credit calculation. Its needed because every time a course is selected Total credit value is need to be updated. The initial value is set to 0 because I worked with number.

   •Another useState is used to calculate the total price just like the total credit state managing. It is also a global state as well as total credit.

   •Another useState was for remaining credit calculation. In this case initial value was set to 20 because at first 20 credit should be available for the user. Then every course selection changes the value and update the state and it transferred to the card component from App component as a global state
