-- Minimal seed data for frontend job testing

-- Disable triggers/replication role to avoid audit trigger side-effects during seed
SET session_replication_role = 'replica';
BEGIN;

-- Job types
INSERT INTO job_type (name) VALUES
  ('Full Time'),
  ('Part Time'),
  ('Contract');

-- Job categories
INSERT INTO job_category (id, name, is_custom) VALUES
  ('11111111-1111-1111-1111-111111111111', 'Engineering', false),
  ('11111111-1111-1111-1111-111111111112', 'Design', false),
  ('11111111-1111-1111-1111-111111111113', 'Product', false),
  ('11111111-1111-1111-1111-111111111114', 'Marketing', false);

-- Job functions
INSERT INTO job_function (id, name, is_custom) VALUES
  ('22222222-2222-2222-2222-222222222221', 'Software Engineering', false),
  ('22222222-2222-2222-2222-222222222222', 'Frontend', false),
  ('22222222-2222-2222-2222-222222222223', 'Backend', false),
  ('22222222-2222-2222-2222-222222222224', 'UX', false);

-- Insert several jobs with details and locations
-- Job A: High pay, newest
INSERT INTO "job" (id, title, metadata, created_at, updated_at) VALUES
  ('aaaaaaaa-aaaa-aaaa-aaaa-000000000001', 'Senior Backend Engineer', '{"company":"Acme","organization":"Acme Inc"}'::json, now(), now());

INSERT INTO job_detail (id, job_id, job_title, description, min_pay, max_pay, opening_date, closing_date, review_date, job_type_id)
VALUES ('bbbbbbbb-bbbb-bbbb-bbbb-000000000001', (SELECT id FROM "job" WHERE title='Senior Backend Engineer' LIMIT 1), 'Senior Backend Engineer', 'Work on backend systems', 140000, 180000, now(), now() + interval '60 days', now() + interval '7 days', (SELECT id FROM job_type WHERE name='Full Time' LIMIT 1));

INSERT INTO job_location (id, job_id, address, zip_geo)
VALUES ('cccccccc-cccc-cccc-cccc-000000000001', (SELECT id FROM "job" WHERE title='Senior Backend Engineer' LIMIT 1), '100 Market St, Metropolis, US', NULL);

INSERT INTO job_category_selection (id, job_id, category_id, created_at, updated_at)
VALUES ('dddddddd-dddd-dddd-dddd-000000000001', (SELECT id FROM "job" WHERE title='Senior Backend Engineer' LIMIT 1), (SELECT id FROM job_category WHERE name='Engineering' LIMIT 1), now(), now());

INSERT INTO job_function_selection (id, job_id, function_id, created_at, updated_at)
VALUES ('eeeeeeee-eeee-eeee-eeee-000000000001', (SELECT id FROM "job" WHERE title='Senior Backend Engineer' LIMIT 1), (SELECT id FROM job_function WHERE name='Backend' LIMIT 1), now(), now());

-- Job B: Mid pay, slightly older
INSERT INTO "job" (id, title, metadata, created_at, updated_at) VALUES
  ('aaaaaaaa-aaaa-aaaa-aaaa-000000000002', 'Frontend Developer', '{"company":"BetaCo","organization":"BetaCo"}'::json, now() - interval '10 days', now() - interval '10 days');

INSERT INTO job_detail (id, job_id, job_title, description, min_pay, max_pay, opening_date, closing_date, review_date, job_type_id)
VALUES ('bbbbbbbb-bbbb-bbbb-bbbb-000000000002', (SELECT id FROM "job" WHERE title='Frontend Developer' LIMIT 1), 'Frontend Developer', 'Build user interfaces', 90000, 120000, now() - interval '10 days', now() + interval '20 days', now() - interval '3 days', (SELECT id FROM job_type WHERE name='Full Time' LIMIT 1));

INSERT INTO job_location (id, job_id, address, zip_geo)
VALUES ('cccccccc-cccc-cccc-cccc-000000000002', (SELECT id FROM "job" WHERE title='Frontend Developer' LIMIT 1), '200 River Rd, Townsville, US', NULL);

INSERT INTO job_category_selection (id, job_id, category_id, created_at, updated_at)
VALUES ('dddddddd-dddd-dddd-dddd-000000000002', (SELECT id FROM "job" WHERE title='Frontend Developer' LIMIT 1), (SELECT id FROM job_category WHERE name='Engineering' LIMIT 1), now(), now());

INSERT INTO job_function_selection (id, job_id, function_id, created_at, updated_at)
VALUES ('eeeeeeee-eeee-eeee-eeee-000000000002', (SELECT id FROM "job" WHERE title='Frontend Developer' LIMIT 1), (SELECT id FROM job_function WHERE name='Frontend' LIMIT 1), now(), now());

-- Job C: Entry level, low pay
INSERT INTO "job" (id, title, metadata, created_at, updated_at) VALUES
  ('aaaaaaaa-aaaa-aaaa-aaaa-000000000003', 'Junior UX Designer', '{"company":"DesignCo"}'::json, now() - interval '30 days', now() - interval '30 days');

INSERT INTO job_detail (id, job_id, job_title, description, min_pay, max_pay, opening_date, closing_date, review_date, job_type_id)
VALUES ('bbbbbbbb-bbbb-bbbb-bbbb-000000000003', (SELECT id FROM "job" WHERE title='Junior UX Designer' LIMIT 1), 'Junior UX Designer', 'Assist design team', 40000, 60000, now() - interval '30 days', now() + interval '30 days', now() - interval '10 days', (SELECT id FROM job_type WHERE name='Part Time' LIMIT 1));

INSERT INTO job_location (id, job_id, address, zip_geo)
VALUES ('cccccccc-cccc-cccc-cccc-000000000003', (SELECT id FROM "job" WHERE title='Junior UX Designer' LIMIT 1), '45 Studio Ave, Creativetown, US', NULL);

INSERT INTO job_category_selection (id, job_id, category_id, created_at, updated_at)
VALUES ('dddddddd-dddd-dddd-dddd-000000000003', (SELECT id FROM "job" WHERE title='Junior UX Designer' LIMIT 1), (SELECT id FROM job_category WHERE name='Design' LIMIT 1), now(), now());

INSERT INTO job_function_selection (id, job_id, function_id, created_at, updated_at)
VALUES ('eeeeeeee-eeee-eeee-eeee-000000000003', (SELECT id FROM "job" WHERE title='Junior UX Designer' LIMIT 1), (SELECT id FROM job_function WHERE name='UX' LIMIT 1), now(), now());

-- Job D: Contract, mid pay, older
INSERT INTO "job" (id, title, metadata, created_at, updated_at) VALUES
  ('aaaaaaaa-aaaa-aaaa-aaaa-000000000004', 'Contract Product Manager', '{"company":"ProdCorp"}'::json, now() - interval '90 days', now() - interval '90 days');

INSERT INTO job_detail (id, job_id, job_title, description, min_pay, max_pay, opening_date, closing_date, review_date, job_type_id)
VALUES ('bbbbbbbb-bbbb-bbbb-bbbb-000000000004', (SELECT id FROM "job" WHERE title='Contract Product Manager' LIMIT 1), 'Contract Product Manager', 'Lead product initiatives', 80000, 130000, now() - interval '90 days', now() + interval '10 days', now() - interval '30 days', (SELECT id FROM job_type WHERE name='Contract' LIMIT 1));

INSERT INTO job_location (id, job_id, address, zip_geo)
VALUES ('cccccccc-cccc-cccc-cccc-000000000004', (SELECT id FROM "job" WHERE title='Contract Product Manager' LIMIT 1), '77 Business Park, Worktown, US', NULL);

INSERT INTO job_category_selection (id, job_id, category_id, created_at, updated_at)
VALUES ('dddddddd-dddd-dddd-dddd-000000000004', (SELECT id FROM "job" WHERE title='Contract Product Manager' LIMIT 1), (SELECT id FROM job_category WHERE name='Product' LIMIT 1), now(), now());

INSERT INTO job_function_selection (id, job_id, function_id, created_at, updated_at)
VALUES ('eeeeeeee-eeee-eeee-eeee-000000000004', (SELECT id FROM "job" WHERE title='Contract Product Manager' LIMIT 1), (SELECT id FROM job_function WHERE name='Software Engineering' LIMIT 1), now(), now());


COMMIT;
SET session_replication_role = 'origin';
