SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.6 (Ubuntu 15.6-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', 'db78489d-eddd-43f4-90eb-a817a9b127fe', 'authenticated', 'authenticated', 'test-transfer-ownership@rvrentpro.com', '$2a$10$zVKsEq0qXrS2E78lPVGXQuUIVpl1Kt7kIuhUButDW/RvJwkSsgNeS', '2024-06-20 05:43:25.14472+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-06-20 05:43:25.130944+00', '2024-06-20 05:43:25.144932+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', 'd00f26fd-7cde-4ba1-b343-9b425fb66417', 'authenticated', 'authenticated', 'test2@rvrentpro.com', '$2a$10$nh523kvmBIb47vVwt9yWh.UZ1Q8ONJTQttIuNWZV/b0FrMGsq4KRu', '2024-06-20 05:43:40.553172+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-06-20 05:43:40.545722+00', '2024-06-20 05:43:40.553404+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', 'c176a253-307f-458e-9df0-29016049b639', 'authenticated', 'authenticated', 'test-role-update@rvrentpro.com', '$2a$10$0zjCi6s0hq/Gaa5TmtN2MuaFlnHoR64FJWm9.gm.tP0cmLHc448B6', '2024-06-20 05:48:12.81034+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-06-20 05:48:12.807522+00', '2024-06-20 05:48:12.810546+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', 'dbe31608-e5d9-4f7d-9c60-99bc4c84727b', 'authenticated', 'authenticated', 'test-update-password@rvrentpro.com', '$2a$10$rZ.yTBBg1OggZXTw0FphQuEX5b2M8ypFN2oGqTm4ox6.frT1p/Zcq', '2024-06-20 05:44:01.312541+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-06-20 05:44:01.302372+00', '2024-06-20 05:44:01.312747+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '61a31d98-012f-4f1b-b292-1961eddfae5c', 'authenticated', 'authenticated', 'test-remove@rvrentpro.com', '$2a$10$aWinrolr4lwAhN0Dx0VQnuTqDCZUBefZv9nDZ.A9966SY/yM9.D..', '2024-06-20 05:44:19.132246+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-06-20 05:44:19.129408+00', '2024-06-20 05:44:19.132445+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '243744e1-461e-481b-967d-c9b041279a0a', 'authenticated', 'authenticated', 'remove-member@rvrentpro.com', '$2a$10$zWhSl/9hxuFj.osga7vdgOyTFtfmC0nwu2HXAcuT18z/gDjxc70q6', '2024-06-20 05:44:46.989104+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-06-20 05:44:46.978742+00', '2024-06-20 05:44:46.989335+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '06205353-537d-4d47-a1bc-3d683f3bd228', 'authenticated', 'authenticated', 'test@rvrentpro.com', '$2a$10$7.CuMi13AgyCDfMkWbewTu0dqjL4ghRrEZVGrsmF51tiuKIVvx0TS', '2024-06-20 05:47:34.416875+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-06-20 05:47:34.410671+00', '2024-06-20 05:47:34.417123+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('db78489d-eddd-43f4-90eb-a817a9b127fe', 'db78489d-eddd-43f4-90eb-a817a9b127fe', '{"sub": "db78489d-eddd-43f4-90eb-a817a9b127fe", "email": "test-transfer-ownership@rvrentpro.com", "email_verified": false, "phone_verified": false}', 'email', '2024-06-20 05:43:25.136937+00', '2024-06-20 05:43:25.137001+00', '2024-06-20 05:43:25.137001+00', 'c953af8d-cf45-4d81-bd70-3587b081d10a'),
	('d00f26fd-7cde-4ba1-b343-9b425fb66417', 'd00f26fd-7cde-4ba1-b343-9b425fb66417', '{"sub": "d00f26fd-7cde-4ba1-b343-9b425fb66417", "email": "test2@rvrentpro.com", "email_verified": false, "phone_verified": false}', 'email', '2024-06-20 05:43:40.549919+00', '2024-06-20 05:43:40.549971+00', '2024-06-20 05:43:40.549971+00', '943138a4-70e9-49ef-81bb-1ed5274f1f40'),
	('dbe31608-e5d9-4f7d-9c60-99bc4c84727b', 'dbe31608-e5d9-4f7d-9c60-99bc4c84727b', '{"sub": "dbe31608-e5d9-4f7d-9c60-99bc4c84727b", "email": "test-update-password@rvrentpro.com", "email_verified": false, "phone_verified": false}', 'email', '2024-06-20 05:44:01.306383+00', '2024-06-20 05:44:01.306916+00', '2024-06-20 05:44:01.306916+00', '54165f0b-3132-4ed0-99c2-d1f06879d530'),
	('61a31d98-012f-4f1b-b292-1961eddfae5c', '61a31d98-012f-4f1b-b292-1961eddfae5c', '{"sub": "61a31d98-012f-4f1b-b292-1961eddfae5c", "email": "test-remove@rvrentpro.com", "email_verified": false, "phone_verified": false}', 'email', '2024-06-20 05:44:19.130427+00', '2024-06-20 05:44:19.130508+00', '2024-06-20 05:44:19.130508+00', '00c8afc7-f77c-4622-bc6f-30143fad2164'),
	('243744e1-461e-481b-967d-c9b041279a0a', '243744e1-461e-481b-967d-c9b041279a0a', '{"sub": "243744e1-461e-481b-967d-c9b041279a0a", "email": "remove-member@rvrentpro.com", "email_verified": false, "phone_verified": false}', 'email', '2024-06-20 05:44:46.979877+00', '2024-06-20 05:44:46.979932+00', '2024-06-20 05:44:46.979932+00', '08a313a2-7d85-43e6-be1e-d0ebb5afbccb'),
	('06205353-537d-4d47-a1bc-3d683f3bd228', '06205353-537d-4d47-a1bc-3d683f3bd228', '{"sub": "06205353-537d-4d47-a1bc-3d683f3bd228", "email": "test@rvrentpro.com", "email_verified": false, "phone_verified": false}', 'email', '2024-06-20 05:47:34.412561+00', '2024-06-20 05:47:34.412611+00', '2024-06-20 05:47:34.412611+00', '777221db-dfae-44bc-a708-a689ee20bbe1'),
	('c176a253-307f-458e-9df0-29016049b639', 'c176a253-307f-458e-9df0-29016049b639', '{"sub": "c176a253-307f-458e-9df0-29016049b639", "email": "test-role-update@rvrentpro.com", "email_verified": false, "phone_verified": false}', 'email', '2024-06-20 05:48:12.808536+00', '2024-06-20 05:48:12.808587+00', '2024-06-20 05:48:12.808587+00', 'ea9c4de7-67ee-4960-962d-4c78e99abf37');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: organizations; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."organizations" ("id", "name", "logo_url", "created_at", "uuid") OVERRIDING SYSTEM VALUE VALUES
	(6, 'IndieCorpTester', NULL, '2024-05-20 07:54:23.778099+00', 'bc3ab22c-c444-4491-84f2-cd8d9873e8c2'),
	(7, 'TestTwo', NULL, '2024-05-20 07:54:23.778099+00', '4a562b19-3dea-4126-88d8-47ee20a5cd67');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."users" ("id", "photo_url", "display_name", "onboarded", "created_at") VALUES
	('06205353-537d-4d47-a1bc-3d683f3bd228', NULL, NULL, true, '2024-06-20 05:48:52.730984+00'),
	('243744e1-461e-481b-967d-c9b041279a0a', NULL, NULL, true, '2024-06-20 05:49:04.349628+00'),
	('61a31d98-012f-4f1b-b292-1961eddfae5c', NULL, NULL, true, '2024-06-20 05:49:13.083488+00'),
	('c176a253-307f-458e-9df0-29016049b639', NULL, NULL, true, '2024-06-20 05:49:22.074175+00'),
	('d00f26fd-7cde-4ba1-b343-9b425fb66417', NULL, NULL, true, '2024-06-20 05:49:31.012377+00'),
	('db78489d-eddd-43f4-90eb-a817a9b127fe', NULL, NULL, true, '2024-06-20 05:49:38.137009+00'),
	('dbe31608-e5d9-4f7d-9c60-99bc4c84727b', NULL, NULL, true, '2024-06-20 05:49:47.3807+00');


--
-- Data for Name: memberships; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."memberships" ("id", "user_id", "organization_id", "role", "invited_email", "code", "created_at") OVERRIDING SYSTEM VALUE VALUES
	(9, NULL, 6, 0, 'invited-member@rvrentpro.com', 'P2d6khWwRJddMPKK', '2024-05-20 07:54:23.778099+00'),
	(12, NULL, 6, 0, 'user-invite-email-pwd@rvrentpro.com', 'yB0kEPZCljLIsg4a', '2024-05-20 07:54:23.778099+00'),
	(14, NULL, 6, 0, 'invite-delete@rvrentpro.com', 't6AuNGl7JYbFYLCM', '2024-05-20 07:54:23.778099+00'),
	(13, NULL, 6, 2, 'test2@rvrentpro.com', '89Mu5Q42DjzIWvyc', '2024-05-20 07:54:23.778099+00');


--
-- Data for Name: subscriptions; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: organizations_subscriptions; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id") VALUES
	('logos', 'logos', NULL, '2024-05-20 07:51:14.004852+00', '2024-05-20 07:51:14.004852+00', true, false, NULL, NULL, NULL),
	('avatars', 'avatars', NULL, '2024-05-20 07:51:14.004852+00', '2024-05-20 07:51:14.004852+00', true, false, NULL, NULL, NULL);


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, false);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: memberships_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."memberships_id_seq"', 18, false);


--
-- Name: organizations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."organizations_id_seq"', 8, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
