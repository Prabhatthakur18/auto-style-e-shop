/*
  # Seed Initial Data

  1. Insert sample categories
  2. Insert sample products
  3. Insert sample reviews
  4. Insert admin user
*/

-- Insert main categories
INSERT INTO categories (id, name, description, image) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'Seat Cover', 'Premium seat covers for all vehicles', 'https://images.unsplash.com/photo-1617111490936-07b47eafdcd4?q=80&w=1976&auto=format&fit=crop'),
('550e8400-e29b-41d4-a716-446655440002', 'Accessories', 'Enhance your driving experience', 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop'),
('550e8400-e29b-41d4-a716-446655440003', 'Mats', 'High-quality mats for your vehicle', 'https://images.unsplash.com/photo-1618333258404-f509733839c4?q=80&w=1780&auto=format&fit=crop'),
('550e8400-e29b-41d4-a716-446655440004', 'Light & Utility', 'Make life easier on the road', 'https://images.unsplash.com/photo-1489686995744-f47e995ffe61?q=80&w=2071&auto=format&fit=crop'),
('550e8400-e29b-41d4-a716-446655440005', 'Audio & Security', 'Premium sound and safety solutions', 'https://images.unsplash.com/photo-1558537348-c0f8e733989d?q=80&w=1978&auto=format&fit=crop'),
('550e8400-e29b-41d4-a716-446655440006', 'Care & Fragrance', 'Keep your car fresh and clean', 'https://images.unsplash.com/photo-1527359443443-84a48aec73d2?q=80&w=2070&auto=format&fit=crop');

-- Insert subcategories for Seat Cover
INSERT INTO categories (id, name, parent_id, image) VALUES
('550e8400-e29b-41d4-a716-446655440011', '4 Wheeler', '550e8400-e29b-41d4-a716-446655440001', 'https://images.unsplash.com/photo-1605152322256-ff7c17bedd5b?q=80&w=2070&auto=format&fit=crop'),
('550e8400-e29b-41d4-a716-446655440012', '2 Wheeler', '550e8400-e29b-41d4-a716-446655440001', 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop');

-- Insert subcategories for Accessories
INSERT INTO categories (id, name, parent_id, image) VALUES
('550e8400-e29b-41d4-a716-446655440021', '4 Wheeler Accessories', '550e8400-e29b-41d4-a716-446655440002', 'https://images.unsplash.com/photo-1605152322256-ff7c17bedd5b?q=80&w=2070&auto=format&fit=crop'),
('550e8400-e29b-41d4-a716-446655440022', '2 Wheeler Accessories', '550e8400-e29b-41d4-a716-446655440002', 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop');

-- Insert subcategories for Mats
INSERT INTO categories (id, name, parent_id, image) VALUES
('550e8400-e29b-41d4-a716-446655440031', '2D Mat', '550e8400-e29b-41d4-a716-446655440003', 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop'),
('550e8400-e29b-41d4-a716-446655440032', '3D Mat', '550e8400-e29b-41d4-a716-446655440003', 'https://images.unsplash.com/photo-1606028638131-29913d642c04?q=80&w=1972&auto=format&fit=crop'),
('550e8400-e29b-41d4-a716-446655440033', '7D Mat', '550e8400-e29b-41d4-a716-446655440003', 'https://images.unsplash.com/photo-1603811478698-7e15b7d724b9?q=80&w=2070&auto=format&fit=crop');

-- Insert subcategories for Audio & Security
INSERT INTO categories (id, name, parent_id, image) VALUES
('550e8400-e29b-41d4-a716-446655440051', 'Infotainment System', '550e8400-e29b-41d4-a716-446655440005', 'https://images.unsplash.com/photo-1662947995687-d2cbe985cd50?q=80&w=2070&auto=format&fit=crop'),
('550e8400-e29b-41d4-a716-446655440052', 'Speakers', '550e8400-e29b-41d4-a716-446655440005', 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=2070&auto=format&fit=crop'),
('550e8400-e29b-41d4-a716-446655440053', 'Coaxial', '550e8400-e29b-41d4-a716-446655440052', 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2069&auto=format&fit=crop');

-- Insert sample products
INSERT INTO products (id, name, description, price, stock, category_id, images, additional_info, rating) VALUES
('650e8400-e29b-41d4-a716-446655440001', 'Premium Car Leather Seat Cover', 'Luxurious leather seat cover for maximum comfort and style. Made with premium quality leather that is durable and easy to clean.', 199.99, 50, '550e8400-e29b-41d4-a716-446655440011', 
'["https://images.unsplash.com/photo-1605152322256-ff7c17bedd5b?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1583248483203-555f3d850303?q=80&w=2067&auto=format&fit=crop"]'::jsonb,
'{"material": "Genuine Leather", "warranty": "1 year", "installation": "Easy"}'::jsonb, 4.8),

('650e8400-e29b-41d4-a716-446655440002', 'Classic Fabric Seat Cover', 'Breathable fabric seat cover perfect for daily use. These covers are designed to provide maximum comfort while protecting your original seats.', 89.99, 75, '550e8400-e29b-41d4-a716-446655440011',
'["https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"]'::jsonb,
'{"material": "Breathable Fabric", "washable": true, "colors": ["Black", "Gray", "Beige"]}'::jsonb, 4.5),

('650e8400-e29b-41d4-a716-446655440003', '3D Premium Car Mat', 'Custom-fit 3D car mat with superior protection. These mats are designed with raised edges to contain spills and debris.', 149.99, 30, '550e8400-e29b-41d4-a716-446655440032',
'["https://images.unsplash.com/photo-1606028638131-29913d642c04?q=80&w=1972&auto=format&fit=crop", "https://images.unsplash.com/photo-1597007466934-2cf33ac13db9?q=80&w=1974&auto=format&fit=crop"]'::jsonb,
'{"waterproof": true, "anti_slip": true, "material": "Heavy-duty TPE"}'::jsonb, 4.9),

('650e8400-e29b-41d4-a716-446655440004', 'Coaxial Car Speaker', 'High-quality coaxial speakers for superior sound. These speakers deliver crystal clear highs and deep, rich bass.', 129.99, 25, '550e8400-e29b-41d4-a716-446655440053',
'["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2069&auto=format&fit=crop", "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1974&auto=format&fit=crop"]'::jsonb,
'{"power": "300W", "impedance": "4 ohm", "size": "6.5 inch"}'::jsonb, 4.7),

('650e8400-e29b-41d4-a716-446655440005', 'Car Perfume Diffuser', 'Long-lasting car perfume with natural fragrances. This elegant diffuser releases a subtle, pleasant aroma.', 19.99, 100, '550e8400-e29b-41d4-a716-446655440006',
'["https://images.unsplash.com/photo-1527359443443-84a48aec73d2?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1532635042-a6f6ad4745f9?q=80&w=2070&auto=format&fit=crop"]'::jsonb,
'{"duration": "30 days", "scents": ["Lavender", "Ocean", "Vanilla"], "refillable": true}'::jsonb, 4.4);

-- Insert sample reviews
INSERT INTO reviews (product_id, user_name, rating, comment) VALUES
('650e8400-e29b-41d4-a716-446655440001', 'John D.', 5, 'These leather seat covers are amazing! Perfect fit and excellent quality.'),
('650e8400-e29b-41d4-a716-446655440001', 'Sarah M.', 4, 'Great quality for the price. Installation was a bit tricky but worth it.'),
('650e8400-e29b-41d4-a716-446655440002', 'Michael T.', 5, 'The fabric is breathable and very comfortable. Highly recommend!'),
('650e8400-e29b-41d4-a716-446655440003', 'David R.', 5, 'Perfect fit for my SUV. These 3D mats catch all the dirt and are easy to clean.'),
('650e8400-e29b-41d4-a716-446655440004', 'Robert J.', 5, 'The sound quality is exceptional. Easy to install and makes a huge difference.'),
('650e8400-e29b-41d4-a716-446655440005', 'Jessica L.', 4, 'Long-lasting fragrance that isn''t overpowering. Perfect for my car.');

-- Insert default admin user (password: admin123)
-- Note: In production, use a proper password hashing library
INSERT INTO admin_users (id, username, password_hash, email) VALUES
('750e8400-e29b-41d4-a716-446655440001', 'admin', '$2b$10$rOzJqQZQQQQQQQQQQQQQQu', 'admin@autoform.com');