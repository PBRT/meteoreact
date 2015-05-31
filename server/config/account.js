// Here add Accounts server configuration
Accounts.validateNewUser(function (user) {
  console.log(user);
  return true;
});

ServiceConfiguration.configurations.remove({
     service: "facebook"
 });

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId : '791836504246737',
    secret: 'ac48d635d8ba37fa81bdd46403e1940a'
});
