import user from '../reducers/user';
 
export const data = {
    profile: {
      id: 1,
      name: "Sainath",
      image:user.image,
      
        // "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fbiography%2FChris-Hemsworth&psig=AOvVaw3feODZUGhHxppLpg2-K0Ya&ust=1687798795001000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjy39Ly3v8CFQAAAAAdAAAAABAE",
      contacts: [
        {
          id: 2,
          name: "Satyjeet",
          image:
            "https://img.lovepik.com/photo/48009/5870.jpg_wh860.jpg",
          chatlog: [
            {
              text: "Hi Bro,How are you!",
              timestamp: "11:21 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine satyjeet. How are you!",
              timestamp: "11:22 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "lets meet",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Oky Bro !",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 3,
          name: "shivraj",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2FrXlWpwB8cptsBbQPOOaGSCVJpt1mlQz2A&",
          chatlog: [
            {
              text: "Hi !",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine .... How are you!",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great,Dear.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Or maybe not, let me check something and call you. Give me sometime",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Where r u ??",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 4,
          name: "Nidhi",
          image:
            "https://thumbs.dreamstime.com/b/cartoon-girl-running-park-wearing-yellow-shirt-has-big-smile-her-face-319516070.jpg",
          chatlog: [
            {
              text: "Hi sainath!",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Nidhi. How are you!",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great ,  sainath.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "r u busy??",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: " no!",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 5,
          name: "rushabh",
          image:
            "https://t3.ftcdn.net/jpg/05/43/42/26/360_F_543422600_wMveIPhoQb4f5sWIvRp0mXfRPxxickBz.jpg",
          chatlog: [],
        },
        {
          id: 6,
          name: "vijay",
          image:
            "https://t4.ftcdn.net/jpg/06/24/49/55/360_F_624495545_drAcLyfLAhjuOBhFsTbOzm7JtBVyVvS5.jpg",
          chatlog: [
            {
              text: "Hey Faizan, where is ur Big bro?",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I don't know anything about that, bhai",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Are you sure,  faizan.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Yes,  I am sure",
              timestamp: "10:04 AM",
              sender: "me",
              message_id: 4,
            },
            {
              text: "All right shan...",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 7,
          name: "Dnyaneshwar",
          image:" https://img.lovepik.com/element/45006/1086.png_860.png",
          chatlog: [
            {
              text: "Kahan hai Bhai",
              timestamp: "10:06 AM",
              sender: "me",
              message_id: 1,
            },
            {
              text: "I'm in Market",
              timestamp: "10:06 AM",
              sender: "user",
              message_id: 2,
            },
            {
              text: "call me ....",
              timestamp: "10:07 AM",
              sender: "me",
              message_id: 3,
            },
            {
              text: "ok",
              timestamp: "10:08 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "R u okay??",
              timestamp: "10:09 AM",
              sender: "me",
              message_id: 5,
            },
            {
              text: "Hmmmmm!",
              timestamp: "10:09 AM",
              sender: "user",
              message_id: 6,
            },
          ],
        },
        {
          id: 8,
          name: "ganesh",
          image:"https://i.pinimg.com/236x/de/01/d7/de01d78472cf13183bcf2baa3773c0a6.jpg",
            // "https://global-uploads.webflow.com/5d121ce15cf154f8f7d91740/5fb7e016798aa0ccca2ca0ba_Abhishek%20Dwivedi.jpg",
          chatlog: [],
        },
        {
          id: 9,
          name: "Saikumar",
          image:
            "https://i.pinimg.com/1200x/05/fe/76/05fe76615bf4e2c22b5ad1b7a750f5ec.jpg",
          chatlog: [],
        },
      ],
    },
  };