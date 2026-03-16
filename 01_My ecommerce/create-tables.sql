DROP TABLE IF EXISTS Order_Items CASCADE;
DROP TABLE IF EXISTS Orders CASCADE;
DROP TABLE IF EXISTS Products CASCADE;
DROP TABLE IF EXISTS Categories CASCADE;
DROP TABLE IF EXISTS Customers CASCADE;

-- 2. สร้างตาราง Customers (ลูกค้า)
CREATE TABLE Customers (
    customer_id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. สร้างตาราง Categories (หมวดหมู่สินค้า)
CREATE TABLE Categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

-- 4. สร้างตาราง Products (สินค้า)
CREATE TABLE Products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    category_id INTEGER REFERENCES Categories(category_id) ON DELETE SET NULL,
    material VARCHAR(255),
    capacity_liters FLOAT,
    dimensions VARCHAR(255),
    price DECIMAL(10,2) NOT NULL DEFAULT 0.00, 
    stock_quantity INTEGER DEFAULT 0,
    image_url VARCHAR(255)
);