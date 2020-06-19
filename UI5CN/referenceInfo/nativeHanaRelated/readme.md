# Native Hana Reference Guide

This readme file has reference information for **Native Hana** and its related topics

**[Table of Contents]**

- [Hana Database Architecture](#hana-database-architecture)
  - [Row and Column Storage](#row-and-column-storage)
  - [Index Server](#index-server)
  - [XS Server](#xs-server)

## Hana Database Architecture

### Row and Column Storage

### Index Server

- Actual data will be stored
- **_Transaction manager_** manages the commit and rollback of the database
- **_SQL/MDX processor_** - Segments the SQL statments into correct bins and sends the same to respective query processor for optimised output
- **_Persistance Layer_** - Permanant storage in hard disk and disaster recovery layer
- **_Preprocessor Server_** - Used for text data analysis
- **_Statistics Server_** - Capture and store the health & performance of the Hana Database.

### XS Server

Allows external applications to access data on the Hana database, and provide them to UI applications. This is a web-server.
