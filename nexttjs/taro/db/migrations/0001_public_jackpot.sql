CREATE TYPE "public"."pet_type" AS ENUM('dog', 'cat');--> statement-breakpoint
CREATE TABLE "pets" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"pet_type" "pet_type" NOT NULL,
	"hp" integer DEFAULT 100 NOT NULL,
	"owner_id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "pets" ADD CONSTRAINT "pets_owner_id_users_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;