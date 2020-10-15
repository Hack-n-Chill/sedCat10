module.exports = {
  name: "repo",
  description: "Add, list & Remove Current Tracking Repo",
  execute(message, args) {
    if (args.length <= 0) {
      message.channel.send("Please use with add list or remove");
      return;
    }
    switch (args[0]) {
      case "list":
        message.channel.send("Tracking something");
        break;

      case "add":
        if (args.length <= 1) {
          message.channel.send("Please provide repo link");
          return;
        }
        message.channel.send("Added something");
        break;
      case "remove":
        if (args.length <= 1) {
          message.channel.send("Please provide repo link");
          return;
        }
        message.channel.send("Removed something");
        break;
      default:
        message.channel.send(
          "Unkonwn Arguement!Please use with add list or remove"
        );
    }
  },
};
