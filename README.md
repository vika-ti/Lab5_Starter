# Lab 5 - Starter
Victoria Timofeev
https://vika-ti.github.io/Lab5_Starter/expose.html
https://vika-ti.github.io/Lab5_Starter/explore.html

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No, because a "message" feature usually involves multiple components, especially if you can write and send the message. This can include things like accepting user input, database storage of the message (making sure to avoid SQL injections), and server communication. Unit testing is suited for testing individual components to ensure that each part works as intended before being integrated into a larger software system.

1) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes, since this is a small and isolated behavior. You can test the maximum message length without having to run other feautres or components like server communication. This ensures that this component of your application works as intended.
