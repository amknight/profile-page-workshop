/* This file stores the information that is displayed in the user's profile page
 * A javascript object is exported, which can be imported in the Application. 
 */
export default
{
  firstName: "John",
  lastName: "Smith",
  tagLine: "Sorbet Enthusiast. Lover of all tech 🚀",
  website: "jonno.xyz",
  twitter: "jonno",
  details: {
    // Using strings as keys since some of the keys have spaces.
    "💡 Interests": [
      {
        name: "Sorbet",
        description: "I like Sorbet"
      },
      {
        name: "Sorbet",
        description: "I like SorbetI like SorbetI like Sorbet"
      },
      {
        name: "Sorbet",
        description: "I like SorbetI like SorbetI like SorbetI like SorbetI like SorbetI like SorbetI like Sorbet"
      },
      {
        name: "Sorbet",
        description: "I like SorbetI like Sorbet"
      },
      {
        name: "Sorbet",
        description: "I like Sorbet"
      },
      {
        name: "Sorbet",
        description: "I like Sorbet"
      },
      {
        name: "Sorbet",
        description: "I like SorbetI like Sorbet"
      },
      {
        name: "Sorbet",
        description: "I like Sorbet"
      },
      {
        name: "Sorbet",
        description: "I like Sorbet"
      }
    ],
    "🛠 Skills": [
      {
        name: "C++",
        dateRange: "2015",
        endYear: "Now",
        description: "nbbbdsf"
      }
    ],
    "📚 Education": [
      {
        name: "C++",
        startYear: "2015",
        endYear: "Now",
        description: "aaa"
      },
      {
        name: "C++",
        startYear: "2015",
        endYear: "Now",
        description: "aaaa"
      }
    ],
    "🌏 Work History": [
      {
        name: "Atlassian",
        startYear: "2016",
        endYear: "Now",
        description: ""
      }
    ],
  }
}