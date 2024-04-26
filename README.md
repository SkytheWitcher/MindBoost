# MindBoost

## Overview
The MindBoost App is a mobile application developed using Expo, designed to transform idle time into educational moments through gamified learning experiences. This app sends periodic notifications prompting users to solve problems at random intervals throughout the day, ideal for users who might be gaming on a desktop or scrolling on their phone. Each user receives the problem at the same time, enhancing the competitive element of the app.

## Concept
The app leverages spontaneous interaction to encourage learning. By delivering problems at unpredictable intervals, it keeps users engaged and ensures that learning is both fun and challenging. It integrates with university systems for students and is also open to the general public, making it versatile and broadly accessible.

### Features
- **Simultaneous Problem Delivery**: All users receive a new problem from the daily set at the same time, promoting a synchronized challenge across the user base.
- **Ranking System**: Users earn points for solving problems, with their scores contributing to a public leaderboard.
- **Notification-Based Prompts**: Problems are delivered through notifications, ensuring users can engage with the app without needing to be actively on it.
- **Gamified Learning Experience**: Points and rankings make the learning process competitive and fun.
- **Dynamic Problem Generation**: Problems are generated using an LLM API, ensuring a wide range of topics and difficulties.
- **User Content Submission**: Users can submit their own problems or study materials, which the app may include in the challenges.

## Development Stages
1. **Mobile App Development**:
   - Develop the app using Expo framework to ensure cross-platform compatibility across iOS and Android devices.
   - Implement notification services to handle the delivery of problems at set intervals.

2. **Integration with Educational Systems**:
   - For students, provide options to link the app with university databases for a personalized learning experience.
   - Ensure data privacy and security in compliance with educational standards.

3. **User Interface Design**:
   - Create a user-friendly and engaging interface that motivates users to participate and solve problems.
   - Design interactive elements that reflect the gamification of learning.

4. **Testing and Feedback**:
   - Conduct extensive testing to ensure reliability and user engagement.
   - Collect user feedback to continuously improve the app.

## Future Expansion
- **Enhanced Customization**: Allow users more options to customize when and how they receive problems based on their personal schedules and preferences.
- **Expansion to Other Educational Areas**: Broaden the scope of the app to include more diverse educational fields and age groups.

## Contributing
Contributors are welcome to assist with development, testing, and content creation. For details on how to get involved, please see the project's contributing guidelines.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.


# CURRENT TODO:
## TRANSITIONING TO EXPO
- Add buttons to accept multiple choice format
- Return whether or not user answer was correct
- Figure out a way to confirm that the API integral problem is actually doable and the answer is genuinely correct (Possibly use Wolfram API?)
- Accept personal study guides
- Intermittently notify a user there is a new problem
- Have the API create a challenge problem and to give that at random times as well
- Total problems throughout a day should be around 5-10?

# NEW/POTENTIAL IDEAS
- Rank system
- User input classes to adjust difficulty
- Use LLM to make ranking system?
- Problems will send out at the same time to users within that department. The faster you are to answering that problem within that department, the more points you receieve.
