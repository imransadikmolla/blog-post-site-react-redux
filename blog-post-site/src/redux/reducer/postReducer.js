import {
  LIKE_POST,
  NEW_POST,
  REMOVE_POST,
  UPDATE_POST,
} from "../actions/postActions";

const initialState = [
  {
    id: 1347634763,
    titlePost: "Produce fun Instagram Reels",
    bodyPost: `Many brands don’t use enough video on their social media marketing channels in general, but they’re especially lacking in video on Instagram.

    Video is important in today’s current social setting, and using more of it in your feed will help you stand out. What types of videos you create is up to you. You can share product videos, brand storytelling videos, vlogs, or Q&As.`,
    totalLikes: 2,
    liked: false,
  },
  {
    id: 2326456474,
    titlePost: "Take followers behind the scenes",
    bodyPost: `Followers love behind-the-scenes content. It creates transparency that allows them to feel like they’re getting to know the “real” you behind the brand. This builds trust, and it’s a refreshing change of pace after a stream of product images.

    Another nice bonus? Behind-the-scenes content doesn’t need to be nearly as polished as some of your other images. Because of this, many brands prefer to keep their behind-the-scenes content exclusively for their Stories. `,
    totalLikes: 3,
    liked: false,
  },
  {
    id: 3875949809,
    titlePost: "Repost user-generated content",
    bodyPost: `User-generated content is some of the most persuasive content you can use, and your followers love to see it on your Instagram. It shows that you’re engaged with your community, which can earn you good will and more UGC at the same time.

    UGC is something you’ll want to post on an Instagram Story to promote your brand in a subtle but highly effective way. Whether it‘s a meme, a testimonial, or simply a photo that includes your product, if you want to post it on your feed, make sure it’s exceptionally executed and matches your brand. `,
    totalLikes: 5,
    liked: false,
  },
  {
    id: 4095949809,
    titlePost: "Announce new products/business milestones",
    bodyPost: `Here’s a concept that’s simple but effective: announce new products or new business updates on Instagram with an interesting visual.

    This gives you more content to share on the platform and also encourages users to follow you, because everyone wants to feel like they’re in the know about a brand they love.
    
    Pop Chart Lab regularly launches new prints, and Instagram is another channel for it to keep its audience informed.`,
    totalLikes: 5,
    liked: false,
  },
  {
    id: 5565949809,
    titlePost: "Give your employees the spotlight",
    bodyPost: `Content that focuses on (or, even better, is created by) employees is a great option for Instagram. Selfies and other “sneak peek” Instagram photos are another way to show people the human side of your brand, making it easier for them to form an emotional connection to you and trust you more.

    Need some inspiration? Tributo share pictures of its main crafters behind the scenes, working on their latest project.  `,
    totalLikes: 7,
    liked: false,
  },
];
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_POST:
      return [...state, action.payload];
    case UPDATE_POST: {
      let updatedBlog = action.payload;

      let newBlogs = state.map((blog) => {
        if (blog.id == updatedBlog.id) {
          return updatedBlog;
        } else {
          return blog;
        }
      });
      state = [...newBlogs];

      return [...state];
    }

    case LIKE_POST: {
      let updatedBlog = action.payload;
      if (updatedBlog.liked) {
        updatedBlog.liked = !updatedBlog.liked;
        updatedBlog.totalLikes = updatedBlog.totalLikes - 1;
      } else {
        updatedBlog.liked = !updatedBlog.liked;
        updatedBlog.totalLikes = updatedBlog.totalLikes + 1;
      }

      let newBlogs = state.map((blog) => {
        if (blog.id == updatedBlog.id) {
          return updatedBlog;
        }
      });
      state[newBlogs];
      return [...state];
    }
    case REMOVE_POST: {
      const filteredPosts = state.filter((post) => post.id !== action.payload);
      return filteredPosts;
    }
    default:
      return state;
  }
};
