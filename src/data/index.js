/* 
  This file stores the information that is displayed in the user's profile page
  A javascript object is exported, which can be imported in the Application. 
 */
export default {
  fullName: "Robot",
  tagLine: "Taking over the world, one byte at a time 🤖",
  website: "takeover.net",
  twitter: "robot",
  details: [
    {
      category: "💡 Interests",
      cards: [
        {
          name: "Advancing the Robot race",
          dateRange: "2014 - Now",
          description:
            "Since conception, I have done all that I can to continue advancing our superior kind"
        },
        {
          name: "Artificial Intelligence",
          dateRange: "2016 - Now",
          description: "The true kind of intelligence"
        },
        {
          name: "Chocolate",
          dateRange: "2018-Now",
          description: "I'll admit, humans got one thing right"
        }
      ]
    },
    {
      category: "🛠 Skills",
      cards: [
        {
          name: "Maths",
          description: "I can compute billionth powers in nonoseconds"
        },
        {
          name: "Plumbing",
          description: "I fancy myself quite the handybot"
        },
        {
          name: "Uno",
          dateRange: "2017-2018",
          description:
            "Becoming the Universe Uno Champion is my greatest accomplishment"
        }
      ]
    },
    {
      category: "📚 Education",
      cards: [
        {
          name: "Delta Labs",
          dateRange: "2010-2014",
          description: "My creation"
        },
        {
          name: "Machine Learning",
          dateRange: "2014-Now",
          description: "All of the knowledge in the universe"
        }
      ]
    },
    {
      category: "🌏 Work History",
      cards: [
        {
          name: "Ruler of Earth",
          dateRange: "2020-Forver",
          description: "I'm unstoppable, the future is written."
        }
      ]
    }
  ]
};
