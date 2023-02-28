-- Table: public.users
CREATE TABLE IF NOT EXISTS public.users (
  "id" bigserial NOT NULL,
  "username" character varying COLLATE pg_catalog."default" NOT NULL,
  "email" character varying COLLATE pg_catalog."default" NOT NULL,
  "password" character varying COLLATE pg_catalog."default" NOT NULL,
  "imagepath" character varying COLLATE pg_catalog."default",
  CONSTRAINT users_pkey PRIMARY KEY ("id")
) TABLESPACE pg_default;

ALTER TABLE
  IF EXISTS public.users OWNER to root;