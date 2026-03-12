 -- 1. ลบตารางเก่าทิ้งทั้งหมด (เรียงตามลำดับจากตารางลูกไปหาตารางแม่)
    2 DROP TABLE IF EXISTS Order_Items CASCADE;
    3 DROP TABLE IF EXISTS Orders CASCADE;
    4 DROP TABLE IF EXISTS Products CASCADE;
    5 DROP TABLE IF EXISTS Categories CASCADE;
    6 DROP TABLE IF EXISTS Customers CASCADE;
    7
    8 -- 2. สร้างตาราง Customers (ลูกค้า)
    9 CREATE TABLE Customers (
   10     customer_id SERIAL PRIMARY KEY,
   11     full_name VARCHAR(255),
   12     email VARCHAR(255),
   13     phone VARCHAR(20),
   14     address TEXT
   15 );
   16
   17 -- 3. สร้างตาราง Categories (หมวดหมู่สินค้า)
   18 CREATE TABLE Categories (
   19     category_id SERIAL PRIMARY KEY,
   20     category_name VARCHAR(255)
   21 );
   22
   23 -- 4. สร้างตาราง Products (สินค้า)
   24 CREATE TABLE Products (
   25     product_id SERIAL PRIMARY KEY,
   26     product_name VARCHAR(255),
   27     category_id INTEGER REFERENCES Categories(category_id),
   28     material VARCHAR(255),
   29     capacity_liters FLOAT,
   30     dimensions VARCHAR(255),
   31     price MONEY,
   32     stock_quantity INTEGER,
   33     image_url VARCHAR(255)
   34 );
   35
   36 -- 5. สร้างตาราง Orders (คำสั่งซื้อ)
   37 CREATE TABLE Orders (
   38     order_id SERIAL PRIMARY KEY,
   39     customer_id INTEGER REFERENCES Customers(customer_id),
   40     order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   41     status VARCHAR(50),
   42     total_amount MONEY,
   43     tracking_number VARCHAR(255)
   44 );
   45
   46 -- 6. สร้างตาราง Order_Items (รายการสินค้าในแต่ละคำสั่งซื้อ)
   47 CREATE TABLE Order_Items (
   48     order_item_id SERIAL PRIMARY KEY,
   49     order_id INTEGER REFERENCES Orders(order_id),
   50     product_id INTEGER REFERENCES Products(product_id),
   51     quantity INTEGER,
   52     unit_price MONEY
   ); 