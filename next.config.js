const hostnames = [
  "m.media-amazon.com",
  "static.wikia.nocookie.net",
  "flxt.tmsimg.com",
  "i.pinimg.com",
];

module.exports = {
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};
