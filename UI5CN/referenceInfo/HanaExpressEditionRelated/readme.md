# Hana Express Edition Reference

This readme file has reference information for **Hana Express Edition** and its related topics

**[Table of Contents]**

- [Hana Express Edition Reference](#hana-express-edition-reference)
  - [Connecting Putty to Hana Express Edition](#connecting-putty)
  - [Adding Hana Express in Eclipse](#adding-hana-express-in-eclipse)

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

## Adding Hana Express in Eclipse

Ensure Hana Tools are installed in eclipse. Once the same is done, go to **SAP Hana Administration Console** perspective and add the system with the following details

```
Host Name: IP Address of the Hana Express Edition
Instance Number:90
Database user: SYSTEM
Password: Password as set for SYSTEM user
```

Once the system is connected the catalog and content should be visible in the eclipse system view
