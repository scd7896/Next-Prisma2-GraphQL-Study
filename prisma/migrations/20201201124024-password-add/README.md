# Migration `20201201124024-password-add`

This migration has been generated by scd7896 at 12/1/2020, 9:40:25 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "User" ADD COLUMN     "password" TEXT
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201201123903-delete-content..20201201124024-password-add
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -28,10 +28,11 @@
   userId    Int     @unique
 }
 model User {
-  id      Int      @id @default(autoincrement())
-  email   String   @unique
-  name    String?
-  posts   Post[]
-  profile Profile?
+  id       Int      @id @default(autoincrement())
+  email    String   @unique
+  name     String?
+  password String?
+  posts    Post[]
+  profile  Profile?
 }
```


