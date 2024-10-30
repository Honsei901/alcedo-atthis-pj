export const resolvers = {
  Query: {
    book: async (parent, args, context) => books[args.id - 1],
    books: async (parent, args, context) => books,
  },
};

const books = [
  {
    id: 1,
    title: 'The Awakening',
    author: 'Kate Chopin',
    price: 1000,
  },
];
