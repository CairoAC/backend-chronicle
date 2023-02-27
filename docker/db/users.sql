-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
  "ID" bigserial NOT NULL,
  "Username" character varying COLLATE pg_catalog."default" NOT NULL,
  "Email" character varying COLLATE pg_catalog."default" NOT NULL,
  "Password" character varying COLLATE pg_catalog."default" NOT NULL,
  imagepath character varying COLLATE pg_catalog."default",
  CONSTRAINT users_pkey PRIMARY KEY ("ID")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
  OWNER to root;