<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?
    HTTP requests are stateless by default. Sessions help persist data across requests by storing some information about the user on the server. This is useful for authenticating a user.

2. What does bcrypt do to help us store passwords in a secure manner.
    It hashes your password before storing it.

3. What does bcrypt do to slow down attackers?
    It hashes your password multiple times, meaning that an attacker would need to know the algorithm used and the number of rounds of hashing in order to decode your password.

4. What are the three parts of the JSON Web Token?
    the header, the payload, and the signature
