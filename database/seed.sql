INSERT INTO certificates (
certificate_id,
holder_name,
commodity,
purity,
weight,
origin,
issue_date,
status
)
VALUES
(
'ZINA-2026-000001',
'Amina Wanjiku',
'Gold',
'99.99%',
'1,000 grams',
'East Africa',
'2026-01-15',
'Verified'
),
(
'ZINA-2026-000002',
'David Otieno',
'Silver',
'99.95%',
'5,000 grams',
'East Africa',
'2026-02-22',
'Verified'
),
(
'ZINA-2026-000003',
'James Mwangi',
'Copper',
'99.90%',
'10,000 grams',
'Africa',
'2026-03-10',
'Verified'
)
ON CONFLICT (certificate_id) DO NOTHING;