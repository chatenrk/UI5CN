# Hana Express Edition Reference

This readme file has reference information for **Hana Express Edition** and its related topics

**[Table of Contents]**

- [Hana Express Edition Reference](#hana-express-edition-reference)
  - [Connecting Putty to Hana Express Edition](#connecting-putty)

## Connecting Putty

Find the IP Address of the VM Hana Express edition by running the following command

```
/sbin/ifconfig
```

Open the putty client and maintain the following settings

```
HostName or IP Address: IP address from above
Port: 22
```

Save the config and click on load.

Further enter the HXEADM credentials to connect Putty to the VM. On successful completion, putty should be able to login and work with the Hana express edition VM
